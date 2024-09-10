const defaultPopupOptions = {
  setup: true,
  className: 'active'
}

class Popup {
  /**
   * @type {HTMLElement}
   */
  body

  /**
   * @type {HTMLElement}
   */
  popup

  /**
   * @type {HTMLElement}
   */
  popupButton

  /**
   * @type {HTMLElement}
   */
  popupBackground
  /**
   * @type {HTMLElement}
   */
  popupDialog
  /**
   * @type {HTMLElement}
   */
  popupForm
  /**
   * @type {HTMLElement}
   */
  popupCloseButton

  /**
   * @type {defaultPopupOptions}
   */
  options

  _getScreenWidthWithoutScrollbar() {
    return document.body.clientWidth
  }

  _setup() {
    this.popupButton.addEventListener('click', () => this.open())
    this.popupCloseButton.addEventListener('click', () => this.close())
  }

  /**
   * @param {HTMLElement} popup 
   * @param {HTMLElement} popupButton 
   * @param {defaultPopupOptions} options 
   */
  constructor(popup, popupButton, options = defaultPopupOptions) {
    this.body = document.querySelector('body')

    this.popup = popup

    this.popupBackground = popup.querySelector('.popup__background')
    this.popupDialog = popup.querySelector('.popup__dialog')
    this.popupForm = popup.querySelector('.popup__form')
    this.popupCloseButton = popup.querySelector('.popup__closeButton')

    this.popupButton = popupButton

    this.options = {
      setup: options.setup ?? defaultPopupOptions.setup,
      className: options.className ?? defaultPopupOptions.className
    }

    if (this.options.setup) {
      this._setup()
    }
  }

  open() {
    const width = this._getScreenWidthWithoutScrollbar()

    this.popupBackground.style.width = `${width}px`

    if (window.getComputedStyle(this.popupBackground).width === `${width}px`) {
      this.popup.removeAttribute('hidden')
      this.body.classList.add('lock_scroll')
      this.popupDialog.setAttribute('open', '')

      if (window.getComputedStyle(this.popup).display !== 'none') {
        this.popup.classList.add(this.options.className)
      }
    }
  }

  close() {
    this.popup.classList.remove(this.options.className)
    this.body.classList.remove('lock_scroll')
    this.popupDialog.removeAttribute('open')

    this.popupBackground.addEventListener('transitionend', () => {
      if (!this.popup.classList.contains(this.options.className)) {
        this.popup.setAttribute('hidden', '')
      }
    }, { once: true })
  }

  toggle() {
    if (this.popup.classList.contains(this.options.className)) {
      this.close()
    } else {
      this.open()
    }
  }
}

export { Popup }
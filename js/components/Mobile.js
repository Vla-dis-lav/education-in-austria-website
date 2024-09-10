const defaultMobileOptions = {
  setup: true,
  resizeEvent: true,
  clickEvent: true
}

class Mobile {
  /**
   * @type {HTMLElement}
   */
  website

  /**
   * @type {HTMLElement}
   */
  headerLogo
  /**
   * @type {HTMLElement}
   */
  headerSearch
  /**
   * @type {HTMLElement}
   */
  headerPhone
  /**
   * @type {HTMLElement}
   */
  headerSocialMedia
  /**
   * @type {HTMLElement}
   */
  headerAuthorization

  /**
   * @type {HTMLElement}
   */
  headerTop
  /**
   * @type {HTMLElement}
   */
  headerBottom
  /**
   * @type {HTMLElement}
   */
  headerNav

  /**
   * @type {HTMLElement}
   */
  menuBurger

  /**
   * @type {number}
   */
  breakpoint

  /**
   * @type {defaultMobileOptions}
   */
  options

  _clickEvent() {
    this.menuBurger.addEventListener('click', () => this.toggle())
  }

  _resizeEvent() {
    window.addEventListener('resize', () => this.resize())
  }

  _setup() {
    this.resize()
  }

  /**
   * @param {number} breakpoint 
   * @param {defaultMobileOptions} options 
   */
  constructor(breakpoint, options = defaultMobileOptions) {
    this.website = document.querySelector('.website')

    this.headerLogo = document.querySelector('.header__logo')
    this.headerSearch = document.querySelector('.header__search')
    this.headerPhone = document.querySelector('.header__phone')
    this.headerSocialMedia = document.querySelector('.header__socialMedia')
    this.headerAuthorization = document.querySelector('.header__authorization')

    this.headerTop = document.querySelector('.header__top')
    this.headerBottom = document.querySelector('.header__bottom')
    this.headerNav = document.querySelector('.header__nav')

    this.menuBurger = document.querySelector('.header__menuBurger')

    this.breakpoint = breakpoint

    this.options = {
      setup: options.setup ?? defaultMobileOptions.setup,
      resizeEvent: options.resizeEvent ?? defaultMobileOptions.resizeEvent,
      clickEvent: options.clickEvent ?? defaultMobileOptions.clickEvent
    }

    if (this.options.setup) {
      this._setup()
    }

    if (this.options.resizeEvent) {
      this._resizeEvent()
    }

    if (this.options.clickEvent) {
      this._clickEvent()
    }
  }

  resize() {
    const width = window.innerWidth
    /**
     * @type {HTMLElement}
     */
    const mobile = document.querySelector('.header .mobile')

    if (width <= this.breakpoint && !mobile) {
      this.headerLogo.insertAdjacentHTML('afterend', [
        `<div class="mobile" hidden>`,
        `  <div class="mobile__background">`,
        `    <div class="mobile__block"></div>`,
        `  </div>`,
        `</div>`
      ].join(''))

      /**
       * @type {HTMLElement}
       */
      const mobileBlock = document.querySelector('.header .mobile__block')

      mobileBlock.append(
        this.headerSearch, this.headerPhone, this.headerSocialMedia, this.headerAuthorization, this.headerNav
      )

      this.headerBottom.remove()
    }

    if (width > this.breakpoint && mobile) {
      this.headerLogo.insertAdjacentElement('afterend', this.headerSearch)
      this.headerSearch.insertAdjacentElement('afterend', this.headerPhone)
      this.headerPhone.insertAdjacentElement('afterend', this.headerSocialMedia)
      this.headerSocialMedia.insertAdjacentElement('afterend', this.headerAuthorization)

      this.headerTop.insertAdjacentElement('afterend', this.headerBottom)

      this.headerBottom.append(this.headerNav)

      mobile.remove()
    }
  }

  open() {
    this.menuBurger.classList.add('active')

    /**
     * @type {HTMLElement}
     */
    const mobile = document.querySelector('.header .mobile')
    mobile.removeAttribute('hidden')

    /**
     * @type {HTMLElement}
     */
    const mobileBlock = document.querySelector('.header .mobile__block')
    const height = mobileBlock.offsetHeight
    this.website.style.height = `${height}px`
    this.website.style.overflow = 'hidden'

    if (window.getComputedStyle(mobile).display !== 'none') {
      mobile.classList.add('active')
    }
  }

  close() {
    this.website.style.overflow = 'scroll'

    this.website.style.height = 'stretch'

    this.menuBurger.classList.remove('active')

    /**
     * @type {HTMLElement}
     */
    const mobile = document.querySelector('.header .mobile')
    mobile.classList.remove('active')

    /**
     * @type {HTMLElement}
     */
    const mobileBackground = document.querySelector('.mobile__background')
    mobileBackground.addEventListener('transitionend', () => {
      if (!mobileBackground.classList.contains('active')) {
        mobile.setAttribute('hidden', '')
      }
    }, { once: true })
  }

  toggle() {
    if (this.menuBurger.classList.contains('active')) {
      this.close()
    } else {
      this.open()
    }
  }
}

export { Mobile }
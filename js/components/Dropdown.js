import height from "../util/height.js"

const defaultDropdownOptions = {
  setup: true,
  className: 'active',
  clickEvent: true,
  clickPast: false,
  popper: true
}

class Dropdown {
  /**
   * @type {HTMLElement}
   */
  dropdown

  /**
   * @type {HTMLElement}
   */
  dropdownButton
  /**
   * @type {HTMLElement}
   */
  dropdownList

  /**
   * @type {defaultDropdownOptions}
   */
  options

  _setup() {
    if (this.dropdown.classList.contains(this.options.className)) {
      this.open()
    } else {
      this.close()
    }
  }

  _clickEvent() {
    this.dropdownButton.addEventListener('click', () => this.toggle())
  }

  _clickPast() {
    document.addEventListener('click', (event) => {
      /**
       * @type {HTMLElement}
       */
      const targetElement = event.target
      /**
       * @type {HTMLElement}
       */
      const closestElement = targetElement.closest('.dropdown')

      if (!closestElement || closestElement !== this.dropdown) {
        this.close()
      }
    })
  }

  _popper() {
    Popper.createPopper(this.dropdownButton, this.dropdownList, {
      placement: 'bottom-start',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 6],
          },
        },
      ],
    })
  }

  /**
   * @param {HTMLElement} dropdown 
   * @param {defaultDropdownOptions} options 
   */
  constructor(dropdown, options = defaultDropdownOptions) {
    this.dropdown = dropdown

    this.dropdownButton = this.dropdown.querySelector('.dropdown__button')
    this.dropdownList = this.dropdown.querySelector('.dropdown__list')

    this.options = {
      setup: options.setup ?? defaultDropdownOptions.setup,
      className: options.className ?? defaultDropdownOptions.className,
      clickEvent: options.clickEvent ?? defaultDropdownOptions.clickEvent,
      clickPast: options.clickPast ?? defaultDropdownOptions.clickPast,
      popper: options.popper ?? defaultDropdownOptions.popper
    }

    if (this.options.setup) {
      this._setup()
    }

    if (this.options.clickEvent) {
      this._clickEvent()
    }

    if (this.options.clickPast) {
      this._clickPast()
    }

    if (this.options.popper) {
      this._popper()
    }
  }

  open() {
    this.dropdown.classList.add(this.options.className)

    this.dropdownList.style.height = `${height(this.dropdownList)}px`
  }

  close() {
    this.dropdown.classList.remove(this.options.className)

    this.dropdownList.style.height = '0px'
  }

  toggle() {
    if (this.dropdown.classList.contains(this.options.className)) {
      this.close()
    } else {
      this.open()
    }
  }
}

export { Dropdown }
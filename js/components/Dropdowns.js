import { Dropdown } from "./Dropdown.js"

const defaultDropdownsOptions = {
  createDropdownArray: true,
  once: true,
  clickPast: true,
  openFirstActive: true,
  openByDefault: true
}

class Dropdowns {
  /**
   * @type {Dropdown[]}
   */
  dropdowns

  /**
   * @type {HTMLElement[]}
   */
  dropdownHTMLElements

  /**
   * @type {defaultDropdownsOptions}
   */
  options

  _createDropdownArray() {
    this.dropdownHTMLElements.forEach(dropdownElement => {
      const clickEvent = this.options.once ? false : true

      this.dropdowns.push(new Dropdown(dropdownElement, { clickEvent: clickEvent }))
    })
  }

  _setupOnce() {
    this.dropdowns.forEach(dropdown => {
      dropdown.dropdownButton.addEventListener('click', () => {
        dropdown.toggle()

        this.once(dropdown)
      })
    })
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

      this.dropdowns.forEach(dropdown => {
        if (closestElement !== dropdown.dropdown) {
          dropdown.close()
        }
      })
    })
  }

  _openFirstActive() {
    let openElements = []

    this.dropdowns.forEach(dropdown => {
      if (dropdown.dropdown.classList.contains(dropdown.options.className)) {
        openElements.push(dropdown)
      }
    })

    if (
      Array.isArray(openElements) &&
      openElements.length !== 0
    ) {
      this.open(openElements[0])
    }
  }

  _openByDefault() {
    let openByDefault = []

    this.dropdowns.forEach(dropdown => {
      if (dropdown.dropdown.classList.contains('open_by_default')) {
        openByDefault.push(dropdown)
      }
    })

    if (
      Array.isArray(openByDefault) &&
      openByDefault.length !== 0
    ) {
      openByDefault.forEach(openByDefault => {
        this.open(openByDefault)
      })
    }
  }

  /**
   * @param {HTMLElement[]} dropdownHTMLElements 
   * @param {defaultDropdownsOptions} options 
   */
  constructor(dropdownHTMLElements, options = defaultDropdownsOptions) {
    this.dropdowns = []

    this.dropdownHTMLElements = dropdownHTMLElements

    this.options = {
      createDropdownArray: options.createDropdownArray ?? defaultDropdownsOptions.createDropdownArray,
      once: options.once ?? defaultDropdownsOptions.once,
      clickPast: options.clickPast ?? defaultDropdownsOptions.clickPast,
      openFirstActive: options.openFirstActive ?? defaultDropdownsOptions.openFirstActive,
      openByDefault: options.openByDefault ?? defaultDropdownsOptions.openByDefault
    }

    if (this.options.createDropdownArray) {
      this._createDropdownArray()

      if (this.options.once) {
        this._setupOnce()
      }

      if (this.options.clickPast) {
        this._clickPast()
      }

      if (this.options.openFirstActive) {
        this._openFirstActive()
      }

      if (this.options.openByDefault) {
        this._openByDefault()
      }
    }
  }

  once(dropdown) {
    this.dropdowns.forEach(dropdown2 => {
      if (dropdown2 !== dropdown) {
        dropdown2.close()
      }
    })
  }

  open(dropdown) {
    dropdown.open()

    if (this.options.once) {
      this.once(dropdown)
    }
  }
}

export { Dropdowns }
const defaultSelectedOnceOptions = {
  setup: true,
  className: 'active'
}

class SelectedOnce {
  /**
   * @type {HTMLElement[]}
   */
  elements

  /**
   * @type {defaultSelectedOnceOptions}
   */
  options

  _setup() {
    this.elements.forEach(element => {
      element.addEventListener('click', () => {
        element.classList.add(this.options.className)

        this.elements.forEach(element2 => {
          if (element2 !== element) {
            element2.classList.remove(this.options.className)
          }
        })
      })
    })
  }

  /**
   * @param {HTMLElement} elements 
   * @param {defaultSelectedOnceOptions} options 
   */
  constructor(elements, options = defaultSelectedOnceOptions) {
    this.elements = elements

    this.options = {
      setup: options.setup ?? defaultSelectedOnceOptions.setup,
      className: options.className ?? defaultSelectedOnceOptions.className
    }

    if (this.options.setup) {
      this._setup()
    }
  }
}

export { SelectedOnce }
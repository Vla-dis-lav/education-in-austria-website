const defaultFocusOptions = {
  setup: true,
  className: 'active'
}

class Focus {
  /**
   * @type {HTMLElement}
   */
  focus

  /**
   * @type {HTMLElement[]}
   */
  elements

  /**
   * @type {defaultFocusOptions}
   */
  options

  _setup() {
    this.elements.forEach(element => {
      element.addEventListener('focus', () => this.focus.classList.add(this.options.className))
      element.addEventListener('blur', () => this.focus.classList.remove(this.options.className))
    })
  }

  /**
   * @param {HTMLElement} focus 
   * @param {HTMLElement[]} elements 
   * @param {defaultFocusOptions} options 
   */
  constructor(focus, elements, options = defaultFocusOptions) {
    this.focus = focus
    this.elements = elements

    this.options = {
      setup: options.setup ?? defaultFocusOptions.setup,
      className: options.className ?? defaultFocusOptions.className
    }

    if (this.options.setup) {
      this._setup()
    }
  }
}

export { Focus }
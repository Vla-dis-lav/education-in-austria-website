import { Accordion } from "./Accordion.js"

const defaultAccordionsOptions = {
  createAccordionArray: true,
  once: false,
  openFirstActive: true,
  openByDefault: true
}

class Accordions {
  /**
   * @type {Accordion[]}
   */
  accordions

  /**
   * @type {HTMLElement[]}
   */
  accordionHTMLElements

  /**
   * @type {defaultAccordionsOptions}
   */
  options

  _createAccordionArray() {
    this.accordionHTMLElements.forEach(accordion => {
      const clickEvent = this.options.once ? false : true

      this.accordions.push(new Accordion(accordion, { clickEvent: clickEvent }))
    })
  }

  _setupOnce() {
    this.accordions.forEach(accordion => {
      accordion.accordionButton.addEventListener('click', () => {
        accordion.toggle()

        this.once(accordion)
      })
    })
  }

  _openFirstActive() {
    let openElements = []

    this.accordions.forEach(accordion => {
      if (accordion.accordion.classList.contains(accordion.options.className)) {
        openElements.push(accordion)
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

    this.accordions.forEach(accordion => {
      if (accordion.accordion.classList.contains('open_by_default')) {
        openByDefault.push(accordion)
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
   * @param {HTMLElement[]} accordionHTMLElements 
   * @param {defaultAccordionsOptions} options 
   */
  constructor(accordionHTMLElements, options = defaultAccordionsOptions) {
    this.accordions = []

    this.accordionHTMLElements = accordionHTMLElements

    this.options = {
      createAccordionArray: options.createAccordionArray ?? defaultAccordionsOptions.createAccordionArray,
      once: options.once ?? defaultAccordionsOptions.once,
      openFirstActive: options.openFirstActive ?? defaultAccordionsOptions.openFirstActive,
      openByDefault: options.openByDefault ?? defaultAccordionsOptions.openByDefault
    }

    if (this.options.createAccordionArray) {
      this._createAccordionArray()

      if (this.options.once) {
        this._setupOnce()
      }

      if (this.options.openFirstActive) {
        this._openFirstActive()
      }

      if (this.options.openByDefault) {
        this._openByDefault()
      }
    }
  }

  /**
   * 
   * @param {Accordion} accordion 
   */
  once(accordion) {
    this.accordions.forEach(accordion2 => {
      if (accordion2 !== accordion) {
        accordion2.close()
      }
    })
  }

  /**
   * 
   * @param {Accordion} accordion 
   */
  open(accordion) {
    accordion.open()

    if (this.options.once) {
      this.once(accordion)
    }
  }
}

export { Accordions }
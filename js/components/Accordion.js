import height from "../util/height.js"

const defaultAccordionOptions = {
  setup: true,
  className: 'active',
  clickEvent: true
}

class Accordion {
  /**
   * @type {HTMLElement}
   */
  accordion

  /**
   * @type {HTMLElement}
   */
  accordionButton
  /**
   * @type {HTMLElement}
   */
  accordionSubTitle

  /**
   * @type {defaultAccordionOptions}
   */
  options

  _setup() {
    if (this.accordion.classList.contains(this.options.className)) {
      this.open()
    } else {
      this.close()
    }
  }

  _clickEvent() {
    this.accordionButton.addEventListener('click', () => this.toggle())
  }

  /**
   * @param {HTMLElement} accordion 
   * @param {defaultAccordionOptions} options 
   */
  constructor(accordion, options = defaultAccordionOptions) {
    this.accordion = accordion

    this.accordionButton = this.accordion.querySelector('.accordion__button')
    this.accordionSubTitle = this.accordion.querySelector('.accordion__subTitle')

    this.options = {
      setup: options.setup ?? defaultAccordionOptions.setup,
      className: options.className ?? defaultAccordionOptions.className,
      clickEvent: options.clickEvent ?? defaultAccordionOptions.clickEvent
    }

    if (this.options.setup) {
      this._setup()
    }

    if (this.options.clickEvent) {
      this._clickEvent()
    }
  }

  open() {
    this.accordion.classList.add(this.options.className)

    this.accordionSubTitle.style.height = `${height(this.accordionSubTitle)}px`
  }

  close() {
    this.accordion.classList.remove(this.options.className)

    this.accordionSubTitle.style.height = '0px'
  }

  toggle() {
    if (this.accordion.classList.contains(this.options.className)) {
      this.close()
    } else {
      this.open()
    }
  }
}

export { Accordion }
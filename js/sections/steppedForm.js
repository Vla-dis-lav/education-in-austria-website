export const steppedForm = () => {
  /**
   * @type {HTMLElement}
   */
  const steppedFormSlider = document.querySelector('.steppedForm .steppedForm__slider')

  /**
   * @type {HTMLElement}
   */
  const prevButton = document.querySelector('.steppedForm .controlButtons__backButton')
  /**
   * @type {HTMLElement}
   */
  const nextButton = document.querySelector('.steppedForm .controlButtons__nextButton')

  /**
   * @type {HTMLElement}
   */
  const pagination = document.querySelector('.steppedForm .steppedForm__pagination')

  new Swiper(steppedFormSlider, {
    direction: 'horizontal',
    loop: false,

    pagination: {
      el: pagination,
      clickable: true,
      bulletElement: 'button',
      bulletClass: 'steppedForm__step',
      bulletActiveClass: 'active'
    },

    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },

    slidesPerView: 1,

    on: {
      paginationUpdate: () => {
        /**
         * @type {HTMLElement}
         */
        const currentStep = document.querySelector('.steppedForm .steppedForm__step.active')

        /**
         * @type {HTMLElement}
         */
        let prevElement = currentStep.previousElementSibling
        while (prevElement) {
          prevElement.classList.add('passed')
          prevElement = prevElement.previousElementSibling
        }

        /**
         * @type {HTMLElement}
         */
        let nextElement = currentStep.nextElementSibling
        while (nextElement) {
          nextElement.classList.remove('passed')
          nextElement = nextElement.nextElementSibling
        }
      }
    }
  })
}
export const educationAdvantages = () => {
  /**
   * @type {HTMLElement}
   */
  const slider = document.querySelector('.educationAdvantages .swiper')

  /**
   * @type {HTMLElement}
   */
  const prevButton = document.querySelector('.educationAdvantages .sliderButtons__prevButton')
  /**
   * @type {HTMLElement}
   */
  const nextButton = document.querySelector('.educationAdvantages .sliderButtons__nextButton')

  new Swiper(slider, {
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },

    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
      917: {
        slidesPerView: 2
      },
      1267: {
        slidesPerView: 3
      }
    }
  })
}
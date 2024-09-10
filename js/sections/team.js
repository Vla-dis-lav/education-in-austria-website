export const team = () => {
  /**
   * @type {HTMLElement}
   */
  const slider = document.querySelector('.team .swiper')

  /**
   * @type {HTMLElement}
   */
  const prevButton = document.querySelector('.team .sliderButtons__prevButton')
  /**
   * @type {HTMLElement}
   */
  const nextButton = document.querySelector('.team .sliderButtons__nextButton')

  new Swiper(slider, {
    direction: 'horizontal',
    loop: false,

    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },

    slidesPerView: 'auto',

    speed: 500,
  })
}
export const feedback = () => {
  /**
   * @type {HTMLElement}
   */
  const slider = document.querySelector('.feedback .swiper')

  /**
   * @type {HTMLElement}
   */
  const prevButton = document.querySelector('.feedback .sliderButtons__prevButton')
  /**
   * @type {HTMLElement}
   */
  const nextButton = document.querySelector('.feedback .sliderButtons__nextButton')

  new Swiper(slider, {
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },

    slidesPerView: 1,
    spaceBetween: 20,

    speed: 1000,

    autoplay:{
      delay: 5000
    }
  })
}
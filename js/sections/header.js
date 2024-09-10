import { Dropdowns } from "../components/Dropdowns.js"
import { Focus } from "../components/Focus.js"
import { Mobile } from "../components/Mobile.js"
import { Popup } from "../components/Popup.js"

export const header = () => {
  new Focus(
    document.querySelector('.header__search .search__form'),
    [
      document.querySelector('.header__search .search__input'),
      document.querySelector('.header__search .search__submit')
    ]
  )
  new Dropdowns([...document.querySelectorAll('.dropdown')])
  new Popup(
    document.querySelector('.popup__authorization'),
    document.querySelector('.authorization__button')
  )
  new Mobile(1061)
}
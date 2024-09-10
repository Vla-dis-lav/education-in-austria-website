import { Accordions } from "../components/Accordions.js"
import { SelectedOnce } from "../components/SelectedOnce.js"

export const educationInAustria = () => {
  new Accordions([...document.querySelectorAll('.educationInAustria__accordion')], { once: true })
  new SelectedOnce([...document.querySelectorAll('.educationInAustria__button')], { className: 'primary' })
}
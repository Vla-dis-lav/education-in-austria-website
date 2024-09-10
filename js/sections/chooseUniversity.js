import { SelectedOnce } from "../components/SelectedOnce.js"

export const chooseUniversity = () => {
  new SelectedOnce([...document.querySelectorAll('.chooseUniversity .filter__button')])
}
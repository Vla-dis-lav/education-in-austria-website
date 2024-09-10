/**
 * @param element {HTMLElement}
 */
export default (element) => {
  /**
   * @type {HTMLElement}
   */
  const clonedElement = element.cloneNode(true)

  clonedElement.style.height = 'auto'

  element.insertAdjacentElement('beforebegin', clonedElement)

  const height = clonedElement.offsetHeight

  clonedElement.remove()

  return height
}
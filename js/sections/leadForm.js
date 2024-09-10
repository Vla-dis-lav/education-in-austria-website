import { ru } from "../../libraries/intl-tel-input-24.4.0/build/js/i18n/index.js";

export const leadForm = () => {
  /**
   * @type {HTMLElement}
   */
  const leadFormTel = document.querySelector('.leadForm__tel')

  window.intlTelInput(leadFormTel, {
    i18n: ru,
    initialCountry: "ru",
    strictMode: true,
  });
}
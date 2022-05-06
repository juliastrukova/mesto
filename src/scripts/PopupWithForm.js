import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
    constructor(popupSelector, {handleFormSubmit}) {
      super(popupSelector);
      this._handleFormSubmit = handleFormSubmit;
      this._popupSelectorForm = document.querySelector('.popup__form')
    }

    _getInputValues() {
      this._inputList = this._popupSelector.querySelectorAll('.popup__edit-info')
      this._formValues = {};
      this._inputList.forEach(input => {
        this._formValues[input.name] = input.value
      })
      return this._formValues;
    }

    setEventListeners() {
      super.setEventListeners()
      this._popupSelectorForm.addEventListener('submit', (e) => {
        e.preventDefault()
        this._handleFormSubmit()
        this.close()
      })
    }

    close() {
    super.close()
    this._popupSelectorForm.reset()
    }
} 
import  Popup  from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupSelector,  handleFormSubmit) {
      super(popupSelector);
      this._handleFormSubmit = handleFormSubmit;
      this._popupForm = this._popupSelector.querySelector('.popup__form');
      this._inputList = this._popupSelector.querySelectorAll('.popup__edit-info');
    }

    _getInputValues() {
      this._formValues = {};
      this._inputList.forEach((input) => {
        this._formValues[input.id] = input.value;
      });
      return this._formValues;
    }

    close() {
      super.close();
      this._popupForm.reset();
    }

    setEventListeners() {
      super.setEventListeners();
      this._popupForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
      });
  }
} 
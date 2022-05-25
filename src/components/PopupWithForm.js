import  Popup  from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = this._popup.querySelectorAll('.popup__edit-info');
    this._buttonSave = this._popup.querySelector('.popup__button-save');
    }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.id] = input.value;
    });
      return formValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  renderLoading(isLoading, initialTextButton='Сохранить') {
    if(isLoading) {
      this._buttonSave.textContent = 'Сохранение...';
    } else {
      this._buttonSave.textContent = initialTextButton;
    }
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

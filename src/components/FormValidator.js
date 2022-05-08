export default class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formSet = config.formSet;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

_showInputError = (inputElement) => {
  const errorElement = this._formElement.querySelector(`#${inputElement.id}Error`);
  inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(this._errorClass);
};

_hideInputError = (inputElement) => {
  const errorElement = this._formElement.querySelector(`#${inputElement.id}Error`);
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = '';
};

_checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    this._showInputError(inputElement);
  } else {
    this._hideInputError(inputElement);
  }
};

_hasInvalidInput() {
  return this._inputList.some((input) => {
    return !input.validity.valid;
  })
};

resetErrors () {
  this._toggleButtonState();
  this._inputList.forEach ( (inputElement) => {
  this._hideInputError (inputElement);
});
};

_toggleButtonState () {
  const condition = typeof resetErrors === 'undefined' ? !this._hasInvalidInput() : resetErrors;
  if (condition) {
    this._buttonElement.removeAttribute('disabled', '');
  } else {
    this._buttonElement.setAttribute('disabled', '');
  }
};

_setEventListeners() {
  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
    });
  });
};

enableValidation() {
  this._setEventListeners();
};
}
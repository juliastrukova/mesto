const validationList = {
  formSelector: '.popup__form',
  inputSelector: '.popup__edit-info',
  submitButtonSelector: '.popup__button-save',
  inputErrorClass: 'popup__edit-info_error',
  errorClass: '.popup__error_visible',
  formSet: '.popup__form-set'
}

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}Error`);
  inputElement.classList.add(validationList.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationList.errorClass);
};

const hideInputError = (formElement, inputElement) => {
const errorElement = formElement.querySelector(`#${inputElement.id}Error`);
inputElement.classList.remove(validationList.inputErrorClass);
errorElement.classList.remove(validationList.errorClass);
errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
if (!inputElement.validity.valid) {
  showInputError(formElement, inputElement, inputElement.validationMessage);
} else {
  hideInputError(formElement, inputElement);
}
};

const hasInvalidInput = (inputList) => {
return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
})
};

const toggleButtonState = (inputList, buttonElement) => {
  buttonElement.disabled = hasInvalidInput(inputList);
};


const setEventListeners = (formElement) => {
const inputList = Array.from(formElement.querySelectorAll(validationList.inputSelector));
const buttonElement = formElement.querySelector(validationList.submitButtonSelector);
inputList.forEach((inputElement) => {
  inputElement.addEventListener('input', () => {
    checkInputValidity(formElement, inputElement);
    toggleButtonState(inputList, buttonElement);
  });
});
};

const enableValidation = (validationList) => {
const formList = Array.from(document.querySelectorAll(validationList.formSelector));
formList.forEach((formElement) => {
  setEventListeners(formElement)

const fieldsetList = Array.from(formElement.querySelectorAll(validationList.formSet));
fieldsetList.forEach((fieldSet) => {
  setEventListeners(fieldSet);
});
});
};

const setInitialState = (formElement) => {
const inputList = Array.from(formElement.querySelectorAll(validationList.inputSelector));
const buttonElement = formElement.querySelector(validationList.submitButtonSelector);
inputList.forEach((inputElement) => {
hideInputError(formElement, inputElement);
toggleButtonState(inputList, buttonElement);
});
};

enableValidation(validationList);
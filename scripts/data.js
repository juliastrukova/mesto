
// config
const validationList = {
  formSelector: '.popup__form',
  inputSelector: '.popup__edit-info',
  submitButtonSelector: '.popup__button-save',
  inputErrorClass: 'popup__edit-info_error',
  errorClass: '.popup__error_visible',
  formSet: '.popup__form-set'
}

// базовые карточки
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__edit-info',
  submitButtonSelector: '.popup__button-save',
  inputErrorClass: 'popup__edit-info_error',
  errorClass: '.popup__error_visible',
  formSet: '.popup__form-set'
};

export {initialCards, config};
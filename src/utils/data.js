// константы
const popupCard = document.querySelector('.popup_card');
const popupUser = document.querySelector('.popup_user');
const popupAvatar = document.querySelector('.popup_avatar')
const userButtonEdit = document.querySelector('.profile__edit-button');
const nameInput = document.getElementById('name');
const infoInput = document.getElementById('about');
const cardName = document.getElementById('cardName');
const cardUrl = document.getElementById('cardUrl');
const formElement = document.querySelector('.popup__form');
const addButton = document.querySelector('.profile__add-button');
const containerSelector = '.photo-grid';
const cardSelector = '.template';
const buttonEditAvatar = document.querySelector('.profile__avatar-button');
const avatarLink = document.querySelector('.profile__avatar');

// базовые карточки
const items = [
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

// config
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__edit-info',
  submitButtonSelector: '.popup__button-save',
  inputErrorClass: 'popup__edit-info_error',
  errorClass: 'popup__error_visible',
  formSet: '.popup__form-set'
};

export {items, config, popupCard, popupUser, popupAvatar, userButtonEdit, nameInput, infoInput, formElement, addButton, containerSelector, cardUrl, cardName, cardSelector, buttonEditAvatar, avatarLink};
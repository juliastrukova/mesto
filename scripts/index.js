import { Card} from './сards.js';
import {initialCards, config} from './data.js';
import {FormValidator} from  './FormValidator.js';

const popup = document.querySelectorAll('.popup'); // попап

// ПОПАП РЕДАКТИРОВАНИЯ ПРОФИЛЯ
const popupUser = document.querySelector('.popup_user'); // попап редактирования профиля
const userButtonOpen = document.querySelector('.profile__edit-button'); //открытие попапа редактирования профиля 
const userButtonClose = document.querySelector('.popup__button-close'); // закрытие попапа редактирования профиля
const formElement = document.querySelector('.popup__form'); // форма редактирования профиля
const nameInput = document.getElementById('name'); // имя в попапе
const descriptionInput = document.getElementById('description'); // описание в попапе
const profile = document.querySelector('.profile'); // профиль
const profileName = document.querySelector('.profile__name'); // место для имени профиля
const profileDescription = document.querySelector('.profile__description'); // место для описания профиля

const nameError = document.getElementById('nameError'); // текст ошибки 
const descriptionError = document.getElementById('descriptionError'); // текст ошибки 

// ПОПАП ДЛЯ ДОБАВЛЕНИЯ КАРТОЧКИ
const popupCard = document.querySelector('.popup_card'); // попап добавления карточки
const addButton = document.querySelector('.profile__add-button'); // кнопка для добавления карточки
const cardButtonClose = popupCard.querySelector('.popup__button-close'); // кнопка закрытия попапа редактирования карточки
const buttonSaveCard = document.querySelector('.popup_card .popup__button-save'); //кнопка сохранения карточки
const buttonSaveUser = document.querySelector('.popup_user .popup__button-save'); //кнопка сохранения карточки
const inputCardName = document.getElementById('cardName');
const inputCardUrl = document.getElementById('cardUrl');


 // блок для карточек
 const cards = document.querySelector('.photo-grid'); // местро для карточек
 const template = document.querySelector('.template'); // блок для карточек

// ПОПАП ОТКРЫТИЯ ИЗОБРАЖЕНИЙ
const imageButtonClose = popupImage.querySelector('.popup__button-close');


// функции открытия/закрытия попапа
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  validPopupUser.resetErrors(form);
  validPopupCard.resetErrors(form);
  closePopupESCEvent();
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  closePopupESCRemoveEvent();
  form.reset();
}

function openPopupProfile() {
  openPopup(popupUser);
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

// функция сохранения формы в профиль
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(popupUser);
}

// закрытие попапа по клику за форму
popup.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup);
    }
  })
});

// закрытие попапа по esc
function closePopupESC (evt) {
  if (evt.key === 'Escape') {
      const popupOpened = document.querySelector('.popup_opened');
      closePopup(popupOpened);
  }
};

function closePopupESCEvent() {
  document.addEventListener('keydown', closePopupESC);
};

function closePopupESCRemoveEvent() {
  document.removeEventListener('keydown', closePopupESC);
};

function handleAddCardFormSubmit(evt) { 
  evt.preventDefault();
  const nameValue = inputCardName.value;
  const srcValue = inputCardUrl.value;
  const altValue = inputCardUrl.value;
  renderCard(nameValue, srcValue, altValue);
  closePopup(popupCard);
  validPopupCard.toggleButtonStateOff();
  form.reset();
}

function createCard() {
  initialCards.forEach((item) => {
    renderCard(item.name, item.link);
  });
}

function renderCard(name, link) {
  const card = new Card(name, link);
  const newCard = card.generateCard();
  insertCard (newCard);
}

function insertCard (newCard){
  cards.prepend(newCard);
}

const validPopupUser = new FormValidator(config, popupUser);
validPopupUser.enableValidation();

const validPopupCard = new FormValidator(config, popupCard);
validPopupCard.enableValidation();

cardButtonClose.addEventListener('click', () => closePopup(popupCard)); // закрывает попап добавления места
addButton.addEventListener('click', () => openPopup(popupCard)); // открывает попап добавления места
userButtonOpen.addEventListener('click', openPopupProfile);
userButtonClose.addEventListener('click', () => closePopup(popupUser));
formElement.addEventListener('submit', handleProfileFormSubmit);
imageButtonClose.addEventListener('click', () => closePopup(popupImage));
buttonSaveCard.addEventListener('click', handleAddCardFormSubmit);

createCard();
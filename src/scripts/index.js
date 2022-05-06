import '../pages/index.css';
import { Card } from './сards.js';
import { initialCards, config} from './data.js';
import {FormValidator} from  './FormValidator.js';
import { Section } from './Section.js';
import { Popup } from './Popup.js';
import { PopupWithForm } from './PopupWithForm.js';
import { PopupWithImage } from './PopupWithImage.js';
import { UserInfo } from './UserInfo.js';


// ПОПАП РЕДАКТИРОВАНИЯ ПРОФИЛЯ
const userButtonOpen = document.querySelector('.profile__edit-button'); //открытие попапа редактирования профиля 
const userButtonClose = document.querySelector('.popup__button-close'); // закрытие попапа редактирования профиля
const formElement = document.querySelector('.popup__form'); // форма редактирования профиля

const profile = document.querySelector('.profile'); // профиль


const nameError = document.getElementById('nameError'); // текст ошибки 
const descriptionError = document.getElementById('descriptionError'); // текст ошибки 

// ПОПАП ДЛЯ ДОБАВЛЕНИЯ КАРТОЧКИ
const addButton = document.querySelector('.profile__add-button'); // кнопка для добавления карточки
const cardButtonClose = document.querySelector('.popup_card .popup__button-close'); // кнопка закрытия попапа редактирования карточки
const buttonSaveCard = document.querySelector('.popup_card .popup__button-save'); //кнопка сохранения карточки
const buttonSaveUser = document.querySelector('.popup_user .popup__button-save'); //кнопка сохранения карточки
const inputCardName = document.getElementById('cardName');
const inputCardUrl = document.getElementById('cardUrl');

const nameInput = document.getElementById('name'); // имя в попапе
const descriptionInput = document.getElementById('description'); // описание в попапе
const profileName = document.querySelector('.profile__name'); // место для имени профиля
const profileDescription = document.querySelector('.profile__description'); // место для описания профиля


 // блок для карточек
 const cards = document.querySelector('.photo-grid'); // местро для карточек
 const template = document.querySelector('.template'); // блок для карточек

// ПОПАП ОТКРЫТИЯ ИЗОБРАЖЕНИЙ
const imageButtonClose = document.querySelector('.popup_image .popup__button-close');

const imageName = document.querySelector('.popup__image-name');
const imageUrl = document.querySelector('.popup__image-url');

// функции открытия/закрытия попапа

const popupWithImage = new PopupWithImage('.popup_image');
const user = new UserInfo({name: '.profile__name', info: '.profile__description'});

const popupCard = new PopupWithForm({
  handleSubmitForm: (item) => {
    const cardElem = createCard(item);
    cardList.addItem(cardElem);
    popupCard.close()
  }
}, '.popup_card');

//const validPopupCard = new FormValidator(config, popupCard);
//validPopupCard.enableValidation();

const popupUser = new PopupWithForm({
  handleSubmitForm: (item) => {
    user.setUserInfo(item)
    popupUser.close()
  }
}, '.popup_user');

//const validPopupUser = new FormValidator(config, popupUser);
//validPopupUser.enableValidation();

function createCard(data) {
  const card = new Card({data: data, handleCardClick: (name, link) => {
    popupWithImage.open(name, link);
  }}, '#template');
  return card;
}


const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  },
},  '.photo-grid'
);

cardList.setItems();

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  const userInfo = user.getUserInfo()
  nameInput.value = userInfo.profileName;
  descriptionInput.value = userInfo.profileDescription;
  //validPopupUser.resetErrors(form);
  open(popupUser);
}


function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  form.reset();
  validPopupCard.resetErrors(form);
  open(popupCard);
}

cardButtonClose.addEventListener('click', () => close(popupCard)); // закрывает попап добавления места
addButton.addEventListener('click', () => open()); // открывает попап добавления места
userButtonOpen.addEventListener('click', () => open(popupUser));
userButtonClose.addEventListener('click', () => close(popupUser));
formElement.addEventListener('submit', handleProfileFormSubmit);
imageButtonClose.addEventListener('click', () => close(popupImage));
buttonSaveCard.addEventListener('click', handleAddCardFormSubmit);
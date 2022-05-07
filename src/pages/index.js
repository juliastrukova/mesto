import '../pages/index.css';
import Card from '../components/сards.js';
import { 
  items,
  config,
  popupCard,
  popupUser,
  userButtonEdit,
  nameInput,
  infoInput,
  formElement,
  addButton,
  containerSelector,
  cardUrl,
  cardName,
  cardTemplate
} from '../components/data.js';
import FormValidator from  '../components/FormValidator.js';
import  Section  from '../components/Section.js';
import  Popup  from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import { data } from 'autoprefixer';

//валидация карточки
const validPopupCard = new FormValidator(config, popupCard);
validPopupCard.enableValidation();

// валидация профиля
const validPopupUser = new FormValidator(config, popupUser);
validPopupUser.enableValidation();

//открытие изображений
const popupWithImage = new PopupWithImage({popupSelector: '.popup_image'});

const handleCardClick = (data) => {
  popupWithImage.open(data);
  popupWithImage.setEventListeners();
}

// карточки
const popupWithFormAdd  = new PopupWithForm({popupSelector:'.popup_card'},(data)  => {
  const newdata = {
    name: cardName.value,
    link: cardUrl.value
};
  handleAddCardFormSubmit(newdata);
  popupWithFormAdd.close();
});
popupWithFormAdd.setEventListeners();

addButton.addEventListener('click', () => {
  validPopupCard.resetErrors();
  popupWithFormAdd.open();
});

const handleAddCardFormSubmit = (newdata) => cardList.addItem(createCard(newdata));

addButton.addEventListener('click', () => {
  validPopupCard.resetErrors();
  popupWithFormAdd.open();
});

function createCard(item) {
  const newCard = new Card({
    data: item,
    handleCardClick
  }, cardTemplate);
  const cardElement = newCard.generateCard();
  return cardElement
}

const cardList = new Section({
  items: items,
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.addItem(cardElement);
  }
}, containerSelector);

cardList.renderItems();

// пользователь
const userInfo = new UserInfo({
  profileName: '.profile__name',
  profileInfo:  '.profile__description',
});

const popupWithFormEdit = new PopupWithForm ({popupSelector: '.popup_user'}, ({name, description}) => {
  userInfo.setUserInfo({name, description});
  popupWithFormEdit.close();
});
popupWithFormEdit.setEventListeners();

userButtonEdit.addEventListener('click', () => {
  nameInput.value = userInfo.getUserInfo().name;
  infoInput.value = userInfo.getUserInfo().description; 
  validPopupUser.resetErrors();
  popupWithFormEdit.open();
});
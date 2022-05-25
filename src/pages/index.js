import '../pages/index.css';
import Api from '../components/Api';
import Card from '../components/Card.js';
import {
  items,
  config,
  popupCard,
  popupUser,
  popupAvatar,
  userButtonEdit,
  nameInput,
  infoInput,
  formElement,
  addButton,
  containerSelector,
  cardUrl,
  cardName,
  cardSelector,
  buttonEditAvatar,
  avatarLink
} from '../utils/data.js';
import FormValidator from  '../components/FormValidator.js';
import  Section  from '../components/Section.js';
import  Popup  from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import UserInfo from '../components/UserInfo.js';
import { data } from 'autoprefixer';

let userId;
let cardSection;

// Api
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-41",
  headers: {
    authorization: "02f6e90a-30a9-4ad1-b28b-811c4ab0a33c",
    'Content-Type': 'application/json'
  },
});

Promise.all([api.getInitialCards(), api.getInitialUser()])
  .then(([initialCards, intialUser]) => {
    cardSection = new Section(
      {
        items: initialCards,
        renderer: renderCard
      },
      containerSelector
    );
    userInfo.setUserInfo({name: intialUser.name, about: intialUser.about, avatar: intialUser.avatar});
    userId = intialUser._id;
    cardSection.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

//валидация
const validPopupCard = new FormValidator(config, popupCard);
validPopupCard.enableValidation();

const validPopupUser = new FormValidator(config, popupUser);
validPopupUser.enableValidation();

const validPopupAvatar = new FormValidator(config, popupAvatar);
validPopupAvatar.enableValidation();

//открытие изображений
const popupWithImage = new PopupWithImage({popupSelector: '.popup_image'});
popupWithImage.setEventListeners();

const handleCardClick = (data) => {
  popupWithImage.open(data);
};

// удаление карточки
const popupDeleteCard = new PopupWithSubmit({popupSelector: '.popup_delete'});
popupDeleteCard.setEventListeners(api);

function handleDeleteIconClick(element, id) {
  popupDeleteCard.open(element, id);
}

// карточки
function renderCard(data) {
  const card = new Card({data, handleCardClick, handleDeleteIconClick}, api, cardSelector, userId);
  const cardElement = card.createCard();
  return cardElement;
}

const popupWithFormAdd = new PopupWithForm({popupSelector:'.popup_card'}, (data) => {
  popupWithFormAdd.renderLoading(true);
  api.addCard(data)
    .then((res) => {
      cardSection.addItem(renderCard(res));
      popupWithFormAdd.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithFormAdd.renderLoading(false, 'Создать');
    });
});
popupWithFormAdd.setEventListeners();

addButton.addEventListener('click', () => {
  validPopupCard.resetErrors();
  popupWithFormAdd.open();
});

// пользователь
const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileInfoSelector:  '.profile__description',
  avatar: avatarLink
});

const popupWithFormEdit = new PopupWithForm({popupSelector: '.popup_user'}, (data) => {
  popupWithFormEdit.renderLoading(true);
  api.setUser(data.name, data.about)
    .then((res) => {
      userInfo.setUserInfo({name: res.name, about: res.about, avatar: res.avatar});
      popupWithFormEdit.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithFormEdit.renderLoading(false);
    });
  });
popupWithFormEdit.setEventListeners();

userButtonEdit.addEventListener('click', () => {
  popupWithFormEdit.setInputValues(userInfo.getUserInfo());
  validPopupUser.resetErrors();
  popupWithFormEdit.open();
});

// аватар
const popupEditAvatar = new PopupWithForm({popupSelector:'.popup_avatar'},  (data) => {
  popupEditAvatar.renderLoading(true);
  api.setAvatar(data.avatarUrl)
    .then((res) => {
      userInfo.setUserInfo({name: res.name, about: res.about, avatar: res.avatar});
      popupEditAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditAvatar.renderLoading(false);
    });
});
popupEditAvatar.setEventListeners();

buttonEditAvatar.addEventListener('click', () => {
  validPopupAvatar.resetErrors();
  popupEditAvatar.open();
});

// идеи по улучшению коду поняла, воспользуюсь ими при переписывании кода на реакт :) Спасибо!
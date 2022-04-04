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
const inputCardName = document.getElementById('cardName'); // название в попапе
const inputCardUrl = document.getElementById('cardUrl'); // ссылка в попапе
const cardButtonClose = popupCard.querySelector('.popup__button-close'); // кнопка закрытия попапа редактирования карточки
const cardForm = popupCard.querySelector('.popup__form'); // форма попапа в редактировании
const buttonSaveCard = document.querySelector('.popup_card .popup__button-save'); //кнопка сохранения карточки
const buttonSaveUser = document.querySelector('.popup_user .popup__button-save'); //кнопка сохранения карточки

const cards = document.querySelector('.photo-grid'); // местро для карточек
const template = document.querySelector('.template'); // блок для карточек

// ПОПАП ОТКРЫТИЯ ИЗОБРАЖЕНИЙ
const popupImage = document.querySelector('.popup_image');
const imageButtonClose = popupImage.querySelector('.popup__button-close');
const popupImageUrl = document.querySelector('.popup__image-url');
const popupImageName = document.querySelector('.popup__image-name');

// функции открытия/закрытия попапа

function openPopup(popup) {
  popup.classList.add('popup_opened');
  buttonSaveCard.disabled = true;
  closePopupESCEvent();
}

// убирание ошибок в popup_user после закрытия
function hideError() {
  nameError.textContent = '';
  descriptionError.textContent = '';
  nameInput.classList.remove('popup__edit-info_error');
  descriptionInput.classList.remove('popup__edit-info_error');
  buttonSaveUser.disabled = false;
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  closePopupESCRemoveEvent();
  hideError();
}

function openPopupProfile() {
  openPopup(popupUser);
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

// функция сохранения формы в профиль
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(popupUser);
}

// функции внутри карточек
function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

function likeCard(evt) {
  evt.target.classList.toggle('card__like-active');
}

// создание карточек
const createCard = (item) => {
  const newCard = template.content.querySelector('.card').cloneNode(true);
  const buttonDeleteCard = newCard.querySelector('.card__delete');
  const buttonLike = newCard.querySelector('.card__like');
  buttonDeleteCard.addEventListener('click', deleteCard);
  buttonLike.addEventListener('click', likeCard);
  const cardImage = newCard.querySelector('.card__image');
  const cardName = newCard.querySelector('.card__title');
  cardName.textContent = item.name;
  cardImage.alt = item.name;
  cardImage.src = item.link;
  cardImage.addEventListener('click', () => openPhoto(item));
  return newCard;
};

// функция открытия изображения
function openPhoto(item) {
  popupImageName.textContent = item.name;
  popupImageUrl.alt = item.name;
  popupImageUrl.src = item.link;
  openPopup(popupImage);
 }

 function renderCard(item) {
  const newCard = createCard(item)
  cards.prepend(newCard);
}
initialCards.forEach(renderCard);

function handleCardFormSubmit(evt) { 
  evt.preventDefault(); 
  renderCard(({ name: inputCardName.value, link: inputCardUrl.value }) );
  closePopup(popupCard); 
  form.reset();
};

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

cardButtonClose.addEventListener('click', () => closePopup(popupCard)); // закрывает попап добавления места
addButton.addEventListener('click', () => openPopup(popupCard)); // открывает попап добавления места
userButtonOpen.addEventListener('click', openPopupProfile);
userButtonClose.addEventListener('click', () => closePopup(popupUser));
formElement.addEventListener('submit', formSubmitHandler);
cardForm.addEventListener('submit', handleCardFormSubmit);
imageButtonClose.addEventListener('click', () => closePopup(popupImage));
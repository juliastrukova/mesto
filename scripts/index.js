const popup = document.querySelector('.popup'); // попап

// ПОПАП РЕДАКТИРОВАНИЯ ПРОФИЛЯ
const popupUser = document.querySelector('.popup_user'); // попап редактирования профиля
const openUserButton = document.querySelector('.profile__edit-button'); //открытие попапа редактирования профиля 
const closeUserButton = document.querySelector('.popup__button-close'); // закрытие попапа редактирования профиля
const formElement = document.querySelector('.popup__form'); // форма редактирования профиля
const nameInput = document.getElementById('name'); // имя в попапе
const descriptionInput = document.getElementById('description'); // описание в попапе
const profile = document.querySelector('.profile'); // профиль
const profileName = document.querySelector('.profile__name'); // место для имени профиля
const profileDescription = document.querySelector('.profile__description'); // место для описания профиля

// ПОПАП ДЛЯ ДОБАВЛЕНИЯ КАРТОЧКИ
const popupCard = document.querySelector('.popup_card'); // попап добавления карточки
const addButton = document.querySelector('.profile__add-button'); // кнопка для добавления карточки
const inputCardName = document.getElementById('cardName'); // название в попапе
const inputCardUrl = document.getElementById('cardUrl'); // ссылка в попапе
const closeCardButton = popupCard.querySelector('.popup__button-close'); // кнопка закрытия попапа редактирования карточки
const cardForm = popupCard.querySelector('.popup__form'); // форма попапа в редактировании
const cards = document.querySelector('.photo-grid'); // местро для карточек
const template = document.querySelector('.template'); // блок для карточек

// ПОПАП ОТКРЫТИЯ ИЗОБРАЖЕНИЙ
const popupImage = document.querySelector('.popup_image');
const closeImageButton = popupImage.querySelector('.popup__button-close');
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

// создание карточек
const createCard = (item) => {
  const newCard = template.content.querySelector('.card').cloneNode(true);
  newCard.querySelector('.card__title').textContent = item.name;
  newCard.querySelector('.card__image').src = item.link;
  const buttonDeleteCard = newCard.querySelector('.card__delete');
  const buttonLike = newCard.querySelector('.card__like');
  buttonDeleteCard.addEventListener('click', deleteCard);
  function likeCard() {
    buttonLike.classList.toggle('card__like-active');
  }
  buttonLike.addEventListener('click', likeCard);

  function openPhoto(photo) {
    openPopup(popupImage);
    photo.querySelector('.popup__image-url').src = item.link;
    photo.querySelector('.popup__image-url').alt = item.name;
    photo.querySelector('.popup__image-name').textContent = item.name;
  }
  newCard
    .querySelector('.card__image')
    .addEventListener('click', () => openPhoto(popupImage));
  return newCard;
};

const result = initialCards.map((item) => {
  return createCard(item);
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
}
  
function closePopup(popup) {
  popup.classList.remove('popup_opened');
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

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  cards.prepend(
    createCard({ name: inputCardName.value, link: inputCardUrl.value })
  );
  inputCardName.value = '';
  inputCardUrl.value = ''; 
  closePopup(popupCard);
}

function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

closeCardButton.addEventListener('click', () => closePopup(popupCard)); // закрывает попап добавления места
addButton.addEventListener('click', () => openPopup(popupCard)); // открывает попап добавления места
openUserButton.addEventListener('click', openPopupProfile);
closeUserButton.addEventListener('click', () => closePopup(popupUser));
formElement.addEventListener('submit', formSubmitHandler);
cardForm.addEventListener('submit', handleCardFormSubmit);
closeImageButton.addEventListener('click', () => closePopup(popupImage));
cards.append(...result);
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
const popupImageUrl = document.querySelector('.popup__image-url');
const popupImageName = document.querySelector('.popup__image-name');

// функуии открытия/закрытия попапа

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
  inputCardName.value = ''; 
  inputCardUrl.value = '';  
};

closeCardButton.addEventListener('click', () => closePopup(popupCard)); // закрывает попап добавления места
addButton.addEventListener('click', () => openPopup(popupCard)); // открывает попап добавления места
openUserButton.addEventListener('click', openPopupProfile);
closeUserButton.addEventListener('click', () => closePopup(popupUser));
formElement.addEventListener('submit', formSubmitHandler);
cardForm.addEventListener('submit', handleCardFormSubmit);
closeImageButton.addEventListener('click', () => closePopup(popupImage)); 

// объявление для открытия/закрытия формы
const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__button-close');
const savePopupButton = document.querySelector('.popup__button-save');
// объявления дл ясохранения формы из попапа в профиль
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('description');
// функции открытия/закрытия формы
function openPopup(event) {
  event.preventDefault();
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);

// функция сохранения формы в профиль
function formSubmitHandler (evt) {
  evt.preventDefault();
  const userName = nameInput.value;
  const userDescription = descriptionInput.value;
  const profileName = document.querySelector('.profile__name');
  const profileDescription = document.querySelector('.profile__description');
  profileName.textContent = userName;
  profileDescription.textContent = userDescription;
  closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);
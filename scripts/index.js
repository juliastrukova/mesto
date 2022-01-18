// объявление для открытия/закрытия формы
const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__button-close');
// объявления для сохранения формы из попапа в профиль
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('description');
const profile = document.querySelector('.profile');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
// функции открытия/закрытия формы
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);

// функция сохранения формы в профиль
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);
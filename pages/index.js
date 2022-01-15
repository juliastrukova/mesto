
(function () {
	var flag = 0;
	buttonHeart1.onclick = function () {
		if (flag == 0) { 
  buttonHeart1.classList.add('element__heart');
  buttonHeart1.classList.remove('element__heart-active');
			flag = 1;
		} else {
      buttonHeart1.classList.remove('element__heart');
      buttonHeart1.classList.add('element__heart-active');
			flag = 0;
		}
	}
})();

(function () {
	var flag = 0;
	buttonHeart2.onclick = function () {
		if (flag == 0) { 
  buttonHeart2.classList.add('element__heart');
  buttonHeart2.classList.remove('element__heart-active');
			flag = 1;
		} else {
      buttonHeart2.classList.remove('element__heart');
      buttonHeart2.classList.add('element__heart-active');
			flag = 0;
		}
	}
})();

(function () {
	var flag = 0;
	buttonHeart3.onclick = function () {
		if (flag == 0) { 
  buttonHeart3.classList.add('element__heart');
  buttonHeart3.classList.remove('element__heart-active');
			flag = 1;
		} else {
      buttonHeart3.classList.remove('element__heart');
      buttonHeart3.classList.add('element__heart-active');
			flag = 0;
		}
	}
})();

(function () {
	var flag = 0;
	buttonHeart4.onclick = function () {
		if (flag == 0) { 
  buttonHeart4.classList.add('element__heart');
  buttonHeart4.classList.remove('element__heart-active');
			flag = 1;
		} else {
      buttonHeart4.classList.remove('element__heart');
      buttonHeart4.classList.add('element__heart-active');
			flag = 0;
		}
	}
})();

(function () {
	var flag = 0;
	buttonHeart5.onclick = function () {
		if (flag == 0) { 
  buttonHeart5.classList.add('element__heart');
  buttonHeart5.classList.remove('element__heart-active');
			flag = 1;
		} else {
      buttonHeart5.classList.remove('element__heart');
      buttonHeart5.classList.add('element__heart-active');
			flag = 0;
		}
	}
})();

(function () {
	var flag = 0;
	buttonHeart6.onclick = function () {
		if (flag == 0) { 
  buttonHeart6.classList.add('element__heart');
  buttonHeart6.classList.remove('element__heart-active');
			flag = 1;
		} else {
      buttonHeart6.classList.remove('element__heart');
      buttonHeart6.classList.add('element__heart-active');
			flag = 0;
		}
	}
})();


(function () {

	popupOpened.onclick = function () {

			popupButton.classList.add('popup_opened');
		
	}
})();

(function () {
	popupClose.onclick = function () {
	     popupButton.classList.remove('popup_opened');
	}
})();

let formElement = document.querySelector('.popup__form')
let nameInput = document.querySelector('.popup__edit-name')
let descriptionInput = document.querySelector('.popup__edit-description')
function formSubmitHandler (evt) {
    evt.preventDefault();
	profileName.textContent = nameInput.value;
	profileDescription.textContent  = descriptionInput.value;
}
 formElement.addEventListener('submit', formSubmitHandler);
 (function () {
	buttonSave.onclick = function () {
	     popupButton.classList.remove('popup_opened');
	}
})();

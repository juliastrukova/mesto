import Popup from "./Popup";

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector, element){
    super(popupSelector);
    this._element = element;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._buttonSave = this._popup.querySelector('.popup__button-save');
  }

  open(element, id) {
    super.open();
    this._card = element;
    this._id = id;
  }

  _deleteCard(card) {
    card.remove();
    card = null;
  }

  setEventListeners(api) {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._renderLoading(true);
      api.deleteCard(this._id)
        .then(() => {
          this._deleteCard(this._card);
          this.close();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this._renderLoading(false);
        })
      
    });
  }

  _renderLoading (isLoading) {
    if(isLoading) {
      this._buttonSave.textContent = "Удаление...";
    } else {
      this._buttonSave.textContent = "Да";
    }
  }
} 
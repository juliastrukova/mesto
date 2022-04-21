import {openPopup} from './index.js'

class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
}
  _getTemplate() {
    const template = document.querySelector('.template');
    const itemTemplate = template.content.querySelector('.card').cloneNode(true);
    return itemTemplate;
  }

  _likeCard (evt) {
    evt.target.classList.toggle('card__like-active');
  }

  _deleteCard(evt) {
    evt.target.closest('.card').remove();
  }

  _openPhoto () {
    const popupImage = document.querySelector('.popup_image');
    const popupImageName = document.querySelector('.popup__image-name');
    const popupImageUrl = document.querySelector('.popup__image-url');
    popupImageName.textContent = this._name;
    popupImageUrl.src = this._link;
    popupImageUrl.alt = this._name;
    openPopup(popupImage)
  }

  generateCard() {
    this._card = this._getTemplate();
    this._setEventListeners();
    this._card.querySelector('.card__title').textContent = this._name;
    this._card.querySelector('.card__image').src = this._link;
    this._card.querySelector('.card__image').alt = this._name;
    return this._card;
  }

  _setEventListeners() {
    this._card.querySelector('.card__image').addEventListener('click', () => {this._openPhoto()});
    this._card.querySelector('.card__like').addEventListener('click', (evt) => { this._likeCard(evt)});
    this._card.querySelector('.card__delete').addEventListener('click', (evt) => { this._deleteCard(evt)});
  }
}

export {Card};
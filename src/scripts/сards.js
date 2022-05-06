export class Card {
  constructor({data, handleCardClick}) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
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

  generateCard() {
    this._card = this._getTemplate();
    this._setEventListeners();
    const cardImage = this._card.querySelector('.card__image');
    this._card.querySelector('.card__title').textContent = this._name;
    cardImage.src = this._link;
    cardImage.alt = this._name;
    return this._card;
  }

  _setEventListeners() {
    this._card.querySelector('.card__image').addEventListener('click', () => {this._handleCardClick(this._name, this._link)});
    this._card.querySelector('.card__like').addEventListener('click', (evt) => { this._likeCard(evt)});
    this._card.querySelector('.card__delete').addEventListener('click', (evt) => { this._deleteCard(evt)});
  }
}
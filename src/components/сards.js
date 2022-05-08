export default class Card {
  constructor({data, handleCardClick}, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }
  
  _getTemplate() {
    const template = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return template;
  }

  _likeCard(evt) { 
    this._buttonLike.classList.toggle('card__like-active'); 
}

  _deleteCard() {
    this._card.remove();
    this._card = null;
  }

  generateCard() {
    this._card = this._getTemplate();
    this._buttonLike = this._card.querySelector('.card__like');
    this._buttonDelete = this._card.querySelector('.card__delete');
    this._cardImage = this._card.querySelector('.card__image');
    this._setEventListeners();
    this._card.querySelector('.card__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    return this._card;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._handleCardClick({name: this._name, link: this._link}));
    this._buttonLike.addEventListener('click', (evt) => { this._likeCard(evt)});
    this._buttonDelete.addEventListener('click', (evt) => { this._deleteCard(evt)});
  }
}
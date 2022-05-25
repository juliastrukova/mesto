export default class Card {
  constructor({data, handleCardClick, handleDeleteIconClick}, api, cardSelector, userId) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._like = data.likes;
    this._userId = userId;
    this._userIdPhoto = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._cardSelector = cardSelector;
    this._api = api;

    if (data.likes) {
      this._likes = data.likes.length;
    } else {
      this._likes = 0;
    }
  }
  
  _getTemplate() {
    const template = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return template;
  }

  createCard() {
    this._card = this._getTemplate();
    this._buttonLike = this._card.querySelector('.card__like');
    this._buttonDelete = this._card.querySelector('.card__delete');
    this._cardImage = this._card.querySelector('.card__image');
    this._likesNumber = this._card.querySelector('.card__like-number');
    this._card.querySelector('.card__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._likesNumber.textContent = this._likes;

    if (typeof this._like !== "undefined" && this._like.some((user) => {return user._id == this._userId})) {
      this._buttonLike.classList.add('card__like-active');
    };
    this._setEventListeners();
    if (this._userIdPhoto !== this._userId) {
      this._card.querySelector('.card__delete').remove();
    };
    return this._card;
  }

  _likeCard(id){
    if (!this._buttonLike.classList.contains('card__like-active')) {
      this._api.toggleLike(id, 'PUT')
      .then((res) => {return res.likes.length})
      .then((number) => {
        this._likesNumber.textContent = number;
      })
      .then(() => {
        this._buttonLike.classList.add('card__like-active');
      })
      .catch((err) => {
        console.log(err);
      });
    }  else {
      this._api.toggleLike(id, 'DELETE')
      .then((res) => {return res.likes.length})
      .then((number) => {
        this._likesNumber.textContent = number;
      })
      .then(() => {
        this._buttonLike.classList.remove('card__like-active');
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._handleCardClick({name: this._name, link: this._link}));
    this._buttonLike.addEventListener('click', () => {this._likeCard(this._id);});
    this._buttonDelete.addEventListener('click', () => {this._handleDeleteIconClick(this._card, this._id)});
  }
}
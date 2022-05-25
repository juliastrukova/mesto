export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // GET
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  getInitialUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  // PATCH
  setUser(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then(this._checkResponse);
  }

  setAvatar(avatarUrl) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method : 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarUrl
      })
    })
    .then(this._checkResponse);
  }
  // POST (добавление карточки)
  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.cardName,
        link: data.cardUrl
      })
    })
    .then(this._checkResponse);
  }

  // DELETE
  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method : 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse);
  }
  
  toggleLike(id, methodApi) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method : methodApi,
      headers: this._headers
    })
    .then(this._checkResponse);
  }
}
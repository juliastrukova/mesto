import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
      super(popupSelector)
      this._imageName = document.querySelector('.popup__image-name');
      this._imageUrl = document.querySelector('.popup__image-url');
    }

    open(name, link) {
      super.open();
      this._imageUrl.src = link;
      this._imageUrl.alt = name;
      this._imageName.textContent = name;
    }
} 
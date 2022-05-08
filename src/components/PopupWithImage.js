import  Popup  from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
      super(popupSelector)
      this._imageName = this._popup.querySelector('.popup__image-name');
      this._imageUrl = this._popup.querySelector('.popup__image-url');
    }

    open(data) {
      this._imageUrl.src = data.link;
      this._imageName.textContent = data.name;
      this._imageUrl.alt = data.name;
      super.open();
    }
} 
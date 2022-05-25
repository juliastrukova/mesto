export default class UserInfo {
  constructor({ profileNameSelector, profileInfoSelector, avatar}) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileInfo = document.querySelector(profileInfoSelector);
    this._avatarSrc = avatar;
  }

  getUserInfo() {
    return  {
      name: this._profileName.textContent,
      about: this._profileInfo.textContent,
    };
  }

  setUserInfo({name, about, avatar}) {
    this._profileName.textContent = name;
    this._profileInfo.textContent = about;
    this._avatarSrc.src = avatar;
  }
} 
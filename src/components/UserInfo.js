export default class UserInfo {
  constructor({ profileNameSelector, profileInfoSelector }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileInfo = document.querySelector(profileInfoSelector);
  }

  getUserInfo() {
    return  {
      name: this._profileName.textContent,
      description: this._profileInfo.textContent,
    };
  }

  setUserInfo({name, description}) {
    this._profileName.textContent = name;
    this._profileInfo.textContent = description;
  }
} 
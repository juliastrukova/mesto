export default class UserInfo {
  constructor({ profileName, profileInfo }) {
    this._profileName = document.querySelector(profileName);
    this._profileInfo = document.querySelector(profileInfo);
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
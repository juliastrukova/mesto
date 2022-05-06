export class UserInfo {
  constructor({ name: profileName, info: profileInfo }) {
    this._profileName = document.querySelector(profileName)
    this._profileInfo = document.querySelector(profileInfo)
  }

  getUserInfo() {
    const dataUser = {
      name: this._profileName.textContent,
      info: this._profileInfo.textContent,
    }
    return dataUser
  }

  setUserInfo({ name, info }) {
    this._profileName.textContent = name;
    this._profileInfo.textContent = info;
  }
} 
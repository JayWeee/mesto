export default class UserInfo {
  constructor({ userName, aboutUser, avatar }) {
    this._userName = userName;
    this._aboutUser = aboutUser;
    this._avatar = avatar
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._aboutUser.textContent,
    }
  }

  setUserInfo({name, about, avatar}) {
    if (name) {
      this._userName.textContent = name
    }
    if (about) {
      this._aboutUser.textContent = about
    }
    if (avatar) {
      this._avatar.src = avatar
    }
  }
}
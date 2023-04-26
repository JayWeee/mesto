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
    this._userName.textContent = name;
    this._aboutUser.textContent = about;
    this._avatar.src = avatar;
  }
}
export default class UserInfo {
  constructor({ userName, userStatus }) {
    this._userName = userName;
    this._userStatus = userStatus;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userStatus.textContent
    }
  }

  setUserInfo({name, job}) {
    this._userName.textContent = name;
    this._userStatus.textContent = job;
  }
}
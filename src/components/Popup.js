export default class Popup {
  constructor(popupSelector) {
    this._popupItem = document.querySelector(popupSelector);
  }

  open() {
    this._popupItem.classList.add('popup_opened');
    this.setEventListeners();
  }

  close() {
    this._popupItem.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    document.removeEventListener('click', this._handleClickClose);
  }

  _handleClickClose = (evt) => {
    if (
      evt.target.classList.contains('popup__btn_action_close') ||
      evt.target.classList.contains('popup_opened')
    ) {
      this.close();
    }
  };

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  };

  setEventListeners() {
    document.addEventListener('click', this._handleClickClose);
    document.addEventListener('keydown', this._handleEscClose);
  }
}

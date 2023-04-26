import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, { callbackFormSubmit }) {
    super(popupSelector)
    this._callbackFormSubmit = callbackFormSubmit;
    this._popupForm = this._popupItem.querySelector('.popup__form');
  }

  _handleFormSubmit = (evt) => {
    evt.preventDefault()
    this._callbackFormSubmit(this._cardElement, this._cardId)
    super.close()
  }

  open(cardElement, cardId) {
    this._cardId = cardId;
    this._cardElement = cardElement;
    super.open()
  }

  setEventListeners = () => {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._handleFormSubmit);
  };
}
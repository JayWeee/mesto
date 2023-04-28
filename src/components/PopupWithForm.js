import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { callbackFormSubmit }) {
    super(popupSelector);
    this._popupForm = this._popupItem.querySelector('.popup__form');
    this._formInputList = this._popupItem.querySelectorAll('.popup__input');
    this._callbackFormSubmit = callbackFormSubmit;
    this._submitButton = this._popupForm.querySelector('.popup__btn_action_submit')
  }

  _getInputValues() {
    this._formValues = {};

    this._formInputList.forEach((item) => {
      this._formValues[item.name] = item.value;
    });

    return this._formValues;
  }

  _handleFormSubmit = (evt) => {
    evt.preventDefault();
    this._callbackFormSubmit(this._getInputValues(), this._submitButton);
  };

  setEventListeners = () => {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._handleFormSubmit);
  };

  close() {
    super.close();
    this._popupForm.reset();
  }
}

export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    

    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__title').textContent = this._name;
    this._element.querySelector('.card__image').alt = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._element
    .querySelector('.card__btn_action_like')
    .addEventListener('click', () => {
      this._handleCardLike();
    });

    this._element.
    querySelector('.card__btn_action_remove')
    .addEventListener('click', () => {
      this._handleCardRemove();
    });
  }

  _handleCardLike() {
    this._element
    .querySelector('.card__btn_action_like')
    .classList
    .toggle('card__btn_aciton_like-active')
  }

  _handleCardRemove() {
    this._element
    .querySelector('.card__btn_action_remove')
    .closest('.card')
    .remove()
  }
};

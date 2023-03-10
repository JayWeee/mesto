export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__image');
    this._cardTitle = this._element.querySelector('.card__title');
    this._likeButton = this._element.querySelector('.card__btn_action_like');
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._setEventListeners();

    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
    this._cardImage.alt = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleCardLike();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

    this._element
      .querySelector('.card__btn_action_remove')
      .addEventListener('click', () => {
        this._handleCardRemove();
      });
  }

  _handleCardLike() {
    this._likeButton.classList.toggle('card__btn_aciton_like-active');
  }

  _handleCardRemove() {
    this._element.remove();
  }
}

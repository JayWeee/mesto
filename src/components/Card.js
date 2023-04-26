export default class Card {
  constructor({name, link, likes, owner, _id}, templateSelector, { handleCardClick, handleCardRemove, handleCardLike }, curentId) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._userId = owner._id;
    this._cardId = _id;
    this._curentId = curentId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardRemove = handleCardRemove;
    this._handleCardLike = handleCardLike;
    this._isLiked = this._likes.filter(item => item._id === this._curentId).length > 0;
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__image');
    this._cardTitle = this._element.querySelector('.card__title');
    this._likeButton = this._element.querySelector('.card__btn_action_like');
    this._likeCounter = this._element.querySelector('.card__like-counter');
    this._removeIcon = this._element.querySelector('.card__btn_action_remove');
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
    this._showIconRemove()
    this._setUserLikes()
    
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
    this._cardImage.alt = this._name;
    this._likeCounter.textContent = this._likes.length;

    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleCardLike(this._isLiked);
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick({name: this._name, link: this._link});
    });

    this._element
      .querySelector('.card__btn_action_remove')
      .addEventListener('click', () => {
        this._handleCardRemove(this)
      });
  }

  removeCard() {
    this._element.remove();
  }

  setLikeState(card) {
    if (this._isLiked) {
      this._likeButton.classList.remove('card__btn_aciton_like-active')
      this._likeCounter.textContent = card.likes.length
      this._isLiked = false
    } else {
      this._likeButton.classList.add('card__btn_aciton_like-active')
      this._likeCounter.textContent = card.likes.length
      this._isLiked = true
    }
  }

  _showIconRemove() {
    if (this._curentId !== this._userId) {
      this._removeIcon.classList.add('card__btn_show')
    }
  }

  _setUserLikes() {
    this._isLiked
    ? this._likeButton.classList.add('card__btn_aciton_like-active')
    : this._likeButton.classList.remove('card__btn_aciton_like-active')
  }
}

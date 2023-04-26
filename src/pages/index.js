import './index.css';
import {
  editElem,
  addElem,
  profileForm,
  popupInputElemName,
  popupInputElemAbout,
  nameText,
  aboutText,
  photoGridSelector,
  formValidators,
  initialCards,
  config,
  configApi,
  profileAvatar
} from '../utils/constants.js';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';

let curentId;

const userInfo = new UserInfo({ userName: nameText, aboutUser: aboutText, avatar: profileAvatar });
const popupZoomImage = new PopupWithImage('.popup_type_image');
const popupTypeConfirm = new PopupWithConfirm('.popup_type_confirm-delite', {
  callbackFormSubmit: (cardElement, cardId) => {
    cardElement.removeCard()
    api.removeCard(cardId)
    .catch(err => console.log(err))
  }
});

const popupTypeEdit = new PopupWithForm('.popup_type_edit', {
  callbackFormSubmit: (data) => {
    api.setUserInfo(data)
      .then(data => userInfo.setUserInfo(data))
      .catch(err => console.log(err))
  }
});
const popupTypeCard = new PopupWithForm('.popup_type_card', {
  callbackFormSubmit: ({ title: titleInputText, link: linkInputText }) => {
    api.setNewCard({name: titleInputText, link: linkInputText})
    .then(res => {
      const cardElement = createCard(res, curentId);
      rendererCards.addItem(cardElement);
    })
    .catch(err => console.log(err))
  }
});

const api = new Api(configApi)

api.getUserInfo()
  .then(data => {
    curentId = data._id;
    userInfo.setUserInfo(data);
  })
  .catch(err => console.log(err))

  api.getInitialCards()
  .then(data => {rendererCards.renderItems(data)})
  .catch(err => console.log(err))

popupZoomImage.setEventListeners();
popupTypeEdit.setEventListeners();
popupTypeCard.setEventListeners();
popupTypeConfirm.setEventListeners();

// Создание карточек на странице

  const rendererCards = new Section(
    {
      renderer: (item) => {
        const cardElement = createCard(item, curentId);
  
        rendererCards.addItem(cardElement);
      }
    },
    photoGridSelector
  );

function createCard(item, curentId) {
  const card = new Card(
    item, 
    '#cards', {
      handleCardClick: ({ name, link }) => {
        popupZoomImage.open(name, link);
      },
      handleCardRemove: (cardElement) => {
        popupTypeConfirm.open(cardElement, item._id)
      },
      handleCardLike: (isLiked) => {
        isLiked
        ? api.removeLikeCard(item._id).then(res => card.setLikeState(res))
        : api.likeCard(item._id).then(res => card.setLikeState(res))
      }
    },
    curentId
  );
  const cardElement = card.generateCard();

  return cardElement;
}

// функция включения валидации
function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);

    const formName = formElement.getAttribute('name');

    formValidators[formName] = validator;
    validator.enableValidation();
  });
}

// Открытие попапа "Редактировать профиль"
editElem.addEventListener('click', () => {
  const { name, about } = userInfo.getUserInfo();
  popupInputElemName.value = name;
  popupInputElemAbout.value = about;
  formValidators['edit-profile'].resetValidation();
  popupTypeEdit.open();
});

// Открытие попапа "Добавить карточку"
addElem.addEventListener('click', function () {
  formValidators['new-place'].resetValidation();
  popupTypeCard.open();
});

enableValidation(config);
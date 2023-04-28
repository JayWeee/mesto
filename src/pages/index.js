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
  profileAvatar,
  avatarEdit
} from '../utils/constants.js';

import {
  renderLoading
} from '../utils/utils.js';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';

let curentId; // текущий id пользователя

const api = new Api(configApi)

const userInfo = new UserInfo({ userName: nameText, aboutUser: aboutText, avatar: profileAvatar });

const popupZoomImage = new PopupWithImage('.popup_type_image');

const popupTypeConfirm = new PopupWithConfirm('.popup_type_confirm-delite', {
  callbackFormSubmit: (cardElement, cardId) => {
    api.removeCard(cardId)
    .then(() => {
      cardElement.removeCard()
      popupTypeConfirm.close()
    })
    .catch(err => console.log(err))
  }
});

const popupTypeEditProfile = new PopupWithForm('.popup_type_edit', {
  callbackFormSubmit: (data, submitButton) => {
    renderLoading(true, submitButton)
    api.setUserInfo(data)
      .then(data => {
        userInfo.setUserInfo(data)
        popupTypeEditProfile.close()
      })
      .catch(err => console.log(err))
      .finally(() => renderLoading(false, submitButton))
  }
});

const popupTypeEditAvatar = new PopupWithForm('.popup_type_edit-avatar', {
  callbackFormSubmit: (data, submitButton) => {
    renderLoading(true, submitButton)
    api.setUserAvatar(data)
    .then(res => {
      userInfo.setUserInfo(res)
      popupTypeEditAvatar.close()
    })
    .catch(err => console.log(err))
    .finally(() => renderLoading(false, submitButton))
  }
})

const popupTypeCard = new PopupWithForm('.popup_type_card', {
  callbackFormSubmit: ({ title: titleInputText, link: linkInputText }, submitButton) => {
    renderLoading(true, submitButton)
    api.setNewCard({name: titleInputText, link: linkInputText})
    .then(res => {
      const cardElement = createCard(res, curentId);
      rendererCards.addNewItem(cardElement);
      popupTypeCard.close()
    })
    .catch(err => console.log(err))
    .finally(() => renderLoading(false, submitButton))
  }
});

popupZoomImage.setEventListeners();
popupTypeConfirm.setEventListeners();
popupTypeEditProfile.setEventListeners();
popupTypeEditAvatar.setEventListeners();
popupTypeCard.setEventListeners();

Promise.all([ api.getUserInfo(), api.getInitialCards() ])
  .then(([userData, cardObject]) => {
      curentId = userData._id;
      userInfo.setUserInfo(userData);
      rendererCards.renderItems(cardObject)
  } )
  .catch(err => console.log(err))

// Функция отрисовки карточек
  const rendererCards = new Section(
    {
      renderer: (item) => {
        const cardElement = createCard(item, curentId);
  
        rendererCards.addItem(cardElement);
      }
    },
    photoGridSelector
  );


// Функция создания карточек
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
      handleCardLike: () => {
        card.isLiked()
        ? api.removeLikeCard(item._id).then(res => card.setLikeState(res)).catch(err => console.log(err))
        : api.likeCard(item._id).then(res => card.setLikeState(res)).catch(err => console.log(err))
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
  popupTypeEditProfile.open();
});

// Открытие попапа "Добавить карточку"
addElem.addEventListener('click', function () {
  formValidators['new-place'].resetValidation();
  popupTypeCard.open();
});

// Открытие попапа "Редактировать аватар"
avatarEdit.addEventListener('click', () => {
  formValidators['edit-avatar'].resetValidation();
  popupTypeEditAvatar.open()
})

// Включение валидации
enableValidation(config);
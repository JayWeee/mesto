import './index.css'
import {
  editElem,
  addElem,
  profileForm,
  popupInputElemName,
  popupInputElemJob,
  nameText,
  jobText,
  photoGridSelector,
  formValidators,
  initialCards,
  config
} from '../utils/constants.js'

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';

const userInfo = new UserInfo({ userName: nameText, userStatus: jobText });

// Создание карточек на странице
const rendererCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);

      rendererCards.addItem(cardElement);
    },
  },
  photoGridSelector
);

function createCard(item) {
  const card = new Card(item, '#cards', handleCardClick);

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

function handleCardClick({ name, link }) {
  const popupZoomImage = new PopupWithImage('.popup_type_image');
  popupZoomImage.open(name, link);
}

// Открытие попапа "Редактировать профиль"
editElem.addEventListener('click', () => {
  const { name, job } = userInfo.getUserInfo();
  popupInputElemName.value = name;
  popupInputElemJob.value = job;
  const popup = new PopupWithForm('.popup_type_edit', {
    callbackFormSubmit: (data) => {
      userInfo.setUserInfo(data);
    },
  });

  formValidators['edit-profile'].resetValidation();
  popup.open();
});

// Открытие попапа "Добавить карточку"
addElem.addEventListener('click', function () {
  const popup = new PopupWithForm('.popup_type_card', {
    callbackFormSubmit: handleCardFormSubmit,
  });

  formValidators['new-place'].resetValidation();
  popup.open();
});

// Функция отправки формы с новой карточкой
function handleCardFormSubmit({ title: titleInputText, link: linkInputText }) {
  const item = {
    name: titleInputText,
    link: linkInputText,
  };
  const cardElement = createCard(item);

  rendererCards.addItem(cardElement);
}

enableValidation(config);
rendererCards.renderItems();

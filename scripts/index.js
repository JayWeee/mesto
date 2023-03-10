import Card from './Card.js';
import FormValidator from './FormValidator.js';

// Кнопка "Редактировать"
const editElem = document.querySelector('.profile__btn_action_edit');

// Кнопка "Добавить карточку"
const addElem = document.querySelector('.profile__btn_action_add');

// Кнопки закрытия попапа
const closeButtons = document.querySelectorAll('.popup__btn_action_close');

// Форма редактирования профиля
const profileForm = document.forms['edit-profile'];

// Форма добавления карточки
const cardForm = document.forms['new-place'];

// Попап edit
const popupEdit = document.querySelector('.popup_type_edit');

// Попап card
const popupCard = document.querySelector('.popup_type_card');

// Попап Image
const popupImage = document.querySelector('.popup_type_image');

const popupZoomImage = popupImage.querySelector('.popup__photo');

const popupZoomCaption = popupImage.querySelector('.popup__caption');

// Инпут с именем в попапе
const popupInputElemName = profileForm.name;

// Инпут с названием работы в попапе
const popupInputElemJob = profileForm.job;

// Инпут с названием карточки
const popupInputElemTitle = cardForm.title;

// Инпут с ссылкой на картинку в попапе
const popupInputElemLink = cardForm.link;

// Имя в профиле
const nameText = document.querySelector('.profile__name');

// Статус профиля
const jobText = document.querySelector('.profile__status');

// Контейнер photo grid
const sectionPhotoGrid = document.querySelector('.photo-grid');

// Массив с карточками
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn_action_submit',
  formSelector: '.popup__form',
  inactiveButtonClass: 'popup__btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};

// Функция создания карточки
function createCard(item) {
  const card = new Card(item, '#cards', handleCardClick);

  const cardElement = card.generateCard();

  return cardElement;
}

initialCards.forEach((item) => {
  const cardElement = createCard(item);

  sectionPhotoGrid.append(cardElement);
});

const formValidators = {};

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

enableValidation(config);

function handleCardClick(name, link) {
  popupZoomImage.src = link;
  popupZoomImage.alt = name;
  popupZoomCaption.textContent = name;
  openPopup(popupImage);
}

// function openCardImage(cardImage) {
//   cardImage.addEventListener('click', function (el) {
//     popupZoomImage.src = el.target.src;
//     popupZoomImage.alt = el.target.alt;
//     popupZoomCaption.textContent = el.target.alt;
//     openPopup(popupImage);
//   });
// }

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleKeyEsc);
  document.addEventListener('click', handleClickOverlay);
}

// Открытие попапа "Редактировать профиль"
editElem.addEventListener('click', function () {
  formValidators['edit-profile'].resetValidation();
  openPopup(popupEdit);
  popupInputElemName.value = nameText.textContent;
  popupInputElemJob.value = jobText.textContent;
});

// Открытие попапа "Добавить карточку"
addElem.addEventListener('click', function () {
  formValidators['new-place'].resetValidation();
  openPopup(popupCard);
});

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleKeyEsc);
  document.removeEventListener('click', handleClickOverlay);
}

closeButtons.forEach(function (button) {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// Функция отправки формы на кнопку "Сохранить"
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameText.textContent = popupInputElemName.value;
  jobText.textContent = popupInputElemJob.value;
  closePopup(popupEdit);
}

profileForm.addEventListener('submit', handleProfileFormSubmit);

// Функция отправки формы с новой карточкой
const handleCardFormSubmit = (evt) => {
  evt.preventDefault();

  const item = {
    name: popupInputElemTitle.value,
    link: popupInputElemLink.value,
  };
  const cardElement = createCard(item);

  sectionPhotoGrid.prepend(cardElement);
  evt.target.reset();
  closePopup(popupCard);
};

function handleKeyEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

function handleClickOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

// Закрытие попапа на оверлей

cardForm.addEventListener('submit', handleCardFormSubmit);

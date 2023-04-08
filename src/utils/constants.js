// Кнопка "Редактировать"
export const editElem = document.querySelector('.profile__btn_action_edit');

// Кнопка "Добавить карточку"
export const addElem = document.querySelector('.profile__btn_action_add');

// Форма редактирования профиля
export const profileForm = document.forms['edit-profile'];

// Инпут с именем в попапе
export const popupInputElemName = profileForm.name;

// Инпут с названием работы в попапе
export const popupInputElemJob = profileForm.job;

// Имя в профиле
export const nameText = document.querySelector('.profile__name');

// Статус профиля
export const jobText = document.querySelector('.profile__status');

export const photoGridSelector = '.photo-grid';

export const formValidators = {};

// Массив с карточками
export const initialCards = [
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

// Конфиг для валидации форм
export const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn_action_submit',
  formSelector: '.popup__form',
  inactiveButtonClass: 'popup__btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};
// Кнопка "Редактировать"
export const editElem = document.querySelector('.profile__btn_action_edit');

// Кнопка "Добавить карточку"
export const addElem = document.querySelector('.profile__btn_action_add');

// Форма редактирования профиля
export const profileForm = document.forms['edit-profile'];

// Инпут с именем в попапе
export const popupInputElemName = profileForm.name;

// Инпут с названием работы в попапе
export const popupInputElemAbout = profileForm.about;

// Имя в профиле
export const nameText = document.querySelector('.profile__name');

// Статус профиля
export const aboutText = document.querySelector('.profile__status');

// Аватар профиля
export const profileAvatar = document.querySelector('.profile__avatar');

// Кнопка редактировать профиль
export const avatarEdit = document.querySelector('.profile__avatar-edit');

export const photoGridSelector = '.photo-grid';

export const formValidators = {};

// Конфиг для валидации форм
export const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn_action_submit',
  formSelector: '.popup__form',
  inactiveButtonClass: 'popup__btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};

export const configApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-64/', 
  headers: {
    authorization: '31554c8a-77dd-4979-b2d2-ecadd12ea5c9',
    'Content-Type': 'application/json'
  }
}
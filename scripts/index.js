// Кнопка "Добавить"
let editElem = document.querySelector('.profile__btn_action_edit');

// Форма
let formElement = document.querySelector('form');

// Попап
let popupElem = document.querySelector('.popup');

// Кнопка "Закрыть"
let popupCloseElem = document.querySelector('.popup__btn_action_close');

// Инпут с именем в попапе
let popupInputElemName = document.querySelector('input[name=name]');

// Инпут с названием работы в попапе
let popupInputElemJob = document.querySelector('input[name=job]');

// Имя в профиле
let nameText = document.querySelector('.profile__name');

// Статус профиля
let jobText = document.querySelector('.profile__status');

// Открытие попапа
editElem.addEventListener('click', () => {
  popupElem.classList.add('popup_opened');
  popupInputElemName.value = nameText.textContent;
  popupInputElemJob.value = jobText.textContent;
});

// Закрытие попапа на крестик
popupCloseElem.addEventListener('click', () => {
  popupElem.classList.remove('popup_opened');
});

// Функция отправки формы на кнопку "Сохранить"
function formSubmitHandler (evt) {
  evt.preventDefault();
  nameText.textContent = popupInputElemName.value
  jobText.textContent = popupInputElemJob.value
  popupElem.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler); 
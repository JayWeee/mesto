let editElem = document.querySelector('.profile__btn_action_edit');
let formElement = document.querySelector('form')
let popupElem = document.querySelector('.popup');
let popupCloseElem = document.querySelector('.popup__btn_action_close');
let popupInputElem = document.querySelectorAll('.popup__input');
let popupSubmitElem = document.querySelector('.popup__btn_action_submit');
let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__status');

editElem.addEventListener('click', () => {
  popupElem.classList.add('popup_opened');
});

popupCloseElem.addEventListener('click', () => {
  popupElem.classList.remove('popup_opened');
});

popupSubmitElem.addEventListener('click', () => {
  popupElem.classList.remove('popup_opened');
});

popupInputElem[0].value = nameInput.textContent;
popupInputElem[1].value = jobInput.textContent;

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameInput.textContent = popupInputElem[0].value
  jobInput.textContent = popupInputElem[1].value
}

formElement.addEventListener('submit', formSubmitHandler); 
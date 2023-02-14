// Кнопка "Редактировать"
const editElem = document.querySelector('.profile__btn_action_edit');

// Кнопка "Добавить карточку"
const addElem = document.querySelector('.profile__btn_action_add')

// Форма редактирования профиля
const formEditElement = document.querySelector('#profile');

// Форма добавления карточки
const formPlaceElement = document.querySelector('#card');

// Попап edit
const popupEdit = document.querySelector('.popup_type_edit');

// Попап card
const popupCard = document.querySelector('.popup_type_card')

// Кнопка "Закрыть"
const popupEditClose = popupEdit.querySelector('.popup__btn_action_close');

const popupCardClose = popupCard.querySelector('.popup__btn_action_close');

// Инпут с именем в попапе
const popupInputElemName = formEditElement.name;

// Инпут с названием работы в попапе
const popupInputElemJob = formEditElement.job;

// Инпут с названием карточки
const popupInputElemTitle = formPlaceElement.title;

// Инпут с ссылкой на картинку в попапе
const popupInputElemLink = formPlaceElement.link;

// Имя в профиле
const nameText = document.querySelector('.profile__name');

// Статус профиля
const jobText = document.querySelector('.profile__status');

// Темплейт cards
const cardsTemplate = document.querySelector('#cards');

// Контейнер photo grid
const sectionPhotoGrid = document.querySelector('.photo-grid');

// Темплейт image
const popupImageTemplate = document.querySelector('#image');

// Попап с открытой картинкой
const popupImage = document.querySelector('.popup_type_image');

// Кнопка закрыть попап с картинкой
const popupCloseImageElem = popupImage.querySelector('.popup__btn_action_close');


// Массив с карточками
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

// Добавление карточек на страницу
initialCards.forEach(function(el) {
  const templateContent = cardsTemplate.content.cloneNode(true);

  templateContent.querySelector('.card__title').textContent = el.name;
  templateContent.querySelector('.card__image').src = el.link;

  templateContent.querySelector('.card__btn_action_like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__btn_aciton_like-active')
  });

  templateContent.querySelector('.card__btn_action_remove').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove()
  });

  templateContent.querySelector('.card__image').addEventListener('click', function (evt) {
    popupImage.classList.add('popup_opened');
    const templateImageContent = popupImageTemplate.content.cloneNode(true);
    

    templateImageContent.querySelector('.popup__photo').src = evt.target.src;
    templateImageContent.querySelector('.popup__caption').textContent = el.name;

    popupImageTemplate.after(templateImageContent);
  });

  sectionPhotoGrid.append(templateContent);
});

// Открытие попапа "Редактировать профиль"
editElem.addEventListener('click', function () {
  popupEdit.classList.add('popup_opened');
  popupInputElemName.value = nameText.textContent;
  popupInputElemJob.value = jobText.textContent;
});

// Открытие попапа "Добавить карточку"
addElem.addEventListener('click', function () {
  popupCard.classList.add('popup_opened');
  popupInputElemTitle.value = '';
  popupInputElemLink.value = '';
});


// Закрытие попапа Edit
popupEditClose.addEventListener('click', function () {
  popupEdit.classList.remove('popup_opened');
});

// Закритые попапа Card
popupCardClose.addEventListener('click', function () {
  popupCard.classList.remove('popup_opened');
});

// Закрытие попапа Image
popupCloseImageElem.addEventListener('click', function () {
  popupImage.classList.remove('popup_opened')
  document.querySelector('.popup__photo').remove();
  document.querySelector('.popup__caption').remove();
});

// Функция отправки формы на кнопку "Сохранить"
function formProfileSubmitHandler (evt) {
  evt.preventDefault();
  nameText.textContent = popupInputElemName.value
  jobText.textContent = popupInputElemJob.value
  popupEdit.classList.remove('popup_opened');
}

formEditElement.addEventListener('submit', formProfileSubmitHandler); 

// Функция отправки формы с новой карточкой
function formCardSubmitHandler (evt) {
  evt.preventDefault();

  popupCard.classList.remove('popup_opened');
  const templateContent = cardsTemplate.content.cloneNode(true);

  templateContent.querySelector('.card__title').textContent = popupInputElemTitle.value;
  templateContent.querySelector('.card__image').src = popupInputElemLink.value;

  templateContent.querySelector('.card__btn_action_like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__btn_aciton_like-active')
  });

  templateContent.querySelector('.card__btn_action_remove').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove()
  });

  templateContent.querySelector('.card__image').addEventListener('click', function (evt) {
    popupImage.classList.add('popup_opened');
    const templateImageContent = popupImageTemplate.content.cloneNode(true);

    const cardTitle = evt.target.closest('.card').lastElementChild.firstElementChild;

    templateImageContent.querySelector('.popup__photo').src = evt.target.src;
    templateImageContent.querySelector('.popup__caption').textContent = cardTitle.textContent;

    popupImageTemplate.after(templateImageContent);
  });

  cardsTemplate.after(templateContent);

}

formPlaceElement.addEventListener('submit', formCardSubmitHandler);

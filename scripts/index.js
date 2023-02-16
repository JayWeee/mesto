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
const popupCard = document.querySelector('.popup_type_card')

// Кнопка "Закрыть"
const popupEditClose = popupEdit.querySelector('.popup__btn_action_close');

const popupCardClose = popupCard.querySelector('.popup__btn_action_close');

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

function createCard (item) {
  const cardElement = cardsTemplate.content.cloneNode(true);

  let cardImage = cardElement.querySelector('.card__image');

  const cardTitle = cardElement.querySelector('.card__title');

  cardTitle.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name

  cardElement.querySelector('.card__btn_action_like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__btn_aciton_like-active')
  });

  cardElement.querySelector('.card__btn_action_remove').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove()
  });

  return cardElement
};

// Добавление карточек на страницу
initialCards.forEach(function(el) {
  const templateContent = createCard(el);

  sectionPhotoGrid.append(templateContent);
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

// Открытие попапа "Редактировать профиль"
editElem.addEventListener('click', function () {
  openPopup(popupEdit)
  popupInputElemName.value = nameText.textContent;
  popupInputElemJob.value = jobText.textContent;
});

// Открытие попапа "Добавить карточку"
addElem.addEventListener('click', function () {
  openPopup(popupCard);
});

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

closeButtons.forEach(function(button) {
  const popup = button.closest('.popup')
  button.addEventListener('click', () => closePopup(popup));
});

// Закрытие попапа Image
popupCloseImageElem.addEventListener('click', function () {
  popupImage.classList.remove('popup_opened')
  // document.querySelector('.popup__photo').remove();
  // document.querySelector('.popup__caption').remove();
});

// Функция отправки формы на кнопку "Сохранить"
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  nameText.textContent = popupInputElemName.value
  jobText.textContent = popupInputElemJob.value
  popupEdit.classList.remove('popup_opened');
}

profileForm.addEventListener('submit', handleProfileFormSubmit); 

// Функция отправки формы с новой карточкой
function handleCardFormSubmit (evt) {
  evt.preventDefault();

  const cardArr = [
    {
      name: popupInputElemTitle.value,
      link: popupInputElemLink.value
    }
  ];

  cardArr.forEach(function (el) {
    const newCard = createCard(el)

    cardsTemplate.after(newCard);
  });

  popupInputElemTitle.value = '';
  popupInputElemLink.value = '';

  closePopup(popupCard);
}

cardForm.addEventListener('submit', handleCardFormSubmit);

let cardImage = document.querySelectorAll('.card__image');

function cardPopupOpen (item) {
  const cardOpen = popupImageTemplate.content.cloneNode(true);

  const popupZoomImage = cardOpen.querySelector('.popup__photo');

  const popupZoomCaption = cardOpen.querySelector('.popup__caption');

  popupZoomImage.src = item.src;
  popupZoomImage.alt = item.alt;
  popupZoomCaption.textContent = item.alt;

  return cardOpen;
};

// Открытие попапа с картинкой
cardImage.forEach(function (el) {
  el.addEventListener('click', function(evt) {
    openPopup(popupImage);
    const zoomImage = cardPopupOpen(el);
    popupImageTemplate.after(zoomImage);
  })
});
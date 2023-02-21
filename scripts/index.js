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

// Массив попапов
const popupList = Array.from(document.querySelectorAll('.popup'));

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

// Темплейт cards
const cardsTemplate = document.querySelector('#cards');

// Контейнер photo grid
const sectionPhotoGrid = document.querySelector('.photo-grid');

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

  const cardImage = cardElement.querySelector('.card__image');

  const cardTitle = cardElement.querySelector('.card__title');

  const cardTrash = cardElement.querySelector('.card__btn_action_remove');

  const cardLike = cardElement.querySelector('.card__btn_action_like');

  cardTitle.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name

  cardLike.addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__btn_aciton_like-active')
  });

  cardTrash.addEventListener('click', function (evt) {
    evt.target.closest('.card').remove()
  });

  // Открытие попапа с картинкой
  cardImage.addEventListener('click', function(el) {
      popupZoomImage.src = el.target.src;
      popupZoomImage.alt = el.target.alt
      popupZoomCaption.textContent = el.target.alt;
      openPopup(popupImage);
      document.addEventListener('keydown', handleKeyEsc);
      document.addEventListener('click', handleClickOverlay);
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
  openPopup(popupEdit);
  document.addEventListener('keydown', handleKeyEsc);
  document.addEventListener('click', handleClickOverlay);
  popupInputElemName.value = nameText.textContent;
  popupInputElemJob.value = jobText.textContent;
});

// Открытие попапа "Добавить карточку"
addElem.addEventListener('click', function () {
  openPopup(popupCard);
  document.addEventListener('keydown', handleKeyEsc);
  document.addEventListener('click', handleClickOverlay);
});

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

closeButtons.forEach(function(button) {
  const popup = button.closest('.popup')
  button.addEventListener('click', () => closePopup(popup));
});


// Функция отправки формы на кнопку "Сохранить"
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  nameText.textContent = popupInputElemName.value
  jobText.textContent = popupInputElemJob.value
  closePopup(popupEdit);
}

profileForm.addEventListener('submit', handleProfileFormSubmit); 

// Функция отправки формы с новой карточкой
function handleCardFormSubmit (evt) {
  evt.preventDefault();

 const item = {
    name: popupInputElemTitle.value,
    link: popupInputElemLink.value,
  };

  const newCard = createCard(item);

  sectionPhotoGrid.prepend(newCard);

  popupInputElemTitle.value = '';
  popupInputElemLink.value = '';

  closePopup(popupCard);
}

function handleKeyEsc(evt) {
  const popupOpened = document.querySelector('.popup_opened');

  if (evt.key === 'Escape') {
    document.removeEventListener('keydown', handleKeyEsc);
    closePopup(popupOpened);
  }
};

function handleClickOverlay(evt) {

  if (evt.target.classList.contains('popup_opened')) {
    document.removeEventListener('click', handleClickOverlay)
    closePopup(evt.target)
  }
};


// Закрытие попапа на оверлей

cardForm.addEventListener('submit', handleCardFormSubmit);
export default class Section {
  constructor({ items, renderer }, selector) {
    // 'items' - Массив данных которые нужно добавить на страницу
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderItems() {
    this._initialArray.forEach((item) => {
      // Перебирает массив с карточками в item попадают карточки
      this._renderer(item); // Отрисовывает карточки на основе функции renderer в index js
    });
  }

  // Функция добавления элемента в контейнер
  addItem(element) {
    // Принимает в параметр элемент который нужно вставить
    this._container.prepend(element);
  }
}

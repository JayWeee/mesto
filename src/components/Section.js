export default class Section {
  constructor({ renderer }, selector) {
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderItems(data) {
    data.forEach((item) => {
      // Перебирает массив с карточками в item попадают карточки
      this._renderer(item); // Отрисовывает карточки на основе функции renderer в index js
    });
  }

  // Функция добавления элемента в контейнер
  addItem(element) {
    // Принимает в параметр элемент который нужно вставить
    this._container.append(element);
  }

  addNewItem(element) {
    this._container.prepend(element);
  }
}

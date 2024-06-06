import { setLocalStorage, removeLocalStorage } from './localStorage.js';

// Получаем элемент корзины
const cart = document.getElementById('cart-count');

// Функция для установки значка корзины
const setCartIcon = (count) => {
  // Если в localStorage есть данные, убираем класс пустой корзины и устанавливаем количество товаров
  if (localStorage.length) {
    cart.classList.remove('cart-btn__count_empty');
    cart.textContent = count;
  }
};

// Функция для добавления товара в корзину
const addInCart = (target, count) => {
  // Устанавливаем текст кнопки "В корзине", добавляем класс для стилизации и обновляем количество товаров в корзине
  target.innerHTML = 'In the cart';
  target.classList.add('btn_in-cart');
  cart.classList.remove('cart-btn__count_empty');
  cart.textContent = count;
};

// Функция для удаления товара из корзины
const deleteFromCart = (target, count) => {
  // Возвращаем текст кнопки "Купить", удаляем класс для стилизации, обновляем количество товаров в корзине
  target.innerHTML = 'Buy now';
  target.classList.remove('btn_in-cart');
  // Если товаров в корзине не осталось, добавляем класс пустой корзины
  if (count === 0) {
    cart.classList.add('cart-btn__count_empty');
  }
  cart.textContent = count;
};

// Функция для проверки содержимого корзины и обновления кнопок товаров
const checkCartContents = (button) => {
  if (localStorage.length) {
    // Перебираем все ключи в localStorage
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      // Если ключ совпадает с идентификатором книги, помечаем кнопку как добавленную в корзину
      if (key === button.dataset.bookid) {
        button.innerHTML = 'In the cart';
        button.classList.add('btn_in-cart');
      }
    }
  }
};

// Функция для получения информации о выбранной книге и обновления состояния корзины
const getSelectedBookInfo = (collection) => {
  // Перебираем все кнопки в коллекции
  for (let button of collection) {
    // Проверяем, добавлена ли книга в корзину, и обновляем соответствующим образом кнопку
    checkCartContents(button);

    // Добавляем обработчик события клика на кнопку
    button.addEventListener('click', (event) => {
      // Получаем родительский элемент кнопки (карточку товара)
      const targetBook = event.target.parentElement.parentElement;
      // Объект для хранения информации о книге
      const bookInfo = {
        id: '',
        thumbnail: '',
        author: '',
        title: '',
        description: '',
        price: '',
      };

      // Получаем информацию о книге из соответствующих элементов и добавляем в объект bookInfo
      for (let key in bookInfo) {
        let node = targetBook.querySelector(`[data-book-info = "${key}"]`);

        if (node && key === 'id') {
          bookInfo[key] = node.dataset.bookid;
        } else if (node && key === 'thumbnail') {
          bookInfo[key] = node.getAttribute('src');
        } else if (node) {
          bookInfo[key] = node.textContent;
        }
      }

      // Если книга уже добавлена в корзину, удаляем ее из localStorage и обновляем кнопку
      if (event.target.classList.contains('btn_in-cart')) {
        removeLocalStorage(targetBook, 'id');
        deleteFromCart(event.target, localStorage.length);
      } else {
        setLocalStorage(bookInfo);
        addInCart(event.target, localStorage.length);
      }
    });
  }
};

export { getSelectedBookInfo, setCartIcon };
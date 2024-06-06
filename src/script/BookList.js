import { getSelectedBookInfo } from './cart.js';

const noImage = require('../img/placeholder.png');
const ratingStarFilled = require('../img/star-filled.svg');
const ratingStar = require('../img/star.svg');

// Функция для рендеринга списка книг
const renderBooksList = (data, clearNode) => {
  // Получаем элемент для вставки списка книг
  let targetNode = document.getElementById('product-list');
  let buyButtons = null;

  // Очищаем целевой узел, если это указано
  if (clearNode) {
    targetNode.innerHTML = '';
  }

  // Перебираем каждый элемент данных
  data.items.forEach(item => {
    // Инициализируем переменные
    let thumbnailData = null;
    let bookId = item.id;
  
    let authorsNode = '';
    let titleNode = '';
    let ratingNode = '';
    let descriptionNode = '';
    let priceNode = '';
    let productHtml = '';

    // Проверяем наличие изображения книги или используем изображение по умолчанию
    if (item.volumeInfo.imageLinks) {
      thumbnailData = item.volumeInfo.imageLinks.thumbnail;
    } else {
      thumbnailData = noImage;
    }

    // Проверяем наличие авторов и создаем HTML узел для них
    if (item.volumeInfo.authors) {
      let authorsListData = item.volumeInfo.authors;
      let output = '';

      // Перебираем авторов и формируем строку
      authorsListData.forEach((item, index, arr) => {
        if (index === arr.length - 1) {
          output += `${item}`;
        } else {
          output += `${item}, `;
        }
      });

      authorsNode = `<p class="product__author" data-book-info="author">${output}</p>`;
    }

    // Проверяем наличие названия книги и создаем HTML узел для него
    if (item.volumeInfo.title) {
      let titleData = item.volumeInfo.title;
      titleNode = `<h1 class="product__title" data-book-info="title">${titleData}</h1>`;
    }

    // Проверяем наличие рейтинга и создаем HTML узел для него
    if (item.volumeInfo.averageRating) {
      let ratingsCountData = item.volumeInfo.ratingsCount;
      ratingNode = `<div class="product__rating">
                      <div class="rating__stars">
                        <img src=${ratingStarFilled} alt="Icon" class="star">
                        <img src=${ratingStarFilled} alt="Icon" class="star">
                        <img src=${ratingStarFilled} alt="Icon" class="star">
                        <img src=${ratingStar} alt="Icon" class="star">
                        <img src=${ratingStar} alt="Icon" class="star">
                      </div>
                      <span class="review-nums">${ratingsCountData} review</span>
                    </div>`;
    }

    // Проверяем наличие описания книги и создаем HTML узел для него
    if (item.volumeInfo.description && item.volumeInfo.description.length > 90) {
      let descriptionData = item.volumeInfo.description;
      let description = descriptionData.slice(0, 91) + '...';
      descriptionNode = `<p class="product__description" data-book-info="description">${description}</p>`;
    } else if (item.volumeInfo.description) {
      let descriptionData = item.volumeInfo.description;
      descriptionNode = `<p class="product__description" data-book-info="description">${descriptionData}</p>`;
    }

    // Проверяем наличие цены и создаем HTML узел для нее
    if (item.saleInfo.listPrice) {
      let priceData = item.saleInfo.listPrice.amount;
      const currency = 98; // Примерная стоимость в условных единицах
      let priceValue = Math.floor(priceData * 100 / currency) / 100;

      priceNode = `<div class="product__price">
                    <span class="price__currency">$</span><span class="price__value" data-book-info="price">${priceValue}</span>
                  </div>`;
    }

    // Собираем HTML для одного продукта
    productHtml = `<div class="products-list__item product">
                      <img src="${thumbnailData}" alt="Book cover" class="product__img" data-book-info="thumbnail">
                      <div class="product__card">
                        ${authorsNode}
                        ${titleNode}
                        ${ratingNode}
                        ${descriptionNode}
                        ${priceNode}
                        <button class="btn buy-button" data-book-info="id" data-bookid="${bookId}">Buy now</button>
                      </div>
                    </div>`;

    // Вставляем HTML в целевой узел
    targetNode.insertAdjacentHTML('beforeend', productHtml);
  });

  // Получаем все кнопки "Buy now" и передаем их в функцию для обработки
  buyButtons = document.getElementsByClassName('buy-button');
  getSelectedBookInfo(buyButtons);
};

export { renderBooksList };
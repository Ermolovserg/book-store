/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <title>Bookshop</title>\\r\\n</head>\\r\\n<body>\\r\\n    <header class=\\\"header\\\">\\r\\n        <div class=\\\"header__content\\\">\\r\\n            <span class=\\\"header__logo\\\">Bookshop</span>\\r\\n        <nav class=\\\"header__navigation\\\">\\r\\n            <a href=\\\"#\\\" class=\\\"header__link header__link_selected\\\">books</a>\\r\\n            <a href=\\\"#\\\" class=\\\"header__link\\\">audiobooks</a>\\r\\n            <a href=\\\"#\\\" class=\\\"header__link\\\">Stationery & gifts</a>\\r\\n            <a href=\\\"#\\\" class=\\\"header__link\\\">blog</a>\\r\\n        </nav>\\r\\n        <nav class=\\\"header__menu\\\">\\r\\n            <a href=\\\"#\\\" class=\\\"menu__link user-button\\\"></a>\\r\\n            <a href=\\\"#\\\" class=\\\"menu__link searc-buttonh\\\"></a>\\r\\n            <a href=\\\"#\\\" class=\\\"menu__link cart-btn\\\"><span class=\\\"cart-btn__count cart-btn__count_empty\\\" id=\\\"cart-count\\\"></span></a>\\r\\n        </div>\\r\\n        </nav>\\r\\n    </header>\\r\\n    <main>\\r\\n        <div class=\\\"slider\\\">\\r\\n            <div class=\\\"slider__content\\\">\\r\\n                <div class=\\\"slider-img\\\";></div>\\r\\n                    <div class=\\\"slider-img__dots\\\">\\r\\n                        <div class=\\\"dot\\\"></div>\\r\\n                            <div class=\\\"dot\\\"></div>\\r\\n                            <div class=\\\"dot\\\"></div>\\r\\n                    </div>\\r\\n                <div class=\\\"promo\\\">\\r\\n                    <a href=\\\"#\\\" class=\\\"promo__link promo__link_blue\\\">Change old book on new</a>\\r\\n                    <a href=\\\"#\\\" class=\\\"promo__link promo__link_pink\\\">Top 100 books 2022</a>\\r\\n                </div>\\r\\n            </div>\\r\\n    </div>\\r\\n    <div class=\\\"content\\\">\\r\\n        <aside class=\\\"sidebar\\\">\\r\\n          <nav class=\\\"list\\\">\\r\\n            <ul>\\r\\n                <li><a href=\\\"\\\" class=\\\"list__item list__item_selected\\\" data-category=\\\"Architecture\\\">Architecture</a></li>\\r\\n                <li><a href=\\\"#\\\" class=\\\"list__item\\\" data-category=\\\"Art\\\">Art & Fashion</a></li>\\r\\n                <li><a href=\\\"#\\\" class=\\\"list__item\\\" data-category=\\\"Biography & Autobiography\\\">Biography</a></li>\\r\\n                <li><a href=\\\"#\\\" class=\\\"list__item\\\" data-category=\\\"Business\\\">Business</a></li>\\r\\n                <li><a href=\\\"#\\\" class=\\\"list__item\\\" data-category=\\\"Hobbies\\\">Crafts & Hobbies</a></li>\\r\\n                <li><a href=\\\"#\\\" class=\\\"list__item\\\" data-category=\\\"Drama\\\">Drama</a></li>\\r\\n                <li><a href=\\\"#\\\" class=\\\"list__item\\\" data-category=\\\"Fiction\\\">Fiction</a></li>\\r\\n                <li><a href=\\\"#\\\" class=\\\"list__item\\\" data-category=\\\"Cooking\\\">Food & Drink</a></li>\\r\\n                <li><a href=\\\"#\\\" class=\\\"list__item\\\" data-category=\\\"Health & Fitness\\\">Health & Wellbeing</a></li>\\r\\n                <li><a href=\\\"#\\\" class=\\\"list__item\\\" data-category=\\\"History\\\">History & Politics</a></li>\\r\\n                <li><a href=\\\"#\\\" class=\\\"list__item\\\" data-category=\\\"Humor\\\">Humor</a></li>\\r\\n                <li><a href=\\\"#\\\" class=\\\"list__item\\\" data-category=\\\"Poetry\\\">Poetry</a></li>\\r\\n                <li><a href=\\\"#\\\" class=\\\"list__item\\\" data-category=\\\"Psychology\\\">Psychology</a></li>\\r\\n                <li><a href=\\\"#\\\" class=\\\"list__item\\\" data-category=\\\"Science\\\">Science</a></li>\\r\\n                <li><a href=\\\"#\\\" class=\\\"list__item\\\" data-category=\\\"Technology\\\">Technology</a></li>\\r\\n                <li><a href=\\\"#\\\" class=\\\"list__item\\\" data-category=\\\"Travel\\\">Travel & Maps</a></li>\\r\\n            </ul>\\r\\n          </nav>\\r\\n        </aside>\\r\\n        <div class=\\\"product-container\\\">\\r\\n            <div id=\\\"product-list\\\" class=\\\"products-list\\\">\\r\\n            </div>\\r\\n            <button id=\\\"btn-load\\\" class=\\\"btn btn_load\\\">Load more</button>\\r\\n        </div>\\r\\n      </div>\\r\\n    </main>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://book-store/./src/index.html?");

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://book-store/./src/style/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ \"./src/style/style.scss\");\n/* harmony import */ var _script_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/slider.js */ \"./src/script/slider.js\");\n/* harmony import */ var _script_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/main.js */ \"./src/script/main.js\");\n/* harmony import */ var _script_header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script/header.js */ \"./src/script/header.js\");\n/* harmony import */ var _script_header_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_script_header_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://book-store/./src/index.js?");

/***/ }),

/***/ "./src/script/BookList.js":
/*!********************************!*\
  !*** ./src/script/BookList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderBooksList: () => (/* binding */ renderBooksList)\n/* harmony export */ });\n/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.js */ \"./src/script/cart.js\");\n\n\nconst noImage = __webpack_require__(/*! ../img/placeholder.png */ \"./src/img/placeholder.png\");\nconst ratingStarFilled = __webpack_require__(/*! ../img/star-filled.svg */ \"./src/img/star-filled.svg\");\nconst ratingStar = __webpack_require__(/*! ../img/star.svg */ \"./src/img/star.svg\");\n\n// Функция для рендеринга списка книг\nconst renderBooksList = (data, clearNode) => {\n  // Получаем элемент для вставки списка книг\n  let targetNode = document.getElementById('product-list');\n  let buyButtons = null;\n\n  // Очищаем целевой узел, если это указано\n  if (clearNode) {\n    targetNode.innerHTML = '';\n  }\n\n  // Перебираем каждый элемент данных\n  data.items.forEach(item => {\n    // Инициализируем переменные\n    let thumbnailData = null;\n    let bookId = item.id;\n  \n    let authorsNode = '';\n    let titleNode = '';\n    let ratingNode = '';\n    let descriptionNode = '';\n    let priceNode = '';\n    let productHtml = '';\n\n    // Проверяем наличие изображения книги или используем изображение по умолчанию\n    if (item.volumeInfo.imageLinks) {\n      thumbnailData = item.volumeInfo.imageLinks.thumbnail;\n    } else {\n      thumbnailData = noImage;\n    }\n\n    // Проверяем наличие авторов и создаем HTML узел для них\n    if (item.volumeInfo.authors) {\n      let authorsListData = item.volumeInfo.authors;\n      let output = '';\n\n      // Перебираем авторов и формируем строку\n      authorsListData.forEach((item, index, arr) => {\n        if (index === arr.length - 1) {\n          output += `${item}`;\n        } else {\n          output += `${item}, `;\n        }\n      });\n\n      authorsNode = `<p class=\"product__author\" data-book-info=\"author\">${output}</p>`;\n    }\n\n    // Проверяем наличие названия книги и создаем HTML узел для него\n    if (item.volumeInfo.title) {\n      let titleData = item.volumeInfo.title;\n      titleNode = `<h1 class=\"product__title\" data-book-info=\"title\">${titleData}</h1>`;\n    }\n\n    // Проверяем наличие рейтинга и создаем HTML узел для него\n    if (item.volumeInfo.averageRating) {\n      let ratingsCountData = item.volumeInfo.ratingsCount;\n      ratingNode = `<div class=\"product__rating\">\n                      <div class=\"rating__stars\">\n                        <img src=${ratingStarFilled} alt=\"Icon\" class=\"star\">\n                        <img src=${ratingStarFilled} alt=\"Icon\" class=\"star\">\n                        <img src=${ratingStarFilled} alt=\"Icon\" class=\"star\">\n                        <img src=${ratingStar} alt=\"Icon\" class=\"star\">\n                        <img src=${ratingStar} alt=\"Icon\" class=\"star\">\n                      </div>\n                      <span class=\"review-nums\">${ratingsCountData} review</span>\n                    </div>`;\n    }\n\n    // Проверяем наличие описания книги и создаем HTML узел для него\n    if (item.volumeInfo.description && item.volumeInfo.description.length > 90) {\n      let descriptionData = item.volumeInfo.description;\n      let description = descriptionData.slice(0, 91) + '...';\n      descriptionNode = `<p class=\"product__description\" data-book-info=\"description\">${description}</p>`;\n    } else if (item.volumeInfo.description) {\n      let descriptionData = item.volumeInfo.description;\n      descriptionNode = `<p class=\"product__description\" data-book-info=\"description\">${descriptionData}</p>`;\n    }\n\n    // Проверяем наличие цены и создаем HTML узел для нее\n    if (item.saleInfo.listPrice) {\n      let priceData = item.saleInfo.listPrice.amount;\n      const currency = 98; // Примерная стоимость в условных единицах\n      let priceValue = Math.floor(priceData * 100 / currency) / 100;\n\n      priceNode = `<div class=\"product__price\">\n                    <span class=\"price__currency\">$</span><span class=\"price__value\" data-book-info=\"price\">${priceValue}</span>\n                  </div>`;\n    }\n\n    // Собираем HTML для одного продукта\n    productHtml = `<div class=\"products-list__item product\">\n                      <img src=\"${thumbnailData}\" alt=\"Book cover\" class=\"product__img\" data-book-info=\"thumbnail\">\n                      <div class=\"product__card\">\n                        ${authorsNode}\n                        ${titleNode}\n                        ${ratingNode}\n                        ${descriptionNode}\n                        ${priceNode}\n                        <button class=\"btn buy-button\" data-book-info=\"id\" data-bookid=\"${bookId}\">Buy now</button>\n                      </div>\n                    </div>`;\n\n    // Вставляем HTML в целевой узел\n    targetNode.insertAdjacentHTML('beforeend', productHtml);\n  });\n\n  // Получаем все кнопки \"Buy now\" и передаем их в функцию для обработки\n  buyButtons = document.getElementsByClassName('buy-button');\n  (0,_cart_js__WEBPACK_IMPORTED_MODULE_0__.getSelectedBookInfo)(buyButtons);\n};\n\n\n\n//# sourceURL=webpack://book-store/./src/script/BookList.js?");

/***/ }),

/***/ "./src/script/cart.js":
/*!****************************!*\
  !*** ./src/script/cart.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSelectedBookInfo: () => (/* binding */ getSelectedBookInfo),\n/* harmony export */   setCartIcon: () => (/* binding */ setCartIcon)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./src/script/localStorage.js\");\n\n\n// Получаем элемент корзины\nconst cart = document.getElementById('cart-count');\n\n// Функция для установки значка корзины\nconst setCartIcon = (count) => {\n  // Если в localStorage есть данные, убираем класс пустой корзины и устанавливаем количество товаров\n  if (localStorage.length) {\n    cart.classList.remove('cart-btn__count_empty');\n    cart.textContent = count;\n  }\n};\n\n// Функция для добавления товара в корзину\nconst addInCart = (target, count) => {\n  // Устанавливаем текст кнопки \"В корзине\", добавляем класс для стилизации и обновляем количество товаров в корзине\n  target.innerHTML = 'In the cart';\n  target.classList.add('btn_in-cart');\n  cart.classList.remove('cart-btn__count_empty');\n  cart.textContent = count;\n};\n\n// Функция для удаления товара из корзины\nconst deleteFromCart = (target, count) => {\n  // Возвращаем текст кнопки \"Купить\", удаляем класс для стилизации, обновляем количество товаров в корзине\n  target.innerHTML = 'Buy now';\n  target.classList.remove('btn_in-cart');\n  // Если товаров в корзине не осталось, добавляем класс пустой корзины\n  if (count === 0) {\n    cart.classList.add('cart-btn__count_empty');\n  }\n  cart.textContent = count;\n};\n\n// Функция для проверки содержимого корзины и обновления кнопок товаров\nconst checkCartContents = (button) => {\n  if (localStorage.length) {\n    // Перебираем все ключи в localStorage\n    for (let i = 0; i < localStorage.length; i++) {\n      let key = localStorage.key(i);\n      // Если ключ совпадает с идентификатором книги, помечаем кнопку как добавленную в корзину\n      if (key === button.dataset.bookid) {\n        button.innerHTML = 'In the cart';\n        button.classList.add('btn_in-cart');\n      }\n    }\n  }\n};\n\n// Функция для получения информации о выбранной книге и обновления состояния корзины\nconst getSelectedBookInfo = (collection) => {\n  // Перебираем все кнопки в коллекции\n  for (let button of collection) {\n    // Проверяем, добавлена ли книга в корзину, и обновляем соответствующим образом кнопку\n    checkCartContents(button);\n\n    // Добавляем обработчик события клика на кнопку\n    button.addEventListener('click', (event) => {\n      // Получаем родительский элемент кнопки (карточку товара)\n      const targetBook = event.target.parentElement.parentElement;\n      // Объект для хранения информации о книге\n      const bookInfo = {\n        id: '',\n        thumbnail: '',\n        author: '',\n        title: '',\n        description: '',\n        price: '',\n      };\n\n      // Получаем информацию о книге из соответствующих элементов и добавляем в объект bookInfo\n      for (let key in bookInfo) {\n        let node = targetBook.querySelector(`[data-book-info = \"${key}\"]`);\n\n        if (node && key === 'id') {\n          bookInfo[key] = node.dataset.bookid;\n        } else if (node && key === 'thumbnail') {\n          bookInfo[key] = node.getAttribute('src');\n        } else if (node) {\n          bookInfo[key] = node.textContent;\n        }\n      }\n\n      // Если книга уже добавлена в корзину, удаляем ее из localStorage и обновляем кнопку\n      if (event.target.classList.contains('btn_in-cart')) {\n        (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.removeLocalStorage)(targetBook, 'id');\n        deleteFromCart(event.target, localStorage.length);\n      } else {\n        (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(bookInfo);\n        addInCart(event.target, localStorage.length);\n      }\n    });\n  }\n};\n\n\n\n//# sourceURL=webpack://book-store/./src/script/cart.js?");

/***/ }),

/***/ "./src/script/header.js":
/*!******************************!*\
  !*** ./src/script/header.js ***!
  \******************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n    const links = document.querySelectorAll('.header__link');\r\n\r\n    links.forEach(link => {\r\n        link.addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n\r\n            // Удаляем класс _selected у всех ссылок\r\n            links.forEach(l => l.classList.remove('header__link_selected'));\r\n\r\n            // Добавляем класс _selected к текущей ссылке\r\n            link.classList.add('header__link_selected');\r\n        });\r\n    });\r\n});\n\n//# sourceURL=webpack://book-store/./src/script/header.js?");

/***/ }),

/***/ "./src/script/localStorage.js":
/*!************************************!*\
  !*** ./src/script/localStorage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearLocalStorage: () => (/* binding */ clearLocalStorage),\n/* harmony export */   removeLocalStorage: () => (/* binding */ removeLocalStorage),\n/* harmony export */   setLocalStorage: () => (/* binding */ setLocalStorage)\n/* harmony export */ });\n// Устанавливает данные в localStorage\nconst setLocalStorage = (data) => {\n  if (!data || !data.id) {\n    console.error('Data or Data ID is missing');\n    return;\n  }\n\n  const checkItem = localStorage.getItem(data.id);\n  if (!checkItem) {\n    localStorage.setItem(data.id, JSON.stringify(data));\n  }\n};\n\n// Удаляет элемент из localStorage по ключу и целевому элементу\nconst removeLocalStorage = (target, key) => {\n  const element = target.querySelector(`[data-book-info=\"${key}\"]`);\n  \n  if (!element) {\n    console.error('Element not found');\n    return;\n  }\n\n  const itemId = element.dataset.bookid;\n  if (itemId) {\n    localStorage.removeItem(itemId);\n  } else {\n    console.error('Item ID is missing');\n  }\n};\n\n// Очистка localStorage \nconst clearLocalStorage = () => {\n  localStorage.clear();\n};\n\n\n\n//# sourceURL=webpack://book-store/./src/script/localStorage.js?");

/***/ }),

/***/ "./src/script/main.js":
/*!****************************!*\
  !*** ./src/script/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BookList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookList.js */ \"./src/script/BookList.js\");\n/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.js */ \"./src/script/cart.js\");\n\n\n\n// Получаем элемент кнопки загрузки\nconst loadButton = document.getElementById('btn-load');\n\n// Получаем все элементы категори\nconst categories = document.querySelectorAll('.list__item');\n\n// URL\nconst url = 'https://www.googleapis.com/books/v1/volumes';\n\n// API ключ\nconst apiKey = 'AIzaSyDG3nyhr0P9owq01WthnWi7k5J8tCVg7Ug';\n\n// Параметры запроса\nconst httpRequestParam = {\n  category: 'Architecture', \n  startIndex: 0,             \n  maxResults: 6,            \n  langRestrict: 'en',        \n};\n\n// Функция для выбора категории\nconst selectCategory = (category) => {\n  // Находим текущий элемент с выбранной категорией\n  let currentCategoryNode = document.querySelector('.list__item_selected');\n  let newCategoryNode = category;\n\n  // Убираем класс у текущей категории\n  currentCategoryNode.classList.remove('list__item_selected');\n  // Добавляем класс к новой категории\n  newCategoryNode.classList.add('list__item_selected');\n};\n\n// Функция для получения параметров запроса\nconst getHttpRequestParam = (resetStartIndex) => {\n  // Находим текущий элемент с выбранной категорией\n  let currentCategoryNode = document.querySelector('.list__item_selected');\n  let currentCategoryName = currentCategoryNode.dataset.category;\n\n  // Обновляем категорию в параметрах запроса\n  httpRequestParam.category = currentCategoryName;\n\n  // Если нужно сбросить начальный индекс\n  if (resetStartIndex === true) {\n    httpRequestParam.startIndex = 0;\n  }\n\n  // Возвращаем обновленные параметры запроса\n  return httpRequestParam;\n};\n\n// Функция для выполнения запроса и обработки ответа\nconst useRequest = (url, getParam, callback, clearNode) => {\n  // Формируем ссылку с параметрами запроса\n  let link = `${url}?q=\"subject:${httpRequestParam.category}\"&${apiKey}&printType=books&startIndex=${httpRequestParam.startIndex}&maxResults=${httpRequestParam.maxResults}&langRestrict=${httpRequestParam.langRestrict}`;\n\n  // Выполняем запрос\n  fetch(link)\n  .then(response => response.json())  \n  .then((data) => {\n    callback(data, clearNode);\n  })\n  .catch(err => console.log(err.message));\n};\n\n// Добавляем обработчики событий для категорий\ncategories.forEach(category => category.addEventListener('click', (event) => {\n  event.preventDefault();\n\n  selectCategory(category);\n\n  const getParam = getHttpRequestParam(true);\n\n  useRequest(url, getParam, _BookList_js__WEBPACK_IMPORTED_MODULE_0__.renderBooksList, true);\n}));\n\n// Добавляем обработчик события для кнопки загрузки\nloadButton.addEventListener('click', () => {\n  const getParam = getHttpRequestParam();\n\n  getParam.startIndex += 6;\n\n  useRequest(url, getParam, _BookList_js__WEBPACK_IMPORTED_MODULE_0__.renderBooksList, false);\n});\n\n// Устанавливаем иконку корзины на основе данных из localStorage\n(0,_cart_js__WEBPACK_IMPORTED_MODULE_1__.setCartIcon)(localStorage.length);\n\n// Выполняем начальный запрос для загрузки данных книг\nuseRequest(url, httpRequestParam, _BookList_js__WEBPACK_IMPORTED_MODULE_0__.renderBooksList, false);\n\n//# sourceURL=webpack://book-store/./src/script/main.js?");

/***/ }),

/***/ "./src/script/slider.js":
/*!******************************!*\
  !*** ./src/script/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_banner_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/banner.jpg */ \"./src/img/banner.jpg\");\n/* harmony import */ var _img_banner_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/banner-2.jpg */ \"./src/img/banner-2.jpg\");\n/* harmony import */ var _img_banner_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/banner-3.jpg */ \"./src/img/banner-3.jpg\");\n\r\n\r\n\r\n\r\n// Список изображений для слайдера\r\nconst slides = [\r\n    _img_banner_jpg__WEBPACK_IMPORTED_MODULE_0__,\r\n    _img_banner_2_jpg__WEBPACK_IMPORTED_MODULE_1__,\r\n    _img_banner_3_jpg__WEBPACK_IMPORTED_MODULE_2__\r\n];\r\n\r\n// Получаем элемент слайдера\r\nconst sliderImg = document.querySelector('.slider-img');\r\nconst dots = document.querySelectorAll('.slider-img__dots .dot');\r\nlet currentSlide = 0; \r\n\r\n// Функция для обновления\r\nconst updateSlide = (index) => {\r\n    sliderImg.style.backgroundImage = `url(${slides[index]})`;\r\n    \r\n    // Перебираем точки\r\n    dots.forEach((dot, i) => {\r\n        if (i === index) {\r\n            dot.classList.add('active');\r\n        } else {\r\n            dot.classList.remove('active');\r\n        }\r\n    });\r\n};\r\n\r\n// Функция для перехода к следующему слайду\r\nconst nextSlide = () => {\r\n    currentSlide = (currentSlide + 1) % slides.length;\r\n    updateSlide(currentSlide);\r\n};\r\n\r\n// Добавляем обработчики событий\r\ndots.forEach((dot, index) => {\r\n    dot.addEventListener('click', () => {\r\n        currentSlide = index;\r\n        updateSlide(currentSlide);\r\n    });\r\n});\r\n\r\n// Обновляем слайд\r\nupdateSlide(currentSlide);\r\n\r\n// Автоматическое переключение слайдов\r\nsetInterval(nextSlide, 5000);\n\n//# sourceURL=webpack://book-store/./src/script/slider.js?");

/***/ }),

/***/ "./src/img/banner-2.jpg":
/*!******************************!*\
  !*** ./src/img/banner-2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9172ba7f572b52525ef5.jpg\";\n\n//# sourceURL=webpack://book-store/./src/img/banner-2.jpg?");

/***/ }),

/***/ "./src/img/banner-3.jpg":
/*!******************************!*\
  !*** ./src/img/banner-3.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6ce7bfb9b6e688c62f60.jpg\";\n\n//# sourceURL=webpack://book-store/./src/img/banner-3.jpg?");

/***/ }),

/***/ "./src/img/banner.jpg":
/*!****************************!*\
  !*** ./src/img/banner.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"28eee7a0de75ce88712c.jpg\";\n\n//# sourceURL=webpack://book-store/./src/img/banner.jpg?");

/***/ }),

/***/ "./src/img/placeholder.png":
/*!*********************************!*\
  !*** ./src/img/placeholder.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"bf071aaeb50fce784f9c.png\";\n\n//# sourceURL=webpack://book-store/./src/img/placeholder.png?");

/***/ }),

/***/ "./src/img/star-filled.svg":
/*!*********************************!*\
  !*** ./src/img/star-filled.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e376cccbc8f00d095ff1.svg\";\n\n//# sourceURL=webpack://book-store/./src/img/star-filled.svg?");

/***/ }),

/***/ "./src/img/star.svg":
/*!**************************!*\
  !*** ./src/img/star.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b7733d7fef79909394bf.svg\";\n\n//# sourceURL=webpack://book-store/./src/img/star.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
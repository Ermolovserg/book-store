import { renderBooksList } from './BookList.js';
import { setCartIcon } from './cart.js';

// Получаем элемент кнопки загрузки
const loadButton = document.getElementById('btn-load');

// Получаем все элементы категори
const categories = document.querySelectorAll('.list__item');

// URL
const url = 'https://www.googleapis.com/books/v1/volumes';

// API ключ
const apiKey = 'AIzaSyDG3nyhr0P9owq01WthnWi7k5J8tCVg7Ug';

// Параметры запроса
const httpRequestParam = {
  category: 'Architecture', 
  startIndex: 0,             
  maxResults: 6,            
  langRestrict: 'en',        
};

// Функция для выбора категории
const selectCategory = (category) => {
  // Находим текущий элемент с выбранной категорией
  let currentCategoryNode = document.querySelector('.list__item_selected');
  let newCategoryNode = category;

  // Убираем класс у текущей категории
  currentCategoryNode.classList.remove('list__item_selected');
  // Добавляем класс к новой категории
  newCategoryNode.classList.add('list__item_selected');
};

// Функция для получения параметров запроса
const getHttpRequestParam = (resetStartIndex) => {
  // Находим текущий элемент с выбранной категорией
  let currentCategoryNode = document.querySelector('.list__item_selected');
  let currentCategoryName = currentCategoryNode.dataset.category;

  // Обновляем категорию в параметрах запроса
  httpRequestParam.category = currentCategoryName;

  // Если нужно сбросить начальный индекс
  if (resetStartIndex === true) {
    httpRequestParam.startIndex = 0;
  }

  // Возвращаем обновленные параметры запроса
  return httpRequestParam;
};

// Функция для выполнения запроса и обработки ответа
const useRequest = (url, getParam, callback, clearNode) => {
  // Формируем ссылку с параметрами запроса
  let link = `${url}?q="subject:${httpRequestParam.category}"&${apiKey}&printType=books&startIndex=${httpRequestParam.startIndex}&maxResults=${httpRequestParam.maxResults}&langRestrict=${httpRequestParam.langRestrict}`;

  // Выполняем запрос
  fetch(link)
  .then(response => response.json())  
  .then((data) => {
    callback(data, clearNode);
  })
  .catch(err => console.log(err.message));
};

// Добавляем обработчики событий для категорий
categories.forEach(category => category.addEventListener('click', (event) => {
  event.preventDefault();

  selectCategory(category);

  const getParam = getHttpRequestParam(true);

  useRequest(url, getParam, renderBooksList, true);
}));

// Добавляем обработчик события для кнопки загрузки
loadButton.addEventListener('click', () => {
  const getParam = getHttpRequestParam();

  getParam.startIndex += 6;

  useRequest(url, getParam, renderBooksList, false);
});

// Устанавливаем иконку корзины на основе данных из localStorage
setCartIcon(localStorage.length);

// Выполняем начальный запрос для загрузки данных книг
useRequest(url, httpRequestParam, renderBooksList, false);
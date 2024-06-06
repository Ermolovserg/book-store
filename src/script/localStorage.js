// Устанавливает данные в localStorage
const setLocalStorage = (data) => {
  if (!data || !data.id) {
    console.error('Data or Data ID is missing');
    return;
  }

  const checkItem = localStorage.getItem(data.id);
  if (!checkItem) {
    localStorage.setItem(data.id, JSON.stringify(data));
  }
};

// Удаляет элемент из localStorage по ключу и целевому элементу
const removeLocalStorage = (target, key) => {
  const element = target.querySelector(`[data-book-info="${key}"]`);
  
  if (!element) {
    console.error('Element not found');
    return;
  }

  const itemId = element.dataset.bookid;
  if (itemId) {
    localStorage.removeItem(itemId);
  } else {
    console.error('Item ID is missing');
  }
};

// Очистка localStorage 
const clearLocalStorage = () => {
  localStorage.clear();
};

export { setLocalStorage, removeLocalStorage, clearLocalStorage };
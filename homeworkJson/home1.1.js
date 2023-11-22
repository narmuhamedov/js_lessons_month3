// Создание нового XMLHttpRequest объекта
const xhr = new XMLHttpRequest();

// Указание URL файла для запроса
const url = 'persons.json';

// Настройка запроса
xhr.open('GET', url, true);

// Обработчик для готовности данных
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      // Парсинг ответа в JSON формат
      const data = JSON.parse(xhr.responseText);
      console.log(data); // Вывод данных в консоль
    } else {
      console.error('Ошибка при получении данных:', xhr.status);
    }
  }
};

// Отправка запроса
xhr.send();

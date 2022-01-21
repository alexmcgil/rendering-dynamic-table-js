// При первом открытии страницы выполняется рендер таблицы
document.body.onload = render(data)

// Обработчик событий для возможности скрывать столбцы
document.querySelector(".hiders").addEventListener("click", handlerHide)


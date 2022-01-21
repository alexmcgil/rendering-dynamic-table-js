// Рендер таблицы
function render(data) {

    // Создаём таблицу
    let table = document.createElement("table")

    // Задаём для таблицы хедеры
    table.setAttribute("id", "table");
    let thead = document.createElement("thead")
    thead.classList.add("thead")
    table.appendChild(thead)
    let tableHeader = document.createElement("tr")
    tableHeader.classList.add("sortHeader")
    tableHeader.innerHTML = `<th class="hide-0">Имя</th>
                             <th class="hide-1">Фамилия</th>
                             <th class="hide-2">Описание</th>
                             <th class="hide-3">Цвет глаз</th>`
    thead.appendChild(tableHeader)
    let tbody = document.createElement("tbody")
    tbody.classList.add("tbody")
    table.appendChild(tbody)

    // Вставляем хедер таблицы в саму таблицу
    document.querySelector("#main-table").appendChild(table)

    // Парсим данные для таблицы методом map
    let tableData = data
        .map(p =>
            `<tr id="${p.id}">${[p.name.firstName, p.name.lastName, (p.about.substring(0, geLengthOfString()) + "..."), p.eyeColor]
                // Во втором map задаём позицию элемента в строке, чтобы потом можно было найти его через e.target.getAttributes
                .map((el, position) => `<td data="${position}" class="hide-${position}">${el}</td>`).join('')}</tr>`).join('');

    // Вставляем тело таблицы в саму таблицу
    tbody.insertAdjacentHTML("beforeend", tableData);

    // Скрываем столбец, если нужно
    for (let shouldHide in hiders) {

        // Получаем список всех элементов, которые можно скрыть
        let hideList = document.querySelectorAll(`.hide-${hiders.parsing[shouldHide]}`)

        // Возвращаем элементы к стандартному виду, если их больше не нужно скрывать
        hideList.forEach(hideElem => hideElem.style.display = "table-cell")

        // Если что-то нужно скрыть, задаём свойство display: none
        if (hiders[shouldHide] === true) {
            hideList.forEach(hideElem => hideElem.style.display = "none")
        }

    }

    // Получаем список всех элементов в столбце с цветами
    let colors = document.querySelectorAll(".hide-3")

    // Задаём свойство цвета из значения элемента
    for (let cell of colors) {
        cell.style.background = `${cell.textContent}`
    }


    // Вешаем обработчики событий на хедер для возможности сортировки и на тело для возможности редактирования
    document.querySelector(".sortHeader").addEventListener("click", sort)
    document.querySelector(".tbody").addEventListener("click", edit)

}

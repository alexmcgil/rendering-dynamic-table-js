function edit(e) {
    // Удаляем обработчик событий, чтобы не создавать лишние div'ы
    document.querySelector(".tbody").removeEventListener("click", edit)

    // Создаём div для редактирования, в нём поле для ввода и две кнопки
    let div = document.createElement("div")
    div.classList.add("edit-mode")
    let textarea = document.createElement("textarea")
    textarea.classList.add("input")
    textarea.value = e.target.textContent
    div.appendChild(textarea)
    let buttons = document.createElement("div")
    buttons.classList.add("buttons")
    let apply = document.createElement("button")
    apply.classList.add("apply")
    apply.textContent = "Принять изменения"
    let discard = document.createElement("button")
    discard.classList.add("discard")
    discard.textContent = "Отменить изменения"
    buttons.appendChild(apply)
    buttons.appendChild(discard)
    div.appendChild(buttons)
    document.querySelector("#main-table").appendChild(div)

    // Выделяем ячейку, которая в данный момент редактируется
    e.target.classList.add("active")

    // Выбираем наш div для редактирования и рисуем его противополжно выбранной строке
    let editor = document.querySelector(".edit-mode")
    editor.style.top = e.target.offsetTop + "px"                                    // В updateData передаем событие "e"
    document.querySelector(".apply").addEventListener("click", () => updateData(e), false)

    document.querySelector(".discard").addEventListener("click", () => discardUpdate(e), false)

}

function discardUpdate(e) {
    // Удаляем блок редактирования
    document.querySelector(".edit-mode").remove()

    // Убираем выделение ячейки таблицы
    e.target.classList.remove("active")

    // Устанавливаем заного обработчик событий на тело таблицы
    document.querySelector(".tbody").addEventListener("click", edit)

}

// Функция для изменеия исходных данных, опираясь на пользовательский ввод
function updateData(e) {

    // Определяем поле ввода пользователя
    let input = document.querySelector(".input")

    // Перебираем массив данных
    data.forEach(person => {
        // Если мы находимся в нужной строке (определяем по id данных и id родителя элемента,
        // на который пользователь нажал)
        if (person.id === e.target.parentElement.id) {
            // Выбираем столбец по значению аттрибута "data" (стоит на первом месте в NodeList'е)
            switch (e.target.attributes[0].value) {
                // Используем заранее заданные positions'ы при рендере в тегах td
                case "0":
                    // При совпадении нужного стобца - записываем в исходный массив введенное пользователем значение
                    person.name.firstName = input.value
                    break;
                case "1":
                    person.name.lastName = input.value
                    break;
                case "2":
                    person.about = input.value
                    break;
                case "3":
                    person.eyeColor = input.value
                    break;
            }

        }
    })
    // Удаляем и делаем ререндер таблицы
    document.getElementById('table').remove()
    render(data)

    // Удаляем блок редактирования
    document.querySelector(".edit-mode").remove()

}

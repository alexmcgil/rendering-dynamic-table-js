function sort(e) {
    // Удаляем таблицу, чтобы потом отрендерить её отсортированной
    document.getElementById('table').remove()

    // Вспомогательные переменные, для того чтобы определить, соритровать поле где есть ключ "name" или без
    let target;
    let isName;

    // Определяем сортируемое поле
    switch (e.target.textContent) {
        case "Имя":
            isName = "name"
            target = "firstName"
            break;
        case "Фамилия":
            isName = "name"
            target = "lastName"
            break;
        case "Описание":
            isName = null
            target = "about"
            break;
        case "Цвет глаз":
            isName = null
            target = "eyeColor"
            break;
    }

    // Если есть "name"
    if (isName) {
        render(data
            // Сортируем данные для рендера, которые не затронут исходный массив
            .sort(function (a, b) {
                if (a.name[target] > b.name[target]) {
                    return counters[target];
                }
                if (a.name[target] < b.name[target]) {
                    return -counters[target];
                }
                // a должно быть равным b
                return 0;
            }))

        // Если "name" нет
    } else {
        render(data
            .sort(function (a, b) {
                if (a[target] > b[target]) {
                    return counters[target];
                }
                if (a[target] < b[target]) {
                    return -counters[target];
                }
                // a должно быть равным b
                return 0;
            }))

    }

    // Инвертируем счётчик для сортировки в обратную сторону
    counters[target] = counters[target] * -1
}
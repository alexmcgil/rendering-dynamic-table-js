// Определяем, какую кнопку нажал пользователь, переключаем значение для конкретной колонки,
// делаем ререндер
function handlerHide(e) {
    switch (e.target.classList[0]) {
        case "hide-first":
            hiders.first = !hiders.first
            break;
        case "hide-last":
            hiders.last = !hiders.last
            break;
        case "hide-about":
            hiders.about = !hiders.about
            break;
        case "hide-eye":
            hiders.eye = !hiders.eye
            break;

    }
    document.getElementById('table').remove()
    render(data)
}

// Вспомогательные счётчики для возможности обратной сортировки
let counters = {
    "firstName": 1,
    "lastName": 1,
    "about": 1,
    "eyeColor": 1
}

// Объект, который хранит данные о том, что нужно скрыть
let hiders = {
    first: false,
    last: false,
    about: false,
    eye: false,
    color: false,

    // Вспомогательные данные для парсинга значений
    parsing: {
        first: "0",
        last: "1",
        about: "2",
        eye: "3",
    }
}

// Функция для определения длины строки поля "Описание"
function geLengthOfString() {
    const pageWidth = document.documentElement.scrollWidth
    if (pageWidth > 1300) {
        return 120
    } else if (pageWidth < 1300 && pageWidth > 1279) {
        return 100
    } else if (pageWidth < 1279 && pageWidth > 1000) {
        return 70
    } else if (pageWidth < 1000) {
        return 40
    } else {
        return 20
    }

}



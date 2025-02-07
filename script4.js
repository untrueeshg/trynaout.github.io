let yesButton = document.getElementById('byes2');
let noButton = document.getElementById('bno3');

let scaleValue = 1;  // Начальный размер кнопки "да"
let clickCount = 0;  // Счетчик нажатий на кнопку "нет"

// Обработчик для кнопки "нет"
noButton.addEventListener('click', function() {
    clickCount++;  // Увеличиваем счетчик на каждое нажатие на "нет"

    scaleValue += 0.5;  // Увеличиваем кнопку "да" на 50%
    yesButton.style.transform = `scale(${scaleValue})`;
    yesButton.style.transition = "transform 0.3s ease";

    // После 8 нажатий на кнопку "нет", делаем кнопку "нет" кликабельной
    if (clickCount >= 8) {
        noButton.style.pointerEvents = "auto";  // Делает кнопку "нет" кликабельной
        noButton.style.backgroundColor = "#e74c3c"; // Вернуть цвет (можно изменить)
    }
});

// Обработчик для кнопки "да"
yesButton.addEventListener('click', function() {
    window.location.href = "yes.html";  // Переход на страницу, если нажата кнопка "да"
});

// Обработчик для кнопки "нет" (после 8 нажатий)
noButton.addEventListener('click', function() {
    if (clickCount >= 8) {  // Проверяем, если 8 нажатий уже сделано
        window.location.href = "felina.html";  // Переход на страницу, если кнопка кликабельна
    }
});

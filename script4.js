let yesButton = document.getElementById('byes2');
let noButton = document.getElementById('bno3');

let scaleValue = 1;
let clickCount = 0;

// Обработчик для кнопки "нет"
noButton.addEventListener('click', function() {
    clickCount++;

    scaleValue += 0.5;
    yesButton.style.transform = `scale(${scaleValue})`;
    yesButton.style.transition = "transform 0.3s ease";

    if (clickCount >= 8) {
        noButton.style.pointerEvents = "auto";
        noButton.style.backgroundColor = "#e74c3c";
    }
});

yesButton.addEventListener('click', function() {
    window.location.href = "yes.html";
});

noButton.addEventListener('click', function() {
    if (clickCount >= 8) {
        window.location.href = "felina.html";
    }
});

let yesbutton = document.getElementById('byes1');
let nobutton = document.getElementById('bno2');

yesbutton.addEventListener('click', function() {
    window.location.href = "well2page.html";
});

nobutton.addEventListener('click', function() {
    window.location.href = "well2pageno.html";
});
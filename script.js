const number_display = document.getElementById('number_display');
let temp = Math.floor(Math.random() * (1, 100) + 1);
number_display.innerHTML = `${temp}`;
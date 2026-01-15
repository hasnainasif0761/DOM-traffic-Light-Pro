let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');
let timer = document.getElementById('timer')

let counter;
let currentLight = 'red';
let timeLeft = 10;


function turnOffLight () {
    red.style.backgroundColor = 'grey'
    yellow.style.backgroundColor = 'grey'
    green.style.backgroundColor = 'grey'
}

function setRed () {
    turnOffLight();
    red.style.backgroundColor='red';
    currentLight = 'red';
    timeLeft = 10;
    UpdateTimer();
}

function setYellow () {
    turnOffLight();
    yellow.style.backgroundColor = 'yellow';
    timeLeft = 10;
    UpdateTimer()
}
function setGreen () {
    turnOffLight();
    green.style.backgroundColor = 'greenyellow';
    timeLeft = 10;
    UpdateTimer()
}


function UpdateTimer () {
    timer.innerHTML = "Time Left " + timeLeft
}















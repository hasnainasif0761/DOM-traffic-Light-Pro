let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');
let timer = document.getElementById('timer')

let counter;
let currentLight = 'green';
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
    currentLight = 'yellow';
    timeLeft = 10;
    UpdateTimer()
}
function setGreen () {
    turnOffLight();
    green.style.backgroundColor = 'greenyellow';
    currentLight = 'green';
    timeLeft = 10;
    UpdateTimer()
}


function UpdateTimer () {
    timer.innerHTML = "Time Left " + timeLeft
}

function manualRed () {
    clearInterval(counter);
    setRed();
}
function manualYellow () {
    clearInterval(counter);
    setYellow();
}
function manualGreen () {
    clearInterval(counter);
    setGreen();
}

function startAuto () {
    clearInterval(counter);
    setRed();

    counter = setInterval(function(){
        timeLeft--
        UpdateTimer();

        if(timeLeft <= 0){
            if(currentLight === 'red'){
                setGreen();
            }else if(currentLight === 'green'){
                setYellow();
            }else if(currentLight === "yellow"){
                setRed()
            }
        }
    }, 1000);
}















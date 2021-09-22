const displayTempo = document.querySelector('#display');
const botaoStart = document.querySelector('#start');
const botaoStop = document.querySelector('#stop');
const botaoReset = document.querySelector('#reset');

let seconds = 0;
let minutes = 0;
let clickStart = false;

function timer() {
    seconds ++;    
    
    formataTempo(minutes, seconds)
    
    if (seconds >= 60) {
        seconds = 0;
        
        minutes ++;
        
        formataTempo(minutes, seconds);
    }
}

/* ativa todas as funções ligadas aos botões */
function activateChronometer() {
    interval = setInterval(timer, 1000);
    pauseTimer();
    resetTimer();
}

/* botão de stop do cronômetro */
function pauseTimer() {
    botaoStop.onclick = () => {
        clearInterval(interval);
        clickStart = false;
    }
}

/* função de reset do cronômetro */
function resetTimer() {
    botaoReset.onclick = () => {        
        clearInterval(interval);
        clickStart = false;

        seconds = 0;
        minutes = 0;

        formataTempo(minutes, seconds);        
    }
}

function formataTempo(firstElement, secondElement) {
    displayTempo.firstChild.innerHTML = firstElement < 10 ? `0${firstElement}` : firstElement;
    displayTempo.lastChild.innerHTML = secondElement < 10 ? `0${secondElement}` : secondElement;    
}

/* botão de start do cronômetro */
botaoStart.addEventListener('click', () => {
    if (clickStart === false) {
        clickStart = true;
        activateChronometer();
        
    } else {
        alert('O cronômetro já está em execução!');
    }
})
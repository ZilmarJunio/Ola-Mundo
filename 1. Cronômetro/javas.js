//Cronômetro
/*var nome = prompt("Insira o seu nome.");

document.writeln(`<p id="bemvindo">Bem vindo ${nome}</p>`)*/

let Cronom = document.getElementById('Cronom')
let principalBody = document.getElementById('principalBody')

let Count = document.getElementById('Count')

"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

    function start() {
        pause();
        cron = setInterval(() => { timer(); }, 10);
      }
      
      function pause() {
        clearInterval(cron);
      }
      
      function reset() {
        hour = 0;
        minute = 0;
        second = 0;
        millisecond = 0;
        document.getElementById('hour').innerText = '00';
        document.getElementById('minute').innerText = '00';
        document.getElementById('second').innerText = '00';
      }

    function timer() {

        if ((millisecond += 10) == 1000) {
          millisecond = 0;
          second++;
        }

        if (second == 60) {
          second = 0;
          minute++;
        }

        if (minute == 60) {
          minute = 0;
          hour++;
        }

        document.getElementById('hour').innerText = returnData(hour);
        document.getElementById('minute').innerText = returnData(minute);
        document.getElementById('second').innerText = returnData(second);
    }
      
      function returnData(input) {
        return input > 10 ? input : `0${input}`
    }

function changeTheme() {
    
    if(Cronom.style.backgroundColor != 'rgb(255, 255, 255)'){

    Cronom.style.backgroundColor = 'rgb(255, 255, 255)'
    Cronom.style.color = 'rgb(28, 37, 53)'

    principalBody.style.color = 'black'
    principalBody.style.backgroundColor = 'rgb(191, 206, 231)'
}else{
    
    Cronom.style.backgroundColor = 'rgb(28, 37, 53)'
    Cronom.style.color = 'rgb(255, 255, 255)'

    principalBody.style.color = 'white'
    principalBody.style.backgroundColor = 'rgb(22, 40, 68)'

}

}

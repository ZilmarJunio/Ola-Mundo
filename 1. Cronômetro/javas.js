//Cronometro

let horas = document.getElementById('hora');
let minutos = document.getElementById('minuto');
let segundos = document.getElementById('segundo');

let hora = 0, minuto = 0, segundo = 0;

function Start(){

  setInterval(Somar, 1000);

} 

function Somar(){

  segundo++
  segundos.innerHTML = `${segundo}`

}

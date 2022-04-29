//Cronometro

let horas = document.getElementById('hora');
let minutos = document.getElementById('minuto');
let segundos = document.getElementById('segundo');

let hora = 0, minuto = 0, segundo = 0
let interval

function Start(){

let buttonStart =

  interval = setInterval(function Somar(){
    
    segundo++;
    segundo = testeMenor10(segundo)
    segundos.innerHTML = `${segundo}`
    
    if(segundo === 60) {

      plusMinuto() 

    } 

    if(minuto === 60) {

      plusHora() 

    } 

  }, 1000);

} 

function plusMinuto() {
  
  segundo = 0

  minuto++
  minuto = testeMenor10(minuto)
  minutos.innerHTML = `${minuto}`

}

function plusHora() {
  
  minuto = 0

  hora++
  hora = testeMenor10(hora)
  horas.innerHTML = `${hora}`

}

function Reset() {
  
  document.location.reload(true);

}

function Pause() {
  
  clearInterval(interval)

}

function testeMenor10(segundo) {
  return segundo<10 ? '0' + segundo : segundo
}

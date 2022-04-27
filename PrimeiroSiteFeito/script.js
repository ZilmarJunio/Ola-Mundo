var nome = prompt("Insira o seu nome.");

document.writeln(`<p id="bemvindo">Welcome ${nome}</p>`)

var escolha1 = document.getElementById('escolha1')
var escolha2 = document.getElementById('escolha2')
var escolha3 = document.getElementById('escolha3')
var escolha4 = document.getElementById('escolha4')
var escolha5 = document.getElementById('escolha5')
var escolha6 = document.getElementById('escolha6')
var escolha7 = document.getElementById('escolha7')

function Escolha1Enter() {

  escolha1.style.backgroundImage = 'linear-gradient(to right, blue, red)'
  escolha1.style.fontSize = '40px'

}

function Escolha2Enter(){

  escolha2.style.color = 'blue'
  escolha2.style.fontSize = '40px'

}

function Escolha3Enter(){

  escolha3.style.color = 'black'
  escolha3.style.fontSize = '40px'
  escolha3.style.backgroundColor = 'white'
  
}

function Escolha4Enter() {

  escolha4.style.color = 'red'
  escolha4.style.fontSize = '40px'

}

function Escolha5Enter() {

  escolha5.style.color = 'red'
  escolha5.style.fontSize = '40px'
  escolha5.style.cursor = 'none'

}

function Escolha6Enter() {

  escolha6.style.color = 'blue'
  escolha6.style.fontSize = '40px'
  
}

function Escolha7Enter() {

  escolha7.style.color = 'yellow'
  escolha7.style.fontSize = '40px'
  
}

function Escolha1Out() {

  escolha1.style.fontSize = '35px'
  escolha1.style.background = ''

}

function Escolha2Out() {

  escolha2.style.color = 'white'
  escolha2.style.fontSize = '35px'

}

function Escolha3Out() {

  escolha3.style.color = 'white'
  escolha3.style.fontSize = '35px'
  escolha3.style.backgroundColor = ''

}

function Escolha4Out() {

  escolha4.style.color = 'white'
  escolha4.style.fontSize = '35px'

}

function Escolha5Out() {

  escolha5.style.color = 'white'
  escolha5.style.fontSize = '35px'

}

function Escolha6Out() {

  escolha6.style.color = 'white'
  escolha6.style.fontSize = '35px'

}

function Escolha7Out() {

  escolha7.style.color = 'white'
  escolha7.style.fontSize = '35px'

}
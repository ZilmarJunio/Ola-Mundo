//Cronômetro
/*var nome = prompt("Insira o seu nome.");

document.writeln(`<p id="bemvindo">Bem vindo ${nome}</p>`)*/

let Cronom = document.getElementById('Cronom')
let principalBody = document.getElementById('principalBody')

let Count = document.getElementById('Count')

function Cronometrar() {

    let horas=0, minutos=0, segundos=1

    for (horas = 0; horas <= 24; horas++) {
       
        setTimeout(() => {
            horas < 10 && minutos < 10 && segundos < 10  ? Count.innerHTML = `0${horas}:0${minutos}:0${segundos}` : 
            horas < 10 && minutos < 10 ? Count.innerHTML = `0${horas}:0${minutos}:${segundos}` :
            horas < 10 ? Count.innerHTML = `0${horas}:${minutos}:${segundos}` : null
            
        }, horas*1000);

        for(minutos = 0; minutos <= 59; minutos++){
            
            setTimeout(() => {

                horas < 10 && minutos < 10 && segundos < 10  ? Count.innerHTML = `0${horas}:0${minutos}:0${segundos}` : 
                horas < 10 && minutos < 10 ? Count.innerHTML = `0${horas}:0${minutos}:${segundos}` :
                horas < 10 ? Count.innerHTML = `0${horas}:${minutos}:${segundos}` : null
        
            }, minutos*1000);

            for(segundos = 1; segundos <= 59; segundos++){

                setTimeout(() => {
                    horas < 10 && minutos < 10 && segundos < 10  ? Count.innerHTML = `0${horas}:0${minutos}:0${segundos}` : 
                    horas < 10 && minutos < 10 ? Count.innerHTML = `0${horas}:0${minutos}:${segundos}` :
                    horas < 10 ? Count.innerHTML = `0${horas}:${minutos}:${segundos}` : null
        
                }, segundos*1000);

            }

        }
    }
    
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

let Legend_1 = document.getElementById('firstc');
let Legend_2 = document.getElementById('secondc');
let Legend_3 = document.getElementById('thirdc');

let Interval, Interval2, Interval3;
let count2 = 0, count3 = -1, count1 = 0;

let brawlhalla = [
    'Bödvar', 'Cassidy','Orion','Lord Vraxx','Gnash','Queen Nai','Hattori','SirRoland',
    'Scarlet','Thatch','Ada','Sentinel','Lucien','Teros','Brynn','Asuri','Barraza','Ember',
    'Azoth','Koji','Ulgrim','Diana','Jhala','Kor','Wu Shang','Val','Ragnir','Cross','Mirage',
    'Mordex','Yumiko','Artemis','Caspian','Sidra','Xull','Kaya','Isaiah','Jiro','Lin Fei','Zariel', 
    'Arcadia','Rayman','Dusk','Fait','Thor','Petra','Vector','Volkov','Onyx','Jaeyun','Mako','Magyar',
    'Reno','Munin','Nix'/*Todos Personagens do jogo até a data atual 08-05-2022*/
]

function runInterval(){

    Interval = setInterval(() => {
       
        let randomL = brawlhalla[Math.floor(Math.random() * brawlhalla.length)]
        Legend_1.innerHTML = `${randomL}`
        if(count1 === 0){
            fontColorb(1)
            clearInterval(Interval);
            }
        
        count1--;

    }, 100);
 
    Interval2 = setInterval(() => {
       
        let randomL = brawlhalla[Math.floor(Math.random() * brawlhalla.length)]
        Legend_2.innerHTML = `${randomL}`
        if(count2 === 0){
            fontColorb(2)
            clearInterval(Interval2);
            }
        
        count2--;

    }, 100);
    
    Interval3 = setInterval(() => {
       
        let randomL = brawlhalla[Math.floor(Math.random() * brawlhalla.length)]
        Legend_3.innerHTML = `${randomL}`
        if(count3 === 0){
            fontColorb(3)
            clearInterval(Interval3)
            }
        
        count3--;
        console.log(count3);

    }, 100);

    

}

function Reset() {
    
    if (count3 === -1) {

        resetValues()
        fontColory()
        runInterval()
        
    }

  }

function resetValues() {

    count1 = 10; 
    count2 = 20;
    count3 = 30;
    
}

function fontColory() {
      
    Legend_1.style.color = "rgb(0, 0, 0)";
    Legend_2.style.color = "rgb(0, 0, 0)";
    Legend_3.style.color = "rgb(0, 0, 0)";

  }

function fontColorb(value) {

    switch (value) {
        case 1:
            
            Legend_1.style.color = "rgb(250, 250, 121)";

            break;
        case 2:
            
            Legend_2.style.color = "rgb(250, 250, 121)";

            break;
        case 3:
            
            Legend_3.style.color = "rgb(250, 250, 121)";

            break;
        default:

            console.log('Error: Verify fontColorb() function!');

            break;
    } 
    
}
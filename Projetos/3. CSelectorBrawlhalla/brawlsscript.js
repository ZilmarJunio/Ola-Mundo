let Legend_1 = document.getElementById('firstc')
let Legend_2 = document.getElementById('secondc')
let Legend_3 = document.getElementById('thirdc')

let brawlhalla = [
    'Bödvar', 
    'Cassidy',
    'Orion',
    'Lord Vraxx',
    'Gnash',
    'Queen Nai',
    'Hattori',
    'SirRoland',
    'Scarlet',
    'Thatch',
    'Ada',
    'Sentinel',
    'Lucien',
    'Teros',
    'Brynn',
    'Asuri',
    'Barraza',
    'Ember',
    'Azoth',
    'Koji',
    'Ulgrim',
    'Diana',
    'Jhala',
    'Kor',
    'Wu Shang',
    'Val',
    'Ragnir',
    'Cross',
    'Mirage',
    'Nix',
    'Mordex',
    'Yumiko',
    'Artemis',
    'Caspian',
    'Sidra',
    'Xull',
    'Kaya',
    'Isaiah',
    'Jiro',
    'Lin Fei',
    'Zariel',
    'Rayman',
    'Dusk',
    'Fait',
    'Thor',
    'Petra',
    'Vector',
    'Volkov',
    'Onyx',
    'Jaeyun',
    'Mako',
    'Magyar',
    'Reno',
    'Munin',
    'Arcadia'
]

    for(let index = 20 ; index > 0 ; i--){

        setTimeout(() => {

            Legend_1 = brawlhalla[Math.floor(Math.random() * brawlhalla.length)]

        }, 1000);

    }

    //document.writeln(brawlhalla[Math.floor(Math.random() * brawlhalla.length)]);

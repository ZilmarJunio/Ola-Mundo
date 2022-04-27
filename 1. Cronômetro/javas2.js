let segundos = 2

for (let index = segundos; 1 <= index; index-=1) {
    
    setTimeout(() => {

    console.log(index);        
    
    }, segundos*1000);

}
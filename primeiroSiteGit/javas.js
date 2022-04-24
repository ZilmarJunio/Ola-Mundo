//Script da pag Ola-Mundo

/*let meuNome = 'Zilmar'

console.log(`Olá ${meuNome}`)


if(meuNome == 'Zilmar'){

    meuNome = meuNome.toUpperCase()
    console.log(meuNome)

}else{

    meuNome = meuNome.toLowerCase()
    console.log(meuNome)

}*/

//fizzbuzz ->

{

console.log(fizzBuzz(15))

function fizzBuzz(numero){

    let numeroFun = numero
    if(typeof numeroFun !== 'number'){

        return 'Não é um número'

    }

    if(numeroFun%3 === 0 && numeroFun%5 === 0){
        numeroFun = 'divisivelPor3e5'
    }else{

        numeroFun = numeroFun%3 === 0 ? 'divisivelPor3' : numeroFun = numeroFun%5 === 0 ? 'divisivelPor5' : numero
        
    }

    switch(numeroFun){

        case 'divisivelPor3':

        return 'Fizz'

        break

        case 'divisivelPor5':

        return 'Buzz'

        break

        case 'divisivelPor3e5':

           return 'FizzBuzz'
        
        break

        default: 

        return numeroFun

        break

    }
    
}
}

//alert(`Olá ${meuNome}`)
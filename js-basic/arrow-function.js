const apresentarArrow = nome => {
    return `meu nome é: ${nome}`
}

const somaArrow = (num1, num2) => num1 + num2;

const somaNumerosPequenos = (numero1 , numero2) =>{
    if(numero1 >10 || numero2 >10){
        return "somente numeros de 1 a 9"
    }else{
        return numero1 + numero2;
    }
}

console.log(somaNumerosPequenos(11,5))
//console.log(somaArrow(10,10))
//console.log(apresentarArrow("pedro"))
const salaJs = [7, 8, 8, 7,10 ,6.5, 4, 10, 7];
const salaJava = [6, 5, 8 ,9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedias(notasDaSala){
    const somaDasNotas =  notasDaSala.reduce((acumulador, nota) => {
        return (acumulador + nota) ;
    }, 0) //o valor do ACUMULADOR vai se igual a ZERO
    //console.log(somaDasNotas)
    const media = somaDasNotas / notasDaSala.length;// criando uma variavel que vai pegar os valores da media passado pelo parametro

    return media; // retornando o valor da media da sala que foi passado o parametro
}
console.log(`A media da sala de JS é: ${calculaMedias(salaJs)}`)

console.log(`A media da sala de JAVA é: ${calculaMedias(salaJava)}`)

console.log(`A media da sala de PYTHON é: ${calculaMedias(salaPython)}`)
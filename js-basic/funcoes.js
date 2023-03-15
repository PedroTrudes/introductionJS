// DECLARAÇÃO DE FUNÇÃO
// declarando a função
function imprimeTexto(texto) {
    console.log(texto)
}
//executando a função
imprimeTexto("Pedro");
// três tipos de escrever uma função

function soma(){
    //aqui o retorno é feito manualmente com o console
    const resultado = 2+2;
    console.log(resultado)
    //return feito para mostrar diretamente um retorno
    // return tem que ser sempre a ultima linha da function
    return 2/2
}
console.log(soma())

imprimeTexto(soma())


// brincando com funções e templateString
// aqui a função espera que passemos algum parametro para ela
function verificarIdade(anoAtual, anoNasc){
    //criamos uma variavel que vai usar os valores dos parametros
    let idade = anoAtual - anoNasc;
    //armazenar o resultado
    let result; 
    //laço de verificação
    if (idade >= 18){
        //colocando valor na variavel caso seja maior
        result = 'maior de idade'
    }else{
        //colocando valor na variacel caso seja menor
        result = 'menor de idade'
    }
    // retornando o dado com templateString
    return `você é ${result}`
}
//passando valores 
console.log(verificarIdade(2003, 2000))

function calculadora(numberOne, numberTwo, typ){
    let soma = numberOne + numberTwo;
    let subtrair = numberOne - numberTwo;
    let dividir = numberOne / numberTwo;
    let mult = numberOne * numberTwo
    let result;
    if (typ === "soma"){
        result = soma;
    }if(typ === "subtrair"){
        result = subtrair;
    }if(typ === "dividir"){
        result = dividir;
    }if(typ === "mult"){
        result = mult;
    }
    return result;
}

console.log(calculadora(1, 1, "dividir"))
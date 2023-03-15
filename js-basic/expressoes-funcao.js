//declaração de function
function minhaFuncao(param){
    console.log(param)
}
minhaFuncao('param')

// expressao de função
// importante ser uma const pois assim não tem como mudar a função
const soma = function(num1, num2) {return num1 + num2}
console.log(soma(1,1))

//principal diferença 
//aqui ela pode ser chamada pois não é uma const e sim uma function
console.log(apresentacao)
function apresentacao(){
    return 'ola';
}

//ele gera um erro pois essa função é uma CONST e esta sendo chamada antes
//da propria criação dela 
console.log(somaTeste(1,1))
const somaTeste = function(num1, num2) {return num1 + num2}


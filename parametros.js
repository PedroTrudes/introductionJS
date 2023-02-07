//Passando um parametro dentro da função
//              2   2
function soma(num1, num2) {
    return num1 + num2;
}
//dando os valores ao parametros
console.log(soma(2,2))

//Parametros x Argumentos

//ordem dos parametros, precisamos sempre ficar atento a ordem
function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`
}
//passando os argumentos do parametro
console.log(nomeIdade(2, "pedro"))

//colocando os valores no parametro, tiramos o erro da linha 26
function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

//pegando dados de outra função para passar como parametro
console.log(multiplica(soma(4,5), soma(3,3)))

// forçando um erro pois não foi passado outro parametro
console.log(multiplica(soma(4,5)))


//Boas praticas é passar poucos argumentos dentro de uma função.
//é bom quebrar em variar funções 
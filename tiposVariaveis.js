/*
var anoNascimento = 2000;
var anoAtual = 2023;
idade = anoAtual - anoNascimento ;

if(idade >= 18){
    console.log('parabens vc é maior de idade')
}else{
    console.log('você ainda é menor de idade')
}
console.log(idade)

//funciona mesmo declarando a variavel no final do codigo.
var idade

*/

/*
let anoNascimento = 2008;
let anoAtual = 2023;
let idade;
//Podemos manipular o valor dessa variavel dentro de IFs
if(anoNascimento <= 2003){
    idade = anoAtual - anoNascimento;
    console.log('parabens vc é maior de idade', idade)
}else {
    idade = 'que 18';
    console.log('Você ainda é menor de idade', idade)
}
*/

const anoAtual = 2023;
const anoNascimento = 2000;
let idade = anoAtual - anoNascimento;
//const idade = anoAtual - anoNascimento;
// const sempre tem que ter um valor fixo
if(idade > 18){
    // se eu tentar colocar um valor em uma constante ele explode erros
    idade ++; // agora ele funciona pois mudei de const para Let
    console.log(idade)
}else{
    console.log(idade)
}
console.log(idade)
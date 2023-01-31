//tipo de dado que estamos usando
//booleanos

//conversão implicita
const numero = 456;
// conversão explicita const numeroString = Number('456');
const numeroString = '456';
console.log(numero == numeroString);
console.log(numero === numeroString);
console.log(numeroString + numero);

console.log(numero === Number(numeroString));
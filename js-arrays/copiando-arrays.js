const notas = [7, 7, 8, 9];
const iserindoDados = [77, 55, 1];
//const novasNotas = notas;
//podemos colocar dados novos no arrays de um outro array
const novasNotas = [...iserindoDados,...notas, 25];//usando o spreedOperator
//o spreedOperator serve para criar um novo array com os mesmos dados do arrays escolhido

novasNotas.push(10);

console.log(`as novas notas são: ${novasNotas}`)

console.log(`as notas Originais são: ${notas}`)
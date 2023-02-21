const notas = [10, 6.5, 8, 7.5];

let somasDasNotas = 0;
// function callbacks
//o parametro que for passado na function vai ser sempre a nota
// o forEach pode passar um indece como parametro
notas.forEach(function (nota, index){
    somasDasNotas += nota;
    console.log(index);
});

const media = somasDasNotas / notas.length;

console.log(`A media das notas: ${media}`)
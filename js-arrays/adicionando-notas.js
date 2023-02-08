const notas = [10, 6, 8]

//push serve para inserir algo no array
notas.push(7)
console.log(notas)
//por mais que ele seja uma constante, por ele ser array eu 
//consigo colocar dados novos

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media)
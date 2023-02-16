const notas = [10, 6.5, 8, 7.5];
let somasNotas = 0 // se não for inicializado com um valor ele entende que não
//é um number NaN

for(let i = 0; i < notas.length; i++){
    somasNotas += notas[i];
}

const mediaCalc = somasNotas / notas.length
console.log(`A media das notas é ${mediaCalc}`)
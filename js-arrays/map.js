const notas = [10, 9.5, 8, 7, 6];

//map cria um array novo e coloca valores novos
const notasAtualizadas = notas.map((nota)=>{
    //tratamento de erro com operador ternario dentro do map
    return nota +1 >= 10 ? 10 : nota + 1;
})
console.log(notasAtualizadas)
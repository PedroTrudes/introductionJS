const alunos = ["Ana","Marcos","Maria","Mauro"]
const medias = [7, 4.5, 8, 7.5];

// a função filter sempre retorna um booleano
//convenção para não usar o parametro _
const reprovados = alunos.filter((_, indece) =>{
    return medias[indece] <= 7 ;
})

console.log(reprovados)
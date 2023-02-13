const alunos = ["João", "Juliana","Ana", "Caio"];
const medias =[10, 8, 7.5, 9];

const listaDeAlunosMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if(listaDeAlunosMedias[0].includes(aluno)){
        //desestruturando o codigo
        //const alunos = listaDeAlunosMedias[0];
        //const media = listaDeAlunosMedias[1];
        
        //maneira mais clean de usar listas 
        const [alunos, medias]= listaDeAlunosMedias;
    
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];

        console.log(`${aluno} esta cadastrado com a media de ${mediaAluno}`);
 
    }else{
        console.log("Aluno não cadastrado")
    }
}

exibeNomeENota("Ana");
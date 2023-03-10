const pessoa = {
    nome: "Pedro",
    idade: 23,
    profissao: "Front-end"
};

console.log(pessoa.nome)

console.log(pessoa.telefone)//forçando um undefined

pessoa.telefone = "111111"

console.log(pessoa.telefone)

pessoa.nome = "Pedro Trudes"

console.log(pessoa)


//Criando uma const de atribuição
const novaPessoa = {
    nome: "Carol"
}

//pessoa = novaPessoa; tentando forçar uma atribuição a uma constante 
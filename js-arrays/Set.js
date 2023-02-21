const nomes = ["Ana", "Clara", "Maria", "Maria", "Maria", "Joao", "Joao", "Joao"]

// Utilizamos o Set para não repetir dados de um array
const nomesAtualizados = [...new Set(nomes)]; //Maneira mais rapida de fazer 

// Maneira extensa de fazer {
    //const meuSet = new Set(nomes);
    //const nomesAtualizados = [...meuSet]
//}

console.log(nomesAtualizados)

    //Testes Pessoais
//meuSet.add("Pedro")
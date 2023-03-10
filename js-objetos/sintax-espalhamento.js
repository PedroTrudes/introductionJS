const cliente = {
    nome: "Pedro",
    idade: 24,
    email: "pedro.jtrudes@gmail.com",
    contatos: ["11111111" , "222222"],
};

cliente.enderecos = [{
    rua: "Estrada são marcus",
    numero: "335a",
    apartamento: false,
    complemento: "Casa 3"
    },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

ligaParaCliente(...cliente.contatos)// aqui ele esta passando dois parametros pois estamos fazendo o espalhamento

/*
maneiras de ser feito a mesma coisa só que sem o espalhamento
const encomenda = {
    destinatario: cliente.nome,
    enderecoDestinatario: cliente.enderecos[0]
}
const encomenda = {
    destinatario: cliente.nome,
    rua: cliente.enderecos[0].rua,
    numero: cliente.enderecos[0].numero,
}
*/

//resolvendo de forma mais pratica com espalhamento 
const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(encomenda)
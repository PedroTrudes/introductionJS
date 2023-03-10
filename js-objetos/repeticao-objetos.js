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

for (let chave in cliente){
    let tipo = typeof cliente[chave]
    if(tipo !== 'object' && tipo !== 'function')
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
}
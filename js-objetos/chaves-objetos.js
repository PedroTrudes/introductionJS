const cliente = {
    nome: "Pedro",
    idade: 24,
    email: "pedro.jtrudes@gmail.com",
    contatos: ["11111111" , "222222"],
};

/*
cliente.enderecos = [{
    rua: "Estrada são marcus",
    numero: "335a",
    apartamento: false,
    complemento: "Casa 3"
    },
];
*/
const chavesDoObjeto = Object.keys(cliente); //percorrendo os campos do objeto

console.log(chavesDoObjeto)

if(!chavesDoObjeto.includes("enderecos")){
    console.error("Erro esse campo nao existe")
}
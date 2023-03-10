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
}]

//inserindo um novo endereço no array de enderecos com o metodo PUSH
cliente.enderecos.push({
    rua: "Alvaro de souza",
    numero: 450,
    apartamento: true,
    complemento: ""
    }
)

// criando uma const que vai listar apenas apartamentos que seja True
const listaApartamentos = cliente.enderecos.filter((endereco) => endereco.apartamento === true) 

console.log(cliente.enderecos)
console.log(listaApartamentos)
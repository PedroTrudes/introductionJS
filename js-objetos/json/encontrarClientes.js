const clientes = require("./clientes.json");

function encontrarCliente(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrarCliente(clientes, "nome", "Kirby")// pegando os valores por nome String

const encontrado1 = encontrarCliente(clientes, "telefone", "1198123183")// pegando em uma lista de array

console.log(encontrado)
console.log(encontrado1)
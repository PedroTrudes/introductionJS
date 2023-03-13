const dados = require("./cliente.json");// puxando arquivos de outr lugar
//parecido com um import

console.log(dados);
console.log(typeof(dados));

const clienteEmString = JSON.stringify(dados);// transformando objeto em String
console.log(clienteEmString)

const clienteEmJson = JSON.parse(clienteEmString)// transformando uma String em objetos
console.log(clienteEmJson)
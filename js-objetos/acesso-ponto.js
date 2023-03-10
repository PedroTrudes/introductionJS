const cliente = {
    nome: "Pedro",
    idade: 23,
    cpf: "111111",
    email: "pedro.jtrudes@gmail.com"
};

console.log(`O nome do cliente é: ${cliente.nome}, a idade dele é ${cliente.idade}`)

console.log(`os três primeiro digitos do CPF é ${cliente.cpf.substring(0, 3)}`)
const cliente = {
    nome: "Pedro",
    idade: 23,
    cpf: "111111",
    email: "pedro.jtrudes@gmail.com",
};

console.log(`O nome do cliente é: ${cliente["nome"]}, a idade dele é ${cliente["idade"]}`) //usando com colchetes 

console.log(`os três primeiro digitos do CPF é ${cliente.cpf.substring(0, 3)}`)

const chaves = ["nome", "idade", "cpf", "email", "altura"]; //usando para percorer alguns dados do objeto

//Percorrendo os campos do array e mesclando com o objeto
chaves.forEach( (chave) =>{
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
})
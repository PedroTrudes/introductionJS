const cliente = {
    nome: "Pedro",
    idade: 23,
    email: "pedro.jtrudes@gmail.com",
    telefones: ["1111111", "2222222"],
    saldo: 200,
    chequeEspecial: 1000,  
    efetuaPagamento: function(valor){
        if(valor > this.saldo && valor > this.chequeEspecial){
            console.log('saldo insuficiente')
        }else{
            if(valor < this.saldo){
                this.saldo -= valor;
                console.log(`pagamento de ${valor} realizado, novo saldo ${this.saldo}`);
            }else{
                this.chequeEspecial -= valor
                console.log(`pagamento de ${valor} realizado, novo saldo do cheque especial: ${this.chequeEspecial}`);
            }
        }
    }
}

//criando funções dentro de objetos que ja fazem uma breve verificação no saldo

console.log(cliente)
cliente.efetuaPagamento(1500)
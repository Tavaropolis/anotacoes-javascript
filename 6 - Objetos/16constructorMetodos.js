//Com constructor além de adicionar propriedades, podemos também adicionar métodos 
function Campeao(nome, funcao, regiao){
    this.nome = nome;
    this.funcao = funcao;
    this.regiao = regiao,
    this.apresentar = function() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
}

let sona = new Campeao("Sona", "Suporte", "Demácia");
sona.apresentar();
//É muito comum que métodos utilizem a propriedades do próprio objeto em suas funções

//Para referenciar essas propriedades, utilizamos a palavra this
let sona = {
    nome: "Sona",
    funçao: "Suporte",
    regiao: "Demacia",
    kda: "1/4/22",
    apresentar() {
        console.log(`Olá invocador, meu nome é ${this.nome}`); //neste caso o mesmo que sona.nome
    }
}

sona.apresentar()

//A vantagem de se usar o this é que ele assume o nome da variável, sendo mais seguro e simples trabalhar com referências
let seraphine = sona;
sona = null;
seraphine.apresentar(); //Irá funcionar, mas não funcionaria se tivessemos chamado sona.nome no método


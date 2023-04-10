//Além de propriedades tbm podemos passar métodos (funções) em nossos objetos, simulando seus comportamentos
let sona = {
    nome: "Sona",
    funçao: "Suporte",
    regiao: "Demacia",
    kda: "1/4/22",
    hinoDoValor: function() {
        console.log("Causou dano!");
    }
}
sona.hinoDoValor();

//Métodos também podem ser declarados por notação curta
sona = {
    nome: "Sona",
    funçao: "Suporte",
    regiao: "Demacia",
    kda: "1/4/22",
    cancaoDaCeleridade() {
        console.log("Aumentou a velocidade do aliado!")
    }
}

sona.cancaoDaCeleridade();
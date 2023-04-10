//Funções podem acessar variáveis globais, porém variáveis declaras em funções só podem ser acessadas por funções

let x = "Bom dia!";

function bomDia() {
    console.log(x);
    var y = "Boa Noite!";
}

bomDia();
// console.log(y);
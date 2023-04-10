// Funções são um tipo de valor em Javascript portanto podem ser passadas para dentro de uma variável;

let saudacao = function mostrarSaudacao() {
    return "Bom dia!";
};
console.log(saudacao); //Vai retornar o valor como [Function: mostrarSaudacao];
console.log(saudacao()); //Vai returnar o return de dentro da função;

//Este tipo de criação de função é chamado de Function Expression

//A função que será passada para a variável não necessita ter nome
let boatarde = function() {
    return "Boa tarde!";
};
console.log(boatarde());

//Para passar uma função anteriormente declarada
function boaNoite() {
    return "Boa Noite!";
};

let noitinha = boaNoite; //Aqui atribuimos a função a variável
console.log(noitinha);
noitinha = boaNoite();
console.log(noitinha); //Aqui atribuimos o return da função a variável
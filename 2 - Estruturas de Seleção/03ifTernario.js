// É possível usar um if que ocupa apenas uma linha. Não se escreve if nele
let idade = 20;

(idade >= 18) ? console.log("Entrada Liberada") : console.log("Entrada Proíbida");

//É possível até colocar um if ternário dentro de um if ternário, porém não é recomendado
let valor1 = true;
let valor2 = false;

console.log(valor1? valor2? "Valor 2 Verdadeiro": "Valor 2 Falso" : "Valor 1 Falso");
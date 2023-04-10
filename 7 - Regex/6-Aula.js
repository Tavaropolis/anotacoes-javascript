const { texto, alfabeto } = require("./base.js");

//[] - Conjunto
//[^] - Negação de conjunto
//[-] - Cria um range (tem de ser sempre do maior para o menor)

console.log(alfabeto);
console.log(alfabeto.match(/[0-9]+/gi));
console.log(alfabeto.match(/[a-z]+/gi));
console.log(alfabeto.match(/[A-Z]+/gi));
console.log(alfabeto.match(/[a-zA-Z0-9]+/gi));
console.log(alfabeto.match(/[\u00A0 - \u00BA]+/gi));
console.log(alfabeto.match(/\w+/gi));
console.log(alfabeto.match(/\W/gi));
console.log(alfabeto.match(/\d+/gi));
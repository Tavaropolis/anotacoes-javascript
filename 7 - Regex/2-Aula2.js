let { texto } = require('./base.js');

const regEx1 = /João|Maria/gi;

//Métodos usando como base o Texto
console.log(texto.match(regEx1)); //se comporta igual o exec

//Usando replace
console.log(texto.replace(/(João)/gi, '$1zinho')); //O $1 assume o valor do grupo

//Você pode passar uma função no replace para tratar os dados
console.log(texto.replace(/(João)/gi, (input) => input.toUpperCase() + " Silva"));

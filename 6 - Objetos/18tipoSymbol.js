//Existe um tipo primitivo de dados especial em Javascript, geralmente para se trabalhar com objetos, o tipo Symbol

//Criando um Symboll
let id = Symbol();

//Podemos passar um argumento para o Symbol que servirá como uma descrição dele
let id2 = Symbol("id");
let id3 = Symbol("id");
console.log(id2.description);

//Cada symbol é único e mesmo que tenham a mesma descrição, não são a mesma coisa
console.log(id2 == id3);

//Symbols não podem ser auto-convertidos para string, portando não funcionam com console.log
console.log(id2); //Retornará erro no navegador
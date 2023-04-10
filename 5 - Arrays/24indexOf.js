let array = ["Morgana", "Leona", "Sona", "Kayle"];

//Semelhar ao método de string, ele irá buscar o index da primeira ocorrência de um valor no array
console.log(array.indexOf("Sona"));

//É possível passar um segundo argumento que seria a posição inicial que ele deve começar a percorrer
console.log(array.indexOf("Sona", 1));

//Caso não exista o valor buscado, indexOf() retornará -1
console.log(array.indexOf("LeBlanc"));
let array = ["Morgana", "Leona", "Sona", "Kayle", "Sona"];

//Método semelhante ao indexOf(), porém ele percorre o array de trás para frente
console.log(array.lastIndexOf("Sona"));

//Ele também retorna -1 caso o valor não exista no array
console.log(array.lastIndexOf("LeBlanc"));
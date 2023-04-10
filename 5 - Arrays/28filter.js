let array = ["Morgana", "Leona", "Sona", "Kayle", "Sona"];

//filter() é um método que aceita uma função cb como argumento. Serve para filtrar/peneirar elementos de dentro de um array
array1 = array.filter((item) => {
    return item == "Sona"
})
console.log(array1);

//lembrar de sempre usar return, senão ele retornará vazio
let array2 = array.filter((item) => {
    item == 'Sona';
})
console.log(array2);

//Assim como forEach() os três parametros da callback são item, index, array
let array3 = ["Morgana", "Leona", "Sona", "Kayle", "Sona"];
array3 = array3.filter((item, index) => {
    return index > 2;
})
console.log(array3);

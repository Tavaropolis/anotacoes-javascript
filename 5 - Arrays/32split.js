let morgana = "Morgana";
let array = "Morgana, Leona, Sona, Kayle";

//Usamos o método() split, para separar items de um array ou string
    //Separando uma string em array
    morgana = morgana.split('');
    console.log(morgana);

    //Separando elementos de uma string
    array = array.split(',');
    console.log(array);

//É possível ainda passar um argundo argumento, para determinar até que indíce o split() deve correr
let array2 = "Morgana, Leona, Sona, Kayle";
array2 = array2.split(", ", 2);
console.log(array2);
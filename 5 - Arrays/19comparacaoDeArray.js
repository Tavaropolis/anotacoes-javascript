//Comparar arrays podem trazer algumas complicações

//Se compararmos dois tipos object eles sempre retornarão falso, independente do valor guardado
let array = ["Morgana", "Leona", "Sona", "Kayle"];
let array2 = ["Morgana", "Leona", "Sona", "Kayle"];
console.log(`array == array2: ${array == array2}`);

//Se compararmos um tipo object com um tipo primitivo o tipo object será convertido em primitivo
console.log(`0 == []: ${0 == []}`); //[] será convertido em '' e como ambos são falsy, será true
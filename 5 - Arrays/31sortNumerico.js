let array = [1, 30, 15, 27];

//O método sort() não funciona muito bem com números, pois ele transforma todos em strings e organiza por critérios alfabéticos
array.sort();
console.log(array);

//Para resolver esse problema, precisamos criar a seguinte função de callback
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

let array2 = [1, 30, 15, 27];
array2.sort(compareNumeric);
console.log(array2);

//É possível definir a função via arrow funcion
let array3 = [1, 18, 98, 27];
array3.sort((a, b) => a > b ? 1 : -1);
console.log(array3);

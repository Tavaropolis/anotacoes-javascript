//Existe também um operador para verificar valores falsy, funciona como o ?? porém menos restrito;
let var1 = 0;
let var2 = "";
let var3 = NaN;
let var4 = "Beleza!";

console.log(var1 || var2 || var3 || var4);
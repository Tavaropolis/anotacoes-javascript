//Variáveis podem ser declaradas de 3 jeitos

//var é o jeito mais antigo, a variável fica disponível no escopo global (isso é importante no hoisting)
var valor1 = "Bom dia!";
console.log(`Variável com var: ${valor1}`);

//let é um jeito mais recente, a variável fica apenas disponível no bloco
let valor2 = "Boa tarde!";
console.log(`Variável com let: ${valor2}`);

//const declara uma constante, onde o valor não pode ser alterado, também fica em escopo de bloco
const valor3 = "Boa noite!";
console.log(`Constante com const: ${valor3}`);

//É possível declarar várias variáveis em uma única linha
let num1 = 1, num2 = 2, num3 = 3;
console.log(`num1 : ${num1}, num2: ${num2}, num3: ${num3}`);

//O javascript também permite declaração paralela, assim como Python e Ruby
let [var1, var2, var3] = [4, 5, 6];
[var3, var2, var1] = [var1, var2, var3];
console.log(`var1 : ${var1}, var2: ${var2}, var3: ${var3}`);
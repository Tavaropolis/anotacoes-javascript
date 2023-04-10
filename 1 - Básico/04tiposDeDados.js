// Javascript possui 8 tipos de dados

//Number constitui os números inteiros e float
let var1 = 7;
let var2 = 7.5;
console.log(`Tipo de var1: ${typeof var1}. Tipo de var2: ${typeof var2}`);

//O tipo Number também possui alguns valores especiais: Infinity; -Intinity e NaN
    //Infinity é maior que todos os números. É retornado em uma divisão por 0, ou se for atríbuido manualmente
    let var3 = 1 / 0;
    console.log(`Valor de var3: ${var3}. Tipo de var3: ${typeof var3}.`);
    let var4 = Infinity;
    console.log(`Valor de var4: ${var4}. Tipo de var4: ${typeof var4}.`);

    if (Infinity > 9999) {
        console.log("Infinity é bem grande.");
    }

    //NaN é retornado quando tentasse fazer uma conta que não é possível. 
    let var5 = "Bom dia" * 5;
    console.log(`Valor de var5: ${var5}. Tipo de var5: ${typeof var5}.`); 

//BigInt é um tipo de dados destinados a números inteiros maiores que 9007199254740991. Para se definir um BigInt colocasse um n no fim do número
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`Valor de bigInt: ${bigInt}. Tipo de bigInt: ${typeof bigInt}.`);

//String é o tipo referente aos textos. Podem ter aspas simples, duplas ou crase
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
console.log(`Tipo de string: ${typeof str}`);

//Booleano corresponde aos valores de verdadeiro e falso
let booleano = true;
console.log(`Tipo de booleanos: ${typeof booleano}`);

//Null corresponde a uma variável intencionalmente sem valor inferido. É preciso tomar cuidado pois o Javascript retorna null como tipo object
let var6 = null;
console.log(`Valor de var6: ${var6}. Tipo de var6: ${typeof var6}.`); 

//Undefined é quando não foi passado valor a uma variável, geralmente de forma não intencional
let var7;
console.log(`Valor de var7: ${var7}. Tipo de var7: ${typeof var7}.`);

//Todos os tipos acima são tipos primitivos, Object é um tipo especial, onde da para se guardar mais de um valor na variável
let var8 = [1, 2, 3, 4, 5];
console.log(`Valor de var8: ${var8}. Tipo de var8: ${typeof var8}.`);
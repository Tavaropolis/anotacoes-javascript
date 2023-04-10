//Para converter Strings em Number
let var1 = "5"
var1 = Number(var1);
console.log (`Valor de var1: ${var1}. Tipo de var1: ${typeof var1}.`);

//É possível especificar se vc quer a conversão para inteiro ou float
    //Para número inteiro
    let var2 = "7.7";
    var2 = parseInt(var2);
    console.log(`Valor de var2: ${var2}`);

    //Para número float
    let var3 = "6";
    var3 = parseFloat(var3).toFixed(2);
    console.log(`Valor de var3: ${var3}`);

//Para converter Number em String
let var4 = 99;
var4 = String(var4);
console.log(`Tipo de var4: ${typeof var4}.`);
    //Outra opção é via toString()
    let var5 = 99; 
    var5 = var5.toString();
    console.log(`Tipo de var5: ${typeof var5}.`);

//Para converter String em Boolean
let var6 = "true";
var6 = Boolean(var6);
console.log(`Tipo de var6: ${typeof var6}.`);
    //Também da pra converter alguns valores númericos (0 - falso; 1 - verdadeiro)
    let var7 = 0;
    var7 = Boolean(var7);
    console.log(`Tipo de var7: ${typeof var7}.`);
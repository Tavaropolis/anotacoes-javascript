let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Elementos da string podem ser acessados através do index
console.log(txt[0]);

//Verificando o tamanho de uma string
console.log(txt.length);

//Slice serve para cortar um pedaço da string, o primeiro argumento é a posição inicial e o segundo onde deve parar (não incluso)
let txt2 = txt.slice(6, 9);
console.log(txt2);
    //Valores negativos fazem o slice contar de trás para frente
    let txt3 = txt.slice(-11, -6);
    console.log(txt3);

//Substring faz a mesma coisa que slice, porém não pode receber valores negativos
let txt4 = txt.substring(6, 9);
console.log(txt4);

//Replace substitui um termo da string por outro (porém só o primeiro match)
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);

//Para deixar um texto em minúsculo
let text2 = text.toLowerCase();
console.log(text2);

//Para deixar um texto em maiúsculo
let text3 = text.toUpperCase();
console.log(text3);

//trim() é um método que remove espaços em branco dos lados
let hello = "       Hello        ";
hello = hello.trim();
console.log(hello);

//Adicionar elementos em string via método
    //padStart adiciona no início da string
    let numb = 5;
    let text4 = numb.toString();
    let padded = text4.padStart(4,"0");
    console.log(padded);

    //padEnd adiciona ao final da string
    let padded2 = text4.padEnd(4, "0");
    console.log(padded2);

//Procura pelo caractér na posição definida
let position = txt.charAt(25);
console.log(position);

//IndexOf funciona parecido com charAt porém indexOf utiliza string e charAt a posição
let position2 = txt.indexOf('G');
console.log(position2);

//split() converte uma string em array
let coiso = "Rato,Jacaré,Tigre"
coiso = coiso.split(",");
console.log(coiso);
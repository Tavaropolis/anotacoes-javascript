// Podemos comparar dois valores em Javascript, que retornará um booleano
console.log(`4 >= 2: ${4 >= 2}`) //Retornará true;

//O que tem de se tomar cuidado é que existem dois comparadores de igualdade em Javascript
    //Comparador ==
        //Compara o valor em si, sem ligar para o tipo de dado
        console.log(`2 == '2': ${2 == '2'}`);

        //Isso pode causar problemas com alguns valores que o Javascript considera falsy
        console.log(`0 == false: ${0 == false}`);
        console.log(`'' == false: ${'' == false}`);

    //Comparador ===
        //Leva em conta o valor e o tipo da variável
        console.log(`2 === 2: ${2 === 2}`); //Retorna verdadeiro
        console.log(`2 === '2': ${2 === '2'}`); //Retorna falso

//Toda comparação de número com undefined retornará false 
console.log(`0 == undefined: ${0 == undefined}`);

//A comparação de null com undefined retornará verdadeiro
console.log(`null == undefined: ${null == undefined}`);
//Dentro dos parenteses de um If o Javascript faz a conversão para Booleano, porém alguns valores ele naturalmente considera falso

//Valores "falsy", considerados falsos dentro de um if:
    // 0
    // ""
    // null
    // undefined
    // NaN

//Através do ! podemos obter o valor reverso (positivo)
let x = "";
if (!x) {
    console.log("Deu certo!");
}
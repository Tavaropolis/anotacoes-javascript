let sona = {
    nome: "Sona",
    funçao: "Suporte",
    regiao: "Demacia",
    kda: "1/4/22"
}

let seraphine = {}

//Podemos copiar um objeto inteiro(e não só a referêcia) com Object.assign()
Object.assign(seraphine, sona);
console.log(seraphine);

//Podemos passar vários objetos no assign, porém propriedades iguais serão sobreescritas
let quinn = {nome: "Quinn"};
quinn = Object.assign({}, sona, quinn);
console.log(quinn);
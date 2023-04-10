let sona = {
    nome: "Sona",
    funçao: "Suporte",
    regiao: "Demacia",
    kda: "1/4/22",
    aliados: {
        top: "Nasus",
        mid: "Lux",
        adc: "Ashe"
    }
}

//Existe um tipo de if ternário especial para testar se há propriedades e evitar erros
console.log(sona?.alidos?.jungler);


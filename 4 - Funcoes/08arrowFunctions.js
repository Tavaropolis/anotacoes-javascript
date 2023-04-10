//É uma maneira mais rápida e elegante de fazer uma função

let saudacao = (nome = "Humano") => {
    return `Bom dia, ${nome}!`
}

console.log(saudacao("Gabriel"));
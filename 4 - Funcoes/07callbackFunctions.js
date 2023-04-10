// Callback functions em Javascript refere-se a capacidade de se passar funções como argumento de outras funções

function bomDia () {
    console.log("Bom dia!")
}

function mostrarDados(callback, nome, dinheiro) {
    callback();
    console.log(`${nome}, você possuí R$ ${dinheiro.toFixed(2)} na conta`);
}

mostrarDados(bomDia,"Gabriel", 7.5);
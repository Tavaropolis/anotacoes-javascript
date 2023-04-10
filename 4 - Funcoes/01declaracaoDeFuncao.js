//A declaração de variável em Javascript ocorre do seguinte jeito

function darOi (nome) {
    nome = nome ?? "Usuário";
    console.log(`Bom dia, ${nome}`)
}

darOi("Gabriel");
darOi();


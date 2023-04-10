// É possível definir valores padrões para os argumentos caso eles não sejam passados na função

function saudacao(nome = "Usuario") {
    console.log(`Bom dia ${nome}!`);
}

saudacao();
saudacao("Gabriel");
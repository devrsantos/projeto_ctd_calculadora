function soma(n1, n2) {
    let resposta = n1 + n2;
    console.log(`A resposta da soma de ${n1} + ${n2} é ${resposta}`);
    return resposta;
}

function subtracao(n1, n2) {
    let resposta = n1 - n2;
    console.log(`A resposta da subtração de ${n1} - ${n2} é ${resposta}`);
    return resposta; 
}

function multiplicao(n1, n2) {
    let resposta = n1 * n2;
    console.log(`A resposta da multiplição de ${n1} * ${n2} é ${resposta}`);
    return resposta; 
}

function divisao(n1, n2) {
    let resposta = n1 / n2;
    console.log(`A resposta da divisão de ${n1} / ${n2} é ${resposta}`);
    return resposta; 
}

function quadrado(n1) {
    let resposta = multiplicao(n1, n1);
    return resposta;
}

function porcentagem(n1, porcento) {
    let resposta = divisao(n1, 100);
    resposta = multiplicao(resposta, porcento);
    return resposta;
}

// soma(15, 5);
// subtracao(15, 5);
// multiplicao(15, 5);
divisao(15, 5);
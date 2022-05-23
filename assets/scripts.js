var contador = 0;


function somar() {
    var contadorSpan = encontrarSpanNoHTML();
    
    if(contador < 10) {
        contador = contador + 1;
        contadorSpan.innerHTML = contador;
    }

    else {
        window.alert("Você não pode contar mais de 10 números!");
    }
}

function subtrair() {
    var contadorSpan = encontrarSpanNoHTML();
    
    if(contador > 0) {
        contador = contador - 1;

        contadorSpan.innerHTML = contador;
    }

    else {
        window.alert("Você não pode subtrair!");
    }
}

function encontrarSpanNoHTML() {
    return document.getElementById('currentNumber');
}
function clicado(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;

    if(resultado.includes('/0')) {
        alert('Não foi possível calcular!')
        limpar()
    } else {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}

function limpar() {
    document.getElementById('resultado').innerHTML = '';
}

function apagar() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}
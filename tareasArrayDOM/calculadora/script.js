let display = document.getElementById('display');
let primerNumero = null;
let operador = null;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('botonCE').addEventListener('click', borrarEntrada);
    document.getElementById('boton7').addEventListener('click', () => agregarAlDisplay('7'));
    document.getElementById('boton8').addEventListener('click', () => agregarAlDisplay('8'));
    document.getElementById('boton9').addEventListener('click', () => agregarAlDisplay('9'));
    document.getElementById('botonDividir').addEventListener('click', () => seleccionarOperacion('/'));
    document.getElementById('boton4').addEventListener('click', () => agregarAlDisplay('4'));
    document.getElementById('boton5').addEventListener('click', () => agregarAlDisplay('5'));
    document.getElementById('boton6').addEventListener('click', () => agregarAlDisplay('6'));
    document.getElementById('botonMultiplicar').addEventListener('click', () => seleccionarOperacion('*'));
    document.getElementById('boton1').addEventListener('click', () => agregarAlDisplay('1'));
    document.getElementById('boton2').addEventListener('click', () => agregarAlDisplay('2'));
    document.getElementById('boton3').addEventListener('click', () => agregarAlDisplay('3'));
    document.getElementById('botonRestar').addEventListener('click', () => seleccionarOperacion('-'));
    document.getElementById('boton0').addEventListener('click', () => agregarAlDisplay('0'));
    document.getElementById('botonPunto').addEventListener('click', () => agregarAlDisplay('.'));
    document.getElementById('botonIgual').addEventListener('click', calcularResultado);
    document.getElementById('botonSumar').addEventListener('click', () => seleccionarOperacion('+'));
});

function agregarAlDisplay(valor) {
    if (display.textContent === '0' && valor !== '.') {
        display.textContent = valor;
    } else {
        display.textContent += valor;
    }
}

function seleccionarOperacion(op) {
    if (display.textContent === '') return;

    if (primerNumero !== null) {
        calcularResultado();
    }

    primerNumero = parseFloat(display.textContent);
    operador = op;
    display.textContent = '';
}

function calcularResultado() {
    if (operador === null || primerNumero === null || display.textContent === '') return;

    let segundoNumero = parseFloat(display.textContent);
    let resultado = 0;

    switch (operador) {
        case '+':
            resultado = primerNumero + segundoNumero;
            break;
        case '-':
            resultado = primerNumero - segundoNumero;
            break;
        case '*':
            resultado = primerNumero * segundoNumero;
            break;
        case '/':
            if (segundoNumero === 0) {
                display.textContent = 'Error!';
                return;
            }
            resultado = primerNumero / segundoNumero;
            break;
    }

    display.textContent = resultado;
    primerNumero = resultado;
    operador = null;
}

function borrarEntrada() {
    display.textContent = '0';
}
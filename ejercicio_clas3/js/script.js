// Constantes Modal
const modal = document.getElementById("modal");
const tituloModal = document.getElementById("tituloModal");
const ejercicioModal = document.getElementById("ejercicioModal");
const respuesta = document.getElementById("respuesta");
const btnVerificar = document.getElementById("verificar");
const mensaje = document.getElementById("mensaje");
const btnCerrar = document.getElementById("cerrar");

// Constantes a cada botón
const btnParImpar = document.getElementById("btnParImpar");
const btnMayorEdad = document.getElementById("btnMayorEdad");
const btnTablaMultiplicar = document.getElementById("btnTablaMultiplicar");
const btnContadorAscendente = document.getElementById("btnContadorAscendente");
const btnContadorDescendente = document.getElementById("btnContadorDescendente");
const btnSumaNumeros = document.getElementById("btnSumaNumeros");

let funcionEjercicioActual = null;

// Eventos
btnParImpar.addEventListener("click", function () {
    abrirModal("Número Par o Impar", "Ingresa un número para verificar si es par o impar", verificarParImpar);
});

btnMayorEdad.addEventListener("click", function () {
    abrirModal("Mayor de Edad", "Ingresa tu edad para saber si eres mayor de edad", verificarEdad);
});

btnTablaMultiplicar.addEventListener("click", function () {
    abrirModal("Tabla de Multiplicar", "Ingresa un número para ver su tabla de multiplicar", tablaMultiplicar);
});

btnContadorAscendente.addEventListener("click", function () {
    abrirModal("Contador Ascendente", "Ingresa un número para iniciar el conteo", contadorAscendente);
});

btnContadorDescendente.addEventListener("click", function () {
    abrirModal("Contador Descendente", "Ingresa un número para iniciar el conteo", contadorDescendente);
});

btnSumaNumeros.addEventListener("click", function () {
    abrirModal("Suma de Números", "Ingresa números separados por comas para sumarlos", sumaNumeros);
});

function abrirModal(titulo, descripcion, funcionEjercicio) {
    tituloModal.textContent = titulo;
    ejercicioModal.textContent = descripcion;
    respuesta.value = "";
    mensaje.textContent = "";
    funcionEjercicioActual = funcionEjercicio;
    modal.classList.add("activarModal");
}

btnCerrar.addEventListener("click", function () {
    modal.classList.remove("activarModal");
});

function verificarParImpar() {
    let numero = parseInt(respuesta.value);
    if (isNaN(numero)) {
        mensaje.textContent = "Ingresa un número válido.";
    } else {
        mensaje.textContent = (numero % 2 === 0) ? "Es un número PAR" : "Es un número IMPAR";
    }
}

function verificarEdad() {
    alert("Has presionado el boton para verificar tu edad");
}

function tablaMultiplicar() {
    let numero = parseInt(respuesta.value);
    if (isNaN(numero)) {
        mensaje.textContent = "Ingresa un número válido.";
    } else {
        let resultado = "";
        for (let i = 1; i <= 10; i++) {
            resultado += numero + " x " + i + " = " + (numero * i) + "<br>";
        }
        mensaje.innerHTML = resultado;
    }
}

function contadorAscendente() {
    let numero = parseInt(respuesta.value);
    if (isNaN(numero)) {
        mensaje.textContent = "Ingresa un número válido.";
    } else {
        let resultado = "";
        for (let i = 1; i <= numero; i++) {
            resultado += i + " ";
        }
        mensaje.textContent = resultado;
    }
}

function contadorDescendente() {
    let numero = parseInt(respuesta.value);
    if (isNaN(numero)) {
        mensaje.textContent = "Ingresa un número válido.";
    } else {
        let resultado = "";
        for (let i = numero; i >= 1; i--) {
            resultado += i + " ";
        }
        mensaje.textContent = resultado;
    }
}

function sumaNumeros() {
    let numeros = respuesta.value.split(",");
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        let numero = parseInt(numeros[i]);
        if (!isNaN(numero)) {
            suma += numero;
        }
    }
    mensaje.textContent = "La suma es: " + suma;
}

btnVerificar.addEventListener("click", function () {
    if (funcionEjercicioActual) {
        funcionEjercicioActual();
    }
});
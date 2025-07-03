// Función para calcular e imprimir la tabla de multiplicar
function mostrarTabla(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) { // Bucle for para iterar sobre los multiplicadores
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

do {
    // Solicitar al usuario un número
    let entrada = prompt("Ingrese un número entero (o escriba 'salir' para terminar la operacion):");

    // Si el usuario escribe "salir" o cancela el prompt, terminar el programa
    if (entrada === null || entrada.toLowerCase() === "salir") {
        break;
    }

    // Convertir la entrada a número y eliminar espacios en blanco
    let numero = parseInt(entrada.trim());

    // Verificar si la entrada es un número válido
    if (!isNaN(numero)) {
        mostrarTabla(numero); // Llamar a la función para imprimir la tabla
    } else {
        console.log("Por favor, ingrese un número válido.");
    }
} while (true); // Bucle do while para repetir el proceso hasta que el usuario decida salir

console.log("Programa finalizado.");

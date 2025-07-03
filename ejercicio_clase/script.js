function sumar(a, b) {
    return a + b;
  }
  
  function restar(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    if (b === 0) {
      return "No se puede dividir por cero";
    }
    return a / b;
  }
  
  function menu() {
    while (true) {
      let opcion = prompt(
        "Seleccione una operación:\n" +
        "1. Suma\n" +
        "2. Resta\n" +
        "3. Multiplicación\n" +
        "4. División\n" +
        "5. Salir"
      );
  
      // Comprobar que la opcioñ es válida
      if (opcion < 1 || opcion > 5) {
        alert("Opción inválida. Por favor, seleccione nuevamente.");
        continue;
      }
  
      // Si la opción es5, salir del bucle
      if (opcion === "5") {
        alert("¡Hasta luego!");
        break;
      }
  
      // Pedir los dos números para la operacion
      let valorA = prompt("Ingrese el primer número:");
      let valorB = prompt("Ingrese el segundo número:");
  
      // Validar y convertir los valores a números :,)
      try {
        let numeroA = parseFloat(valorA);
        let numeroB = parseFloat(valorB);
  
        if (isNaN(numeroA) || isNaN(numeroB)) {
          throw new Error("Uno o ambos de los valores ingresados no son números.");
        }
  
        // Realizar la operaciósn seleccionada
        let resultado;
        switch (opcion) {
          case "1":
            resultado = sumar(numeroA, numeroB);
            break;
          case "2":
            resultado = restar(numeroA, numeroB);
            break;
          case "3":
            resultado = multiplicar(numeroA, numeroB);
            break;
          case "4":
            resultado = dividir(numeroA, numeroB);
            break;
        }
  
        alert("El resultado es: " + resultado);
      } catch (error) {
        alert(error.message);
      }
    }
  }
  
  menu();
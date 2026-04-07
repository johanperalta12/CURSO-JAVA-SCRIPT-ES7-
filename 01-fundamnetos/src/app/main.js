"use strict";

// funcion para conversion

function conversor(valor, from, to) {

  // Validar número
  if (isNaN(valor)) {
    console.log("Error: valor no válido");
    return;
  }

  // Celsius → Fahrenheit
  if (from === "C" && to === "F") {
    let resultado = (valor * 9/5) + 32;
    console.log(resultado.toFixed(2) + " F");
    return;
  }

  // Fahrenheit → Celsius
  if (from === "F" && to === "C") {
    let resultado = (valor - 32) * 5/9;
    console.log(resultado.toFixed(2) + " C");
    return;
  }

  // Metros → Kilómetros
  if (from === "m" && to === "km") {
    let resultado = valor / 1000;
    console.log(resultado.toFixed(2) + " km");
    return;
  }

  // Kilómetros → Metros
  if (from === "km" && to === "m") {
    let resultado = valor * 1000;
    console.log(resultado.toFixed(2) + " m");
    return;
  }

  console.log("Error: conversión no soportada");
}

// Pruebas
// Temperatura

conversor(50, "C", "F");        // 122.00 F
conversor(212, "F", "C");      // 100.00 C
conversor(-10, "C", "F");      // 14.00 F
conversor(0, "C", "F");        // 32.00 F
conversor(-40, "C", "F");      // -40.00 F (caso especial)

// Longitud

conversor(5000, "m", "km");    // 5.00 km
conversor(0, "m", "km");       // 0.00 km
conversor(2.75, "km", "m");    // 2750.00 m
conversor(-5, "km", "m");      // -5000.00 m
conversor(100, "m", "km");     // 0.10 km

// Errores

conversor("abc", "C", "F");    // valor inválido
conversor(100, "C", "m");      // error categorías
conversor(100, "mm", "km");    // unidad no soportada
conversor("", "C", "F");       // no valor inválido
conversor(null, "C", "F");     // no valor inválido

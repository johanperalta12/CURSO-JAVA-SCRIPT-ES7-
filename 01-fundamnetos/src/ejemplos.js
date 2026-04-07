// A. tipos de datos  typeof

// string, number, boolean, null, undefined, symbol, bigint
// no primitivos: object, array, function

"use strict";

// modo estricto que ayuda a evitar errores comunes

const s = "hola mundo"; // string
const n = 42; // number
const b = true;
let u; // undefined valor no asignado
const nu = null; // null valor intencionalmente vacío
const big = 9007199254740991n; // bigint para números enteros grandes
const sym = Symbol("id"); // símbolo para identificadores únicos

console.log(typeof s); // string
console.log(typeof n); // number
console.log(typeof b); // boolean
console.log(typeof u); // undefined
console.log(typeof nu); // "object" (error histórico de JavaScript)
console.log(typeof big); // bigint
console.log(typeof sym); // symbol

// B. let vs const (y porque evitar var)

const x = 10;
// x = 20; // Error: no se puede reasignar const

const obj = { name: "Alice" };
obj.name = "Bob"; // Permitido

let y = 10;
y = 20; // Permitido

function demo() {
    if (true) {
        var z = 30;
    }
    console.log(z);
}
demo();

// C. Conversión de tipos

console.log("m" + 3); 
console.log("5" - 3); // 2
console.log(true + 1); // 2 (true se convierte en 1)

const input = "12.5";
const num = Number(input);

const number = 42;
const str = String(number);

console.log(num); // 12.5
console.log(str); // "42"

// Operadores clave

console.log(5 === "5"); // false
console.log(5 == "5"); // true

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);

const a = null;
const c = "default";
console.log(a ?? c);

console.log(0 || "default");

// D. Template strings 

const ingreso = 5000000;
const gasto = 450000;
const balance = ingreso - gasto;

const mensaje = `El balance es: ${balance}`;
console.log(mensaje);

console.log(`El ingreso es: ${ingreso}, el gasto es: ${gasto}, y el balance es: ${balance}`);

// F. CONTROL DE FLUJO

const edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

console.log(edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad");

for (let i = 0; i < 5; i++) {
    console.log(i);
}

const gastos = [100, 200, 300];
let totalGastos = 0;

for (let i = 0; i < gastos.length; i++) {
    totalGastos += gastos[i];
}

console.log(`Total de gastos: ${totalGastos}`);

let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}

// Funciones

function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

console.log(saludar("Alice"));

// Manejo básico de errores

try {
    console.log(dividirConManejo(10, 0));
} catch (error) {
    console.error("Ocurrió un error:", error.message);
}

function dividirConManejo(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number" || Number.isNaN(a) || Number.isNaN(b)) {
      throw new Error("Ambos valores deben ser números válidos");
    }

    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }

    return a / b;

  } catch (error) {
    console.error("Ocurrió un error:", error.message);
    return null;
  }
}

console.log(dividirConManejo(10, 0));
console.log(dividirConManejo(10, 2));
console.log(dividirConManejo("10", 2));

// Depuración

// console.table() imprime objetos en formato tabla
const report = { ingreso: 5000000, gasto: 450000, balance: 4550000 };

console.table(report);

console.group("Reporte financiero");
console.log(`Ingreso: ${report.ingreso}`);
console.log(`Gasto: ${report.gasto}`);
console.log(`Balance: ${report.balance}`);
console.groupEnd();

/* ===================================================== */

const edadExacta = 18;

if (edadExacta === 18) {
  console.log("1) Tienes exactamente 18 años");
}

const entrada = "10";
const numeroConvertido = Number(entrada);

if (numeroConvertido === 10) {
  console.log("2) El número convertido es 10");
}

const usuario = "Axel";
const activo = true;

if (usuario === "Axel" && activo === true) {
  console.log("3) Usuario válido y activo");
}

const rol = "admin";

if (rol === "admin" || rol === "superadmin") {
  console.log("4) Tienes permisos especiales");
}

const nombre = null;
const nombreFinal = nombre ?? "Invitado";

console.log("5) Bienvenido", nombreFinal);

for (let i = 0; i < 5; i++) {
  console.log("6) Número del ciclo:", i);
}

let suma = 0;

for (let i = 1; i <= 5; i++) {
  suma += i;
}

console.log("7) La suma total es:", suma);

const numeros = [10, 20, 30, 40];

for (let i = 0; i < numeros.length; i++) {
  console.log("8) Valor del array:", numeros[i]);
}

for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log("9)", i, "es número par");
  }
}

const estaLogueado = true;

if (estaLogueado) {
  console.log("10) Acceso permitido");
} else {
  console.log("10) Acceso denegado");
}

const numeroGrande = 100n;

if (numeroGrande > 50n) {
  console.log("BONUS) BigInt mayor que 50");
}
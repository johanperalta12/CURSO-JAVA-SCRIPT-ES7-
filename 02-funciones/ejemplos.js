"use strict";
// activa el modo estricto para evitar algunos errores

// ===============================
// DIFERENTES FORMAS DE CREAR FUNCIONES
// ===============================

// función normal
function sumarNumeros(x, y) {
  // devuelve la suma de los dos números
  return x + y;
}

// muestra el resultado en consola
console.log(sumarNumeros(5, 3)); // resultado: 8


// función guardada dentro de una variable
const multiplicacion = function (x, y) {
  // multiplica los dos números
  return x * y;
};

// muestra el resultado
console.log(multiplicacion(5, 3)); // resultado: 15


// función flecha (forma corta de escribir funciones)
const limitarNumero = (numero, minimo, maximo) => {

  // si el número es menor que el mínimo lo sube
  // si es mayor que el máximo lo baja
  return Math.min(Math.max(numero, minimo), maximo);
};

// ejemplo
console.log(limitarNumero(10, 0, 5)); // resultado: 5



// ===============================
// PARÁMETROS POR DEFECTO
// ===============================

function saludar(persona = "Invitado") {

  // si la persona escribe solo espacios
  if (!persona.trim()) {
    // trim quita espacios al inicio y al final
    return "Hola, Invitado!";
  }

  // si el nombre es válido
  return `Hola, ${persona}!`;
}

// ejemplos
console.log(saludar()); // Hola Invitado
console.log(saludar("Carlos"));



// ===============================
// ARRAYS Y MÉTODOS IMPORTANTES
// ===============================

// lista de números
const listaNumeros = [1, 2, 3, 4, 5];

// map recorre el array y crea uno nuevo
const dobles = listaNumeros.map((n) => {
  // multiplica cada número por 2
  return n * 2;
});

// muestra el nuevo array
console.log(dobles);



// ===============================
// EJEMPLO CON GASTOS
// ===============================

// lista de gastos
const gastos = [
  { valor: 50, tipo: "comida" },
  { valor: 20, tipo: "transporte" },
  { valor: 30, tipo: "comida" },
];


// filter sirve para seleccionar algunos elementos
const gastosComida = gastos.filter((g) => {
  // solo deja los que sean comida
  return g.tipo === "comida";
});

console.log(gastosComida);


// reduce sirve para juntar todo en un solo resultado
const totalComida = gastosComida.reduce((acum, g) => {

  // suma cada gasto al total
  return acum + g.valor;

}, 0);

console.log(totalComida); // total de comida



// ===============================
// USANDO FILTER Y MAP JUNTOS
// ===============================

// otro array de números
const lista = [1, 2, 3, 4, 5];

// primero filtra números pares y luego los eleva al cuadrado
const paresCuadrado = lista
  .filter((n) => n % 2 === 0) // deja solo los pares
  .map((n) => n * n); // eleva al cuadrado

// muestra el resultado
console.log(paresCuadrado); // [4, 16]
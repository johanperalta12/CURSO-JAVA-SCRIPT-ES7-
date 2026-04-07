// Función para sumar todos los elementos de un array
function sumArray(array) {
    return array.reduce((acumulador, valor) => acumulador + valor, 0);
}

// Función para calcular el promedio de un array
function averageArray(array) {
    const suma = sumArray(array);
    return suma / array.length;
}

// Función para agrupar elementos por una propiedad
function groupArrayBy(array, propiedad) {
    return array.reduce((resultado, elemento) => {
        const clave = elemento[propiedad];

        if (!resultado[clave]) {
            resultado[clave] = [];
        }

        resultado[clave].push(elemento);

        return resultado;
    }, {});
}

// =====================
// EJEMPLOS DE USO
// =====================

// Ejemplo 1: suma
const numeros = [1, 2, 3, 4, 5];
console.log("Suma:", sumArray(numeros)); // 15

// Ejemplo 2: promedio
console.log("Promedio:", averageArray(numeros)); // 3

// Ejemplo 3: agrupar por propiedad
const personas = [
    { nombre: "Axel", edad: 16 },
    { nombre: "Juan", edad: 16 },
    { nombre: "Maria", edad: 18 }
];

const agrupado = groupArrayBy(personas, "edad");
console.log("Agrupado:", agrupado);
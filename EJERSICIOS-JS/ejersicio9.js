const palabras = ["hola","mundo","js"];

const total = palabras.reduce((acc, palabra) => acc + palabra.length, 0);

console.log(total);
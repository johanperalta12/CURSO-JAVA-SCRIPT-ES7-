const numeros = [3,8,15,20,7,12,1,30];

const resultado = numeros
 .filter(n => n > 10)
 .map(n => n * 2);

console.log(resultado);
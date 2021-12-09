const numeros = [5, 6, 13, 0, 1, 18, 23];

let impares = item => item % 2;

let numerosImpar = numeros.filter(impares)
console.log(numerosImpar);
// 1. Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)
// Valores copiados

let a = 'A';
let b = a;
console.log(a, b)
a = 'C';
console.log(a, b);

// 2. Referència (mutável) - array, object, function
// Valores referenciados na memória

let var1 = [1, 2, 3, 4];
let var2 = var1;
console.log(var1, var2);
var1.push(5);
console.log(var1, var2);

// Copiar um array ao invés de referenciar
let var3 = [1, 2, 3, 4];
let var4 = [...var3];
console.log(var3, var4);
var3.push(5);
console.log(var3, var4);
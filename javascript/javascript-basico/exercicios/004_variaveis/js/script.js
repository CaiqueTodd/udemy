let varA = 'A'; // Apontar para varB
let varB = 'B'; // Apontar para varC
let varC = 'C'; // Apontar para varA

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);
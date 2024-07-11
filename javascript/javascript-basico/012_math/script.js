// Arrendodar número para baixo
let num1 = 9.54578;
num1 = Math.floor(num1);
console.log(num1);

// Arredondar número para cima
let num2 = 9.54578;
num2 = Math.ceil(num2);
console.log(num2);

// Arredondar número para casa mais próxima
let num3 = 5.54578;
let num4 = 5.47544;
num3 = Math.round(num3);
num4 = Math.round(num4);
console.log(num3);
console.log(num4);

// Identificar maior número
console.log(Math.max(50, 30, -35, 21.5, 38, 50.1, -23));

// Identificar menor número
console.log(Math.min(50, 30, -35, 21.5, 38, 50.1, -23));

// Gerar número aleátorio
const aleatorio1 = Math.random();
console.log(aleatorio1);

// Gerar número aleátorio dentro de um intervalo
const aleatorio2 = Math.random() * (10 - 5) + 5;
console.log(aleatorio2);


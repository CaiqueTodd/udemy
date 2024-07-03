const nome = "Caique";
const idade = 24;
const peso = 83.00;
const alturaEmMetro = 1.85;
const imc = Math.round(peso / alturaEmMetro**2);
const anoNascimento = 2024 - idade;

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmMetro} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
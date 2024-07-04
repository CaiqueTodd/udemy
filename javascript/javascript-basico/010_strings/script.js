//               01234567
let umaString = 'Um texto'
umaString = "Um \"texto\""; // Escape
umaString = "Um \\texto"; // Adicionar "/" ao texto

// 1. Maneiras de concatenação
console.log(umaString.concat(' em um lindo dia.')); // Concatenação pela classe.
console.log(umaString + ' em um lindo dia.'); // Concatenação com sinal de soma (+).
console.log(`${umaString} em um lindo dia.`); // Concatenação com template String.

// 2. Buscar indíce por palavra
console.log(umaString.indexOf('texto')); // Busca o indice da primeira letra do primeiro texto encontrado.
console.log(umaString.indexOf('Um', 3)); // Busca o indice da primeira letra do primeiro texto encontrado apartir do indice desejado.
console.log(umaString.lastIndexOf('m', 3 )); // Busca o indice da primeira letra do primeiro texto encontrado apartir do indice desejado da esquerda para a direita.

// 3. Expressão regular
console.log(umaString.match(/[a-z]/g)); // Retorna todas letras minuscula do texto;
console.log(umaString.replace('Um', 'Outra')); // Substituir palavra



// 1. Não podemos criar variáveis com palavras reservada (Ex.: let, if, console, etc...)
// 2. Variáveis precisam ter nomes significativos
// 3. O nome de uma variável não pode iniciar com número (Ex.: 1nome)
// 4. O nome de uma variável deve seguir o camel case (Ex.: nomeCliente)
// 5. Variáveis possui letras case-sensitive (O motor do JavaScript interpreta letra minuscula diferente de letra maiuscula)
// 6. Não podemos redeclarar variáveis com let
// 7. NÃO UTILIZAR VAR, UTILIZAR LET

let nome2; // Declarou variável
nome2 = "João"; // Inicializando a variável
console.log(nome2);
nome2 = "Caique"; // Atribuindo outro valor para a variável
console.log(nome2);



// Utilização do template String
let nome = "João";
console.log(`${nome}nasceu em 1984.`);
console.log(`Em 2000 ${nome} conheceu Maria.`);
console.log(`${nome} casou-se com Maria em 2012.`);
console.log(`Maria teve 1 filho com ${nome} em 2015.`);
console.log(`O filho de ${nome} se chama Eduardo.`);

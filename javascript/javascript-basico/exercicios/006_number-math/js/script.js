/* 
1. Coletar número do usúario
2. Exibir raiz quadrada do número
3. Número inteiro ? (True / False)
4. Valor é um NaN ? (True / False)
5. Arredondar número para baixo
6. Arredondar número para cima
7. Exibir número com duas casa decimais
*/

const numero = parseFloat(prompt('Digite um número:'));

let titulo = document.querySelector('.titulo');
let raizQuadrada = document.querySelector('.lista_exercicio_1');
let numeroInteiro = document.querySelector(`.lista_exercicio_2`);
let numeorNaN = document.querySelector('.lista_exercicio_3');
let arredondaCima = document.querySelector('.lista_exercicio_4');
let arredondaBaixo = document.querySelector('.lista_exercicio_5');
let duasCasaDecimal = document.querySelector('.lista_exercicio_6')

titulo.innerHTML += ` ${numero}`;
raizQuadrada.innerHTML += ` ${Math.sqrt(numero)}`;
numeroInteiro.innerHTML = `${numero} ${numeroInteiro.textContent} ${Number.isInteger(numero)}`;
numeorNaN.innerHTML += ` ${Number.isNaN(numero)}`;
arredondaCima.innerHTML += ` ${Math.ceil(numero)}`;
arredondaBaixo.innerHTML += ` ${Math.floor(numero)}`;
duasCasaDecimal.innerHTML += ` ${numero.toFixed(2)}`;
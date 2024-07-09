// Primeira Maneira
const nome = prompt('Digite o seu nome completo:');
const qtdLetrasNome = nome.length;
const segundaLetraNome = nome[1];
const indicePrimeiraLetraA = nome.indexOf('a');
const indiceUltimaLetraA = nome.lastIndexOf('a');
const ultimasTresLetras = nome.slice(-3, nome.length);
const palavrasDoNome = nome.split(' ');
const nomeMaiusculo = nome.toUpperCase();
const nomeMinusculo  = nome.toLowerCase();

document.body.innerHTML += `O seu nome é ${nome}<br/>`;
document.body.innerHTML += `O seu nome tem ${qtdLetrasNome} letras<br/>`;
document.body.innerHTML += `A seeeeegunda letra do seu nome é: ${segundaLetraNome}<br/>`;
document.body.innerHTML += `O índice da primeira letra 'A' do seu nome é: ${indicePrimeiraLetraA}<br/>`; // Qual o primeiro índice da letra a no seu nome?
document.body.innerHTML += `O índice da última letra 'A' do seu nome é: ${indiceUltimaLetraA}<br/>`; // Qual o último índice da letra a no seu nome?
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${ultimasTresLetras}<br/>`;
document.body.innerHTML += `As palavras do seu nome são: ${palavrasDoNome}<br/>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nomeMaiusculo}<br/>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nomeMinusculo}<br/>`;


// Segunda maneira
const outroNome = prompt('Digite outro nome completo')
document.body.innerHTML = `O seu nome é ${outroNome}<br/>`;
document.body.innerHTML += `O seu nome tem ${outroNome.length} letras<br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${outroNome[1]}<br/>`;
document.body.innerHTML += `O índice da primeira letra 'A' do seu nome é: ${outroNome.indexOf('a')}<br/>`; // Qual o primeiro índice da letra a no seu nome?
document.body.innerHTML += `O índice da última letra 'A' do seu nome é: ${outroNome.lastIndexOf('a')} <br/>`; // Qual o último índice da letra a no seu nome?
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${outroNome.slice(-3, outroNome.length)}<br/>`;
document.body.innerHTML += `As palavras do seu nome são: ${outroNome.split(' ')}<br/>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${outroNome.toUpperCase()}<br/>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${outroNome.toLowerCase()}<br/>`;





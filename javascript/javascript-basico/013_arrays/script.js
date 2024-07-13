const alunos = ['Caique', 'Luiz', 'João', 'Fernando', 'Lucas'];

// -------------------------------------------------

// 1. Manipular elementos do array (adicionar/remover)
// a. Adicionar um novo elemento ao  final do array
alunos[alunos.length] = 'Livia'; // Maneira 1
alunos.push('Junior'); // Maneira 2

// b. Adicionar um novo elemento ao inicio do array
alunos.unshift('Maria')

// c. Remover último elemento do array
alunos.pop(); // Remove último elemento do array
alunoRemovido = alunos.pop(); // Salva último elemento do array e salva ele na variável

// d. Remove primeiro elemento do array
alunos.shift();
alunoRemovido = alunos.shift(); // Salva primeiro elemento do array e salva ele na variável

// e. Remover elemento sem alterar o índice
delete alunos[2];

// -------------------------------------------------

// 2. Fatiar array
// a. Cortar um intervalo do array
console.log(alunos.slice(0, 3));

// b. Cortar do primeiro até menos o último desejado
console.log(alunos.slice(0, -3));

// -------------------------------------------------

// Verificar tamanho do array
console.log(`Esse array possui ${alunos.length} itens`);
console.log(alunos);

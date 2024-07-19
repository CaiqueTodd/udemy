// 1. Criando objeto 
const pessoa1 = {
    nome: 'Caique',
    sobrenome: 'Andrade',
    idade: 24,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    },

    incrementaIdade() {
        ++this.idade;
    }
};

// 2. Criando objeto com função
function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}



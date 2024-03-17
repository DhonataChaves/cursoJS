//Objetos (básico)

/*

FUNÇÃO
const pessoal = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

EXIBINDO OS DADOS DENTRO DA FUNÇÃO
console.log(pessoal.nome);
console.log(pessoal.sobrenome);
console.log(pessoal.idade);
*/

/*

FUNÇÃO QUE RETORNA UM OBJETO 
function criaPessoa(nome, sobrenome, idade) {        QUANDO TEMOS NOMES IGUAIS NA FUNÇÃO PODEMOS ESCREVER DA SEGUINTE MANEIRA  
    return {                                         return {nome, sobrenome, idade}
        nome: nome,                                  (o JS já entende os parametros a ser seguido)   
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa1 = criaPessoa('Dhonata', 'chaves', 24);
const pessoa2 = criaPessoa('Luany', 'Costa', 24);
const pessoa3 = criaPessoa('Andre', 'rebousas', 21);
const pessoa4 = criaPessoa('filipe', 'nascimento', 10);
const pessoa5 = criaPessoa('deisy', 'carapina', 56);
const pessoa6 = criaPessoa('Luiz', 'Otávio', 25);

*/

/*
OBJETO COM FUNÇÃO PARA MOSTRAR IDADE E FAZER INCREMENTO DE VALOR

const pessoa1 = {
    nome: 'Dhonata',
    sobrenome: 'Chaves',
    idade: 25,

    fala() {
        console.log(`A minha idade é ${this.idade}`);
    },

    incrementoIdade() {
        this.idade++
    }
};

pessoa1.fala();
pessoa1.incrementoIdade();
pessoa1.fala();
*/

const soma = {
    num1: 5,
    num2: 10,

    resultadoSoma() {
        console.log(`A soma entre`);
    },

};

soma.resultadoSoma();
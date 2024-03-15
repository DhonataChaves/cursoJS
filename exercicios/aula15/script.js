// os array são indexados por elementos.
//                 0       1        2

// const alunos = ['luiz', 'Maria', 'Joao'].

//console.log(nome[0]); para mostrar o indice solicitado.

//alunos[0] = 'caio' para alterar o indice.

//podemos adicionar um indice que não exista também alunos[3] = 'bura' (desde que o indice não exista na array).

//console.log(alunos.length); para descobrir o tamanho da nossa arrays.

//console.log[alunos.length] = 'carlos' para adicionar mais um indice (sabendo que o indice comeca a partir do 0, e length a partir do 1).

//alunos.push('nome') = para adicionar um indice ao final diretamente.

//alunos.unshift('nome') = para adicionar um indice ao ínicio.

//alunos.pop() = para remover um elemento do final.

//const removido = alunos.pop() = para salvar o elemento removido em uma variável.

//alunos.shift() = para remover um elemento do inicio.

//delete alunos[1] = exclui o elemento sem remover o indice (o indice como o excluido ficara vazio)

//podemos ver um elemento que não exista, terá retorno de undefinde (console.log[100]).

//alunos.slice() = para fatiar os elementos. (podemos usar numeros positivos para fatiar a partir do inicio e numeros negativos para fatiar a partir do final);

//console.log(alunos instanceof array) = para confirmar se realmente é um array

const alunos = ['luiz', 'Maria', 'Joao'];
console.log(alunos instanceof Array);
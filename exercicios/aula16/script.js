//Funcões básico
/*
FUNÇÃO QUE RETORNA UMA SOMA ENTRE 2 NÚMEROS.

function soma(x, y) {
    const resultado = x + y;
    return resultado
}

console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));

*/

/*
PODEMOS DECLARAR O VALOR JÁ NO PARAMETRO 
CASO NÃO SEJA DECLARADO E NÃO SEJA INFORMADA NA AÇÃO APOS A FUNCÃO RETORNARÁ UM ERRO(NAN).

function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado
}

const resultado = soma(4);
console.log(resultado);

*/

/*
UMA FUNÇÃO DENTRO DE UMA VARIÁVEL (NESSE CASO DEVEMOS COLOCAR O ';' NO FINAL DA FUNÇÃO)

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
*/

/*
FUNÇÃO MODERNA 
*QUANDO TEMOS UMA LINHA SOMENTE DENTRO DA FUNÇÃO PODEMOS ELIMINAR O ';', '{}', 'RETURN'
*QUANDO TEMOS SOMENTE UM PARAMETRO PODEMOS ELIMINAR O '()'
EXEMPLO ABAIXO

const raiz = n => n ** 0.5;
*/


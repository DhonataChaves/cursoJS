let umaString = "Um texto";

console.log(umaString[1]);
//localizando um caractere por seu índice dentro da string.
console.log(umaString.charAt(4));
//localizando um caractere também pelo seu índice dentro da string.
console.log(umaString.indexOf('texto'));
//mostra qual o índice de inicio do elemento solicitado.
console.log(umaString.indexOf('x',3));
//mostra qual o índice da vogal solicitado a partir do parametro indicado.
console.log(umaString.lastIndexOf('x', 7));
//mostra qual o índice da vogal solicitado a partir do paramentro só que com contagem de trás pra frente.

//EXPRESSÕES REGULARES
console.log(umaString.match(/[a-z]/g));
//retorna as letras minúsculas encontradas na string.
console.log(umaString.search(/x/));
//retorna a posição do caractere solicitado dentro da string.
console.log(umaString.replace('um' , 'eu consigo'));
//altera o elemento solicitado dentro da string.
let texto = ('O rato roeu a roupa do rei de roma.');
console.log(texto.replace(/r/g, '#'));
//sera alterado o elemento solicitado dentro da string, se caso não for utilizado a tag (g), será trocado somente o primeiro elemento a ser encontrado.
console.log(texto.length)
//informa qual o total de caracteres dentro da string.
console.log(texto.slice(2, 6))
//é fatiado dentro da string o intervalo de caracteres que correspondem ao intervalo solicitado.(para fazer a demarcação utilize um indice antes do qual deseja e um indice apos)
console.log(texto.slice(-3));
/*
é fatiado só que de tras pra fente
(como se fosse o total de caractere da string menos o parametro negativo informado)
console.log(texto - 3)
resultaria em 32
*/
console.log(texto.slice(-5, -1));
//primeiro parametro mostra os caracteres e o segundo qual elemento não deseja que faça parte da seleção.
console.log(texto.split('r'));
//dividi uma string baseado em um caracter qualquer.
console.log(texto.split(' ', 2));
//primeiro parametro é o caractere a ser buscado na string e o segundo parametro é o total de elementos.
console.log(texto.toUpperCase());
//retorna a string em MAIÚSCULAS
console.log(texto.toLowerCase())
//retorna a string em minúsculas


let varA = 'A'; 
let varB = 'B'; 
let varC = 'C'; 
/*
desafio fazer a sequência de letras ficar na ordem B, C, A.
*/

const repasse = varA;
varA = varB
varB = varC
varC = repasse

console.log(varA, varB, varC);

/*
podemos executar o desafio de outra maneira , exemplo logo abaixo:

let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varB, varC, varA]
*/






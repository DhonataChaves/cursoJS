let num1 = Number(prompt('Digite um numero:'));
let num2 = Number(prompt('Digite outro numero:'));
/*
a conversão de string para number poderia ser feito assim também

let num1 = prompt('Digite um numero:');
let num2 = prompt('Digite outro numero:');

num1 = Number(num1);
num2 = Number(num2);

*/
const resultado = num1 + num2;
window.alert(`A soma entre ${num1} e ${num2} é igual a ${resultado}`);

/*
o resultado poderia ser feito dentro do template string tambem

window.alert(`A soma entre ${num1} e ${num2} é igual a ${num1 + num2}`);
 
 */

//IEEE 754-2008 padrao que o JS segue para precisão dos numeros com casas decimais

let num1 = 0.7;
let num2 = 0.1;
//num1 += num2;
//num1 += num2;
//maneira simples 
//num1 = parseFloat(num1.toFixed(2));  1- forma de resolver a precisão dos numeros decimais
//num1 = Number(num1.toFixed(2)); 2- forma de resolver a precisão dos numeros.

//maneira com contas
//num1 = ((num1 * 100) + (num2 * 100)) /100; forma de resolver precisão dos numeros decimais com contas


//let num1 = 10; 
//let num2 = 2.5; 

//console.log(num1.toString() + num2);

//num1 = num1.toString(); (alterar permanentemnte o number para uma string)

//console.log(num1.toString(2)); visualização binária 

//console.log(num1.toFixed(2)) configurando a exibição de casas decimais

//console.log(Number.isInteger(num1)); retorna se um número é inteiro ou não (true ou false)

//let temp = num1 * '5';
//console.log(Number.isNaN(temp)); se a operação for válida retorna (false) se não retorna (true) baseado no erro 'NaN'


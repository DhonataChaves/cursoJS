/*OPERADORES LÓGICOS

&& -> AND -> 
E Todas as expressões precisam ser verdadeiras para retornar true // caso não seja retornará false
(true && true)   R= true

|| -> OR -> OU  
Uma expressão sendo true retorna true // se nehuma das expressôes for true retornará false
(false || true) R= true 

! -> NOT -> NÃO  
*/

const usuario = 'Dhonata';
const senha = 12345;
const validacao = usuario === 'Dhonata' && senha === 12345;
console.log(validacao)

/*
Dhonata Chaves Santos tem 23 anos, pesa 72kg
tem 1.83 de altura e seu IMC é de 19.94
Dhonata Chaves Santos nasceu em 2000
*/
const nome = 'Dhonata';
const sobrenome = 'Chaves Santos';
const idade = 23;
const peso = 72;
const alturaemM = 1.83;
let indiceMassaCorporal = peso / (alturaemM*2);
let anoAtual = 2023;
let anoNascimento = anoAtual - idade;
console.log(`${nome} ${sobrenome} tem  ${idade} anos pesa ${peso} Kg tem ${alturaemM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} Nasceu no ano de  ${anoNascimento}.`);
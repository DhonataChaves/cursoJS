/*
IF, ELSE IF E ELSE (1)

*/

// entre 0 - 11 - Bom dia
// entre 12 - 17 - Boa tarde
// entre 18 - 23 - Boa noite

// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários Else ifs na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else

const hora = 50;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23 ) {
    console.log('Boa noite')
}else {
    console.log('Olá');
}

const viagem = 0;

if (viagem) {
    console.log('Vou viajar fim de semana.');
}else {
    console.log('Não vou viajar esse fim de semana.');
}

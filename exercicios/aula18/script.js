/*
 Primitivos (imutáveis) - String, number, boolean, undefined, null (bigint, symbol) (valores copiados)

 Referência (multável) - Array, object, fucntion (valores passado por referência)
*/

/*  (valores copiados) */
let a = 'luiz';
let b = a;
a = 'Jorge'
console.log(a,b);

/* (valores por referência) */
let c = [1,2,3];
let d = [...c];
a.push(4)
console.log(c,d);
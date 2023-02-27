/*
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

'use strict';

let input=Number(prompt("inserisci un numero"));
if (input%2 === 0) alert("pari: "+input);
else{
    input++;
    alert("dispari: "+input);
} 
/*
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi
 e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
 */

'use strict';

const nomi=["ivan", "giovanni", "paolo","giuseppe"];
const cognomi=["rizzo","rossi","prova"];

let casuale=nomi[Math.floor(Math.random()*nomi.length)];
casuale+=" "+cognomi[Math.floor(Math.random()*cognomi.length)];

let gatsbyNomi=[...nomi,"Gatsby"];
let gatsbyCognomi=[...cognomi,"Gatsby"];

console.log(casuale);

let casuale2=gatsbyNomi[Math.floor(Math.random()*gatsbyNomi.length)];
casuale2+=" "+gatsbyCognomi[Math.floor(Math.random()*gatsbyCognomi.length)];

console.log("Questa è generata dalla lista malevola di Gatsby: "+casuale2);
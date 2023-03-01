'use strict';

/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

let num,somma=0,i=0;

while (i<5) {
    do{
        num=Number(prompt((i+1)+": Inserisci un numero"));
    }while(isNaN(num))
    somma+=num;
    i++;
}

alert(somma);
somma=0;
for (let j=0;j<5;j++){
    do{
        num=Number(prompt((j+1)+": Inserisci un numero"));
    }while(isNaN(num))
    somma+=num;
}
alert(somma);
//Chiedere all’utente di inserire una parola.
//preparo prompt per imput parola

const inputUtente = prompt("Scrivi una parola");

// salvo la parola in una variabile e stampo in console

console.log("Hai scelto la parola :" , inputUtente);


//scompongo la parola per ogni lettera e inserisco le lettere in un array
let parolaUtente = []

for (let i = 0; i < inputUtente.length; i++) {
    parolaUtente.push(inputUtente.charAt(i));
};
console.log("Array parola Utente" ,parolaUtente)
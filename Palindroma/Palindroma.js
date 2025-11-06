//Chiedere all’utente di inserire una parola.
//preparo prompt per imput parola

const inputUtente = prompt("Scrivi una parola");

// salvo la parola in una variabile e stampo in console

document.getElementById("inputUtente").innerHTML += `<div>${"La parola scelta è : "}${inputUtente}</div>`;
console.log("Hai scelto la parola :", inputUtente);


//scompongo la parola per ogni lettera e inserisco le lettere in un array
let parolaUtente = []

for (let i = 0; i < inputUtente.length; i++) {
    parolaUtente.push(inputUtente.charAt(i));
};
console.log("Array parola Utente", parolaUtente)

// inverto l'ordine dell'array e lo converto in stringa

const reversedParolaUtente = parolaUtente.reverse();
let parolaToString = reversedParolaUtente.join("");
console.log("Parola Invertita :", parolaToString)

//Creare una funzione per capire se la parola inserita è palindroma.

// Dichiarazione di funzione con parametro
// Input: Accetta in ingresso una stringa
// Elaborazione: Verifica se la stringa è uguale all'input utente
// Output: Restituisce un alert se la parola è palindroma

function palindroma(stringa) {
    
    if(stringa == inputUtente) {
        alert("la parola scelta è palindroma!")
        return "palindroma";
        
    }
    else{
        alert("la parola scelta NON è palindroma!")
        return "notpalindroma";
    }
   

}

// invoco la funzione e stampo in console

let ispalindroma = palindroma (parolaToString);
document.getElementById("risultato").innerHTML += `<div>${"Risultato : "}${ispalindroma}</div>`;
console.log("la parola scelta è :", ispalindroma);



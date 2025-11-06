//Chiedere all’utente di inserire una parola.
//preparo prompt per imput parola

const inputUtente = prompt("Scrivi una parola");

// salvo la parola in una variabile e stampo in console

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

let ispalindroma = palindroma (parolaToString);
console.log("la parola scelta è :", ispalindroma);



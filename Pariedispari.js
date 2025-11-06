// L’utente sceglie se puntare su un esito "pari" o "dispari"
// preparo un prompt per l'imput della scelta
// salvo la scelta in una variabile



const sceltaUtente = prompt("Vuoi scegliere Pari o Dispari?")


// se l'utente scrive qualcosa di diverso metto un alert per dire che 
// la scelta può essere solo pari o dispari

if (sceltaUtente != "dispari" && sceltaUtente != "pari") {

    alert("Puoi scegliere solo pari o dispari");

}
else {

    console.log("Scelta Utente :", sceltaUtente);
};

// preparo una variabile per la scelta del computer

let sceltaComputer = null

// se la scelta utente è pari la scelta del computer sarà dispari e viceversa

if (sceltaUtente === "pari") {

    sceltaComputer = "dispari";

}
else sceltaComputer = "pari";

console.log("Scelta Computer :", sceltaComputer);

// L'utente inserisce un numero da 1 a 5

const numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("Numero Utente :", numeroUtente)

//Generiamo un numero random (sempre da 1 a 5) 
// per il computer (usando una funzione).

function getRandomNumber(min, max) {
    const result = Math.floor(Math.random() * (max - min + 1) + min);
    return result;
}

const numMin = 1;
const numMax = 5;

let numeroComputer = getRandomNumber(numMin, numMax)
console.log("Numero Computer :", numeroComputer);

// Sommiamo i due numeri

let sumNumeri = (numeroComputer + numeroUtente)
console.log("Somma Numeri :", sumNumeri);

//Stabiliamo se la somma dei due numeri è pari o dispari 
//(usando una funzione) e diamo un risultato della somma in console

function pariOrDispari(numero) {

    if (numero % 2 == 0) {
        return "pari";
    }

    return "dispari";
}

if (pariOrDispari(sumNumeri) == "pari") {
    console.log("Il risultato è Pari");
} else {
    console.log("Il risultato è Dispari");
}

//Dichiariamo chi ha vinto

if (pariOrDispari(sumNumeri) == sceltaUtente) {

    alert("HAI VINTO!")
    console.log("Hai vinto!")
}

else {
    alert("HAI PERSO!")
    console.log("Hai Perso!")
};
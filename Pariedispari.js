// L’utente sceglie se puntare su un esito "pari" o "dispari"
// preparo un prompt per l'imput della scelta
// salvo la scelta in una variabile



const sceltaUtente = prompt("Vuoi scegliere Pari o Dispari?")


// se l'utente scrive qualcosa di diverso metto un alert per dire che 
// la scelta può essere solo pari o dispari

if (sceltaUtente != "Dispari" && sceltaUtente != "Pari") {

    alert("Puoi scegliere solo Pari o Dispari");

}
else {

    console.log("Scelta Utente :", sceltaUtente);
};

// preparo una variabile per la scelta del computer

let sceltaComputer = null

// se la scelta utente è pari la scelta del computer sarà dispari e viceversa

if (sceltaUtente === "Pari") {

    sceltaComputer = "Dispari";

}
else sceltaComputer = "Pari";

console.log("Scelta Computer :", sceltaComputer);

// L'utente inserisce un numero da 1 a 5



const sceltaNumero = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("Numero Utente" ,sceltaNumero)

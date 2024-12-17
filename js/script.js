// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// inserire eta e km da percorrere
// calcolare prezzo biglietto
// calcolare prezzo se cliente minore di 18 o maggiore di 65



let etautente = parseInt(prompt("inserisci la tua età"));

let kmdaperc = parseInt(prompt("inserisci i km da percorrere"));

let costo = (kmdaperc * 0,21);

let costofinale;

if (etautente < 18) {
    costofinale = costo - ((costo * 20) / 100);
} else if (etautente > 65) {
    costofinale = costo - ((costo * 40) / 100);
} else {
    costofinale = costo;
}

console.log(costofinale.toFixed(2));

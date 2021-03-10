// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

alert ("Benvenuto! Avvia il gioco premendo su OK.")

// Funzione per generare un numero random tra due intervalli

function numRandom(min, max) {
  var numRandom = Math.floor(Math.random() * (max - min) + min);
  return numRandom;
}

// Funzione per controllare se un elemento è già presente in un array

function inArray(array, elemento) {
  var i = 0;
  var trovato = false;

  while (i < array.length && trovato == false) {
    if (array[i] == elemento) {
      trovato = true;
    }
    i++;
  }
  return trovato;
}

/* BONUS: Chiedo all'utente il livello di difficoltà che desidera.
Stabilisco con lo Switch 3 diverse soglie massime di numeri generati.
*/

do {
  sceltaDiff = parseInt(prompt("Inserisci il livello di difficoltà: 0 -> facile, 1 -> medio, 2 -> difficile"));
} while (sceltaDiff != 0 && sceltaDiff != 1 && sceltaDiff != 2)

var numGeneratiMax;

switch (sceltaDiff) {
  case 0:
  numGeneratiMax = 100;
  break;

  case 1:
  numGeneratiMax = 80;
  break;

  case 2:
  numGeneratiMax = 50;
  break;
}

/* Scansiono tutto l'array finchè è < di 16, genero un
numero casuale e controllo se è già stato inserito richiamando la funzione.
SE non lo trova allora lo inserisce. */

var numeriBombe = [];
var numeroCasuale;
while (numeriBombe.length < 16) {
  numeroCasuale = numRandom(1, numGeneratiMax);
  if (!inArray(numeriBombe, numeroCasuale)) {
   numeriBombe.push(numeroCasuale);
 }
}

console.log(numeriBombe); //stampo i numeri bomba per test funzionamento.

var numUtenteInserito = [];
var numUtente;
var gameOver = false;

/* Il ciclo si esegue finchè è < di 84 e finchè la variabile gameOver è false.
Controlla SE il numero dell'utente non sia già stato inserito, se è no, esegue
le condizioni all'interno e SE viene trovata una bomba si ferma e darà il
punteggio totalizzato. ALTRIMENTI inserisce il numero dentro l'array.
ALTRIMENTI SE trova il numero utente già inserito mostra l'allert di avviso.
Utilizzo la variabile numGeneratiMax per definire il massimo di numeri da generare
in base alla scelta di difficoltà che ha scelto precedentemente l'utente.*/

while (numUtenteInserito.length < 84 && gameOver == false) {

  do {
    numUtente = parseInt(prompt("Inserisci un numero tra 1 e " + numGeneratiMax + " :"));
    if (numUtente > numGeneratiMax) {
      alert("Non puoi inserire un numero maggiore di: " + numGeneratiMax + "!")
    }
  } while (isNaN (numUtente) || numUtente < 1 || numUtente > numGeneratiMax)

  if (inArray(numUtenteInserito, numUtente) == false) {
    if (inArray(numeriBombe, numUtente)) {
      gameOver = true;
      alert("Game Over! " + "punteggio totalizzato: " + numUtenteInserito.length);
      var reloadPage = window.location.reload();
    }
    else {
      numUtenteInserito.push(numUtente);
    }
  }
  else if (inArray(numUtenteInserito, numUtente)) {
    alert("Hai già inserito questo numero!");
  }
}

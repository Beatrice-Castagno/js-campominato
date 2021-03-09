// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

function generaNumeri () {
  var numeriGenerati = [];
  var numeroCasuale;
  while (numeriGenerati.length < 16) {
    numeroCasuale = Math.floor(Math.random() * 100 ) + 1;
    if (!numeriGenerati.includes(numeroCasuale)) {
     numeriGenerati.push(numeroCasuale);
   }
  }
  return numeriGenerati;
}
var numeriGenerati = generaNumeri();

console.log(numeriGenerati);

var numUtenteInserito = [];
var numUtente;
var gameOver = false;

while (numUtenteInserito.length < 84 && !gameOver) {
  numUtente = parseInt(prompt("Inserisci un numero tra 1 e 100:"));
  if (!numUtenteInserito.includes(numUtente)){
    if (numeriGenerati.includes(numUtente)) {
      gameOver = true;
      alert("Hai perso!" + "i numeri consentiti erano: " + numUtenteInserito);
    }
    else {
      numUtenteInserito.push(numUtente);
    }
  }
  else if (numUtenteInserito.includes(numUtente)) {
    alert("Hai già inserito questo numero!");
  }
}

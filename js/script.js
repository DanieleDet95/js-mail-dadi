// Esercizio Email
var emailUtente = prompt('Inserisci Email: ');
var emailValide = ['daniele@gmail.com','francesco@gmail.com','antonio@gmail.com'];
var validazioneEmail = false;

for (var i = 0; i < emailValide.length; i++) {
  if ( emailValide[i] == emailUtente ) {
    validazioneEmail = true;
  }
}

if ( validazioneEmail == true ) {
  document.getElementById('esitoMail').innerHTML = 'Email valida';
} else {
  document.getElementById('esitoMail').innerHTML = 'Email non valida';
}

// Esercizio dadi
var dadiUtente = Math.floor(Math.random() * 6 + 1);
var dadiPc = Math.floor(Math.random() * 6 + 1);

if( dadiUtente > dadiPc){
  document.getElementById('esitoDadi').innerHTML = 'Ha vinto il giocatore con ' + dadiUtente + ' contro ' + dadiPc + ' del computer';
} else if ( dadiPc > dadiUtente ) {
  document.getElementById('esitoDadi').innerHTML = 'Ha vinto il cumputer con ' + dadiPc + ' contro ' + dadiUtente + ' del giocatore';
} else {
  document.getElementById('esitoDadi').innerHTML = 'Pareggio';
}

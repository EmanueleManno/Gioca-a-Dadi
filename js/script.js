// Recupero gli elementi
const displayElement = document.getElementById("display");
const diceButton = document.getElementById("dice-button");

//AL CLICK DEL BOTTONE:
diceButton.addEventListener("click", function () {
  // Randomizzo i due numeri
  const playerNumber = Math.floor(Math.random() * 6) + 1;
  const cpuNumber = Math.floor(Math.random() * 6) + 1;

  // Imposto il pareggio di default
  let result = "Pareggio!";

  // Controllo chi ha vinto
  if (playerNumber > cpuNumber) {
    result = "Ha vinto il giocatore";
  } else if (playerNumber < cpuNumber) {
    result = "Ha vinto il computer";
  }

  // Scrivo in pagina
  displayElement.innerHTML = `
<p>Tiro Giocatore: <img class="margin-left" src="img/img${playerNumber}.png" width="50"</p>
<p>Tiro Computer: <img class="margin-left" src="img/img${cpuNumber}.png" width="50"</p>
<p class="big-font"><strong>${result}</strong></p>
`;
});

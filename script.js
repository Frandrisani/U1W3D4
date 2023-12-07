const tombola = function () {
  for (let i = 0; i < 90; i++) {
    const spazioNumeriJs = document.getElementById("spazioNumeri");
    const cellaNumero = document.createElement("div");
    cellaNumero.classList.add("cellaNumeroStyle");
    const cellValue = document.createElement("h3");
    cellValue.innerText = i + 1;
    cellaNumero.appendChild(cellValue);
    spazioNumeriJs.appendChild(cellaNumero);
  }

  //creo una funzione per generare numeri da 1 a 90 e stamparli nel documento
  const generatoreDiNumeri = function () {
    const numeroGenerato = Math.floor(Math.random() * 90 + 1);
    const mostraNumeroGeneratoInHtml = document.createElement("p");
    mostraNumeroGeneratoInHtml.innerHTML = `Il numero generato è: ${numeroGenerato}`;
    document
      .getElementById("spazioGeneraNumero")
      .appendChild(mostraNumeroGeneratoInHtml);
  };

  //ora generiamo i numeri con il pulsante; ogni qual volta si clicca il pulsante si genera un numero casuale richiamando la funzione generatoreDiNumeri()
  const bottone = document.getElementById("pulsanteGeneraNumero");
  bottone.addEventListener("click", function () {
    generatoreDiNumeri();
  });

  //   // evidenziamo il giorno selezionato nel calendario per mostrare che ha almeno un evento!
  //   const dot = document.createElement('span')
  //   dot.classList.add('dot')
  //   // trovo la cella "day" selected
  //   // const selectedCell = document.querySelector('.selected') <-- RIP orsi polari
  //   const selectedCell = document.getElementsByClassName('selected')[0]
  //   selectedCell.appendChild(dot)
  // }
};

tombola();

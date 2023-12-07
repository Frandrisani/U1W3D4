const tombola = function () {
  const spazioNumeriJs = document.getElementById("spazioNumeri");
  const numeriEstratti = [];
  //Inizio creiazione di 90 celle
  for (let i = 0; i < 90; i++) {
    const cellaNumero = document.createElement("div");
    cellaNumero.classList.add("cellaNumeroStyle");
    const cellValue = document.createElement("h3");
    cellValue.innerText = i + 1;
    cellaNumero.appendChild(cellValue);
    spazioNumeriJs.appendChild(cellaNumero);
  }
  //fine creazione di 90 celle

  //creo una funzione per generare numeri da 1 a 90 e stamparli nel documento
  const generatoreDiNumeri = function () {
    let numeroGenerato;

    do {
      numeroGenerato = Math.floor(Math.random() * 90) + 1;
    } while (numeriEstratti.includes(numeroGenerato));
    numeriEstratti.push(numeroGenerato);

    document.getElementById("numerogenerato").innerText = numeroGenerato;

    let celleNumeri = document.querySelectorAll(".cellaNumeroStyle h3");

    celleNumeri.forEach(function (cell) {
      if (parseInt(cell.innerText) === numeroGenerato) {
        cell.parentNode.classList.add("estratta");
      }
    });
  };

  //ora generiamo i numeri con il pulsante; ogni qual volta si clicca il pulsante si genera un numero casuale richiamando la funzione generatoreDiNumeri()
  const bottone = document.getElementById("pulsanteGeneraNumero");
  bottone.addEventListener("click", function () {
    generatoreDiNumeri();
  });
};

tombola();

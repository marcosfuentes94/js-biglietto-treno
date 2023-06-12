function calcolaPrezzo() {
    // CHILOMETRI DA PERCORRERE
    let km = prompt("Inserisci il numero di chilometri da percorrere:");

    // ETA' PASSEGGERO
    let eta = prompt("Inserisci l'età del passeggero:");

    // PREZZO BASE DEL BIGLIETTO
    let prezzoBase = km * 0.21;

    // VERIFICA ETA' UTENTE ED EVENTUALE SCONTO
    if (eta < 18) {
      // SCONTO 20% PER MINORENNI
      prezzoBase = prezzoBase * 0.8;
    } else if (eta >= 65) {
      // SCONTO 40% PER OVER 65
      prezzoBase = prezzoBase * 0.6;
    }

    // PREZZO FINALE CON MASSIMO 2 DECIMALI
    let prezzoFinale = prezzoBase.toFixed(2);

    
    document.getElementById("prezzo").innerText = "Il prezzo totale del viaggio è: " + prezzoFinale + " €";
  }
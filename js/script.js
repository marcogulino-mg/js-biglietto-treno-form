//Seleziono tutti gli elementi del form
const kmNumber = document.getElementById("kilometer-field");
const age = document.getElementById("age-select");
const form = document.querySelector("form");

//Stampo il form tramite console.log al submit dei dati in input
form.addEventListener("submit", (e) => {
    //Blocco il submit del form
    e.preventDefault();

    //Stampo il form
    console.log(`Numero di KM inseriti: ${kmNumber.value}, fascia di età selezionata: ${age.value}`);
});
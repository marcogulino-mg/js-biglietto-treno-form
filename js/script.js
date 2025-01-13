//Seleziono tutti gli elementi del form
const userName = document.getElementById("name-field");
const kmNumber = document.getElementById("kilometer-field");
const age = document.getElementById("age-select");
const form = document.querySelector("form");
// const printRecap = document.getElementById("purchase-recap");

//Seleziono gli elementi per l'output del form
const userNameOut = document.querySelector(".full-name");
const tableTr = document.querySelector(".tbody tr"); 

//Funzione per il calcolo del prezzo finale (0,21€ al Km | 20% per under 18 e 40% per over 65)
function ticketPrice(ageUser, kilometer) {
  let price = kilometer * 0.21;

  if (ageUser === "underage") {
    price -= (price * 20) / 100;
  } else if (ageUser === "elderly") {
    price -= (price * 40) / 100;
  }

  console.log(price);
  return (Math.round(price * 100) / 100).toFixed(2);
}

//Stampo il form tramite console.log al submit dei dati in input
form.addEventListener("submit", (e) => {
  //Blocco il submit del form
  e.preventDefault();

  //Calcolo il prezzo finale
  let finalPrice = ticketPrice(age.value, kmNumber.value);

  //Stampo il form nell'HTML
  userNameOut.innerHTML = userName.value.trim();
});

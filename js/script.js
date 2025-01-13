//Seleziono tutti gli elementi del form
const userName = document.getElementById("name-field");
const kmNumber = document.getElementById("kilometer-field");
const age = document.getElementById("age-select");
const form = document.querySelector("form");
const emptyForm = document.getElementById("empty");
let typeTicket = "";

//Seleziono gli elementi per l'output del form
const userNameOut = document.querySelector(".full-name");
const tableTr = document.getElementById("recap-row");

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

//Funzione che genera un numero casuale con min e max a scelta
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Stampo il form tramite console.log al submit dei dati in input
form.addEventListener("submit", (e) => {
  //Blocco il submit del form
  e.preventDefault();

  //Calcolo il prezzo finale
  let finalPrice = ticketPrice(age.value, kmNumber.value);

  //Controllo tipo del biglietto
  if (age.value === "underage") {
    typeTicket = "Biglietto per minorenni";
  } else if (age.value === "elderly") {
    typeTicket = "Biglietto per anziani";
  } else {
    typeTicket = "Biglietto Standard";
  }

  //Stampo il form nell'HTML
  userNameOut.innerHTML = userName.value.trim();
  tableTr.innerHTML = `<td>${typeTicket}</td>
  <td>${randomNum(1, 100)}</td>
  <td>${randomNum(10000, 99999)}</td>
  <td>${finalPrice}€</td>
  `;
});

//Resetto i campi del form e l'output del form
emptyForm.addEventListener("click", () => {
  userName.value = "";
  kmNumber.value = 0;
  userNameOut.innerHTML = "";
  tableTr.innerHTML = "";
});
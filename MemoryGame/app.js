const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());
const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result ");
let Cardchosen = [];
let CardchosenIds = [];
let cardwon = [];
function createboard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute('src', "images/blank.png");
    card.setAttribute('data-id', i);
    gridDisplay.appendChild(card);
    card.addEventListener("click", flipcard);
  }
}
createboard();
function checkmatch() {
  const optionIdone = CardchosenIds[0];
  const optionIDtwo = CardchosenIds[1];
  const cards = document.querySelectorAll("img");
  console.log(cards)
  console.log("Check For Match!");
  if(optionIdone==optionIDtwo){
  cards[optionIdone[0]].setAttribute("src", "images/blank.png");
  cards[optionIdone[1]].setAttribute("src", "images/blank.png");
  if (optionIDone == optionIDtwo) alert = "You have click the same image!";
  }
  if (Cardchosen[0] == Cardchosen[1]) {
    alert("You Found A Match");
    cards[optionIdone].setAttribute("src", "images/white.png");
    cards[optionIDtwo].setAttribute("src", "images/white.png");
    cards[optionIdone].removeEventListener("click", flipcard);
    cards[optionIDtwo].removeEventListener("click", flipcard);
    cardwon.push(Cardchosen);
    console.log(cards);
  } else {
    cards[optionIdone].setAttribute("src", "images/blank.png");
    cards[optionIDtwo].setAttribute("src", "images/blank.png");
    alert("Please try again!");
  }
  resultDisplay.textContent = cardwon.length;
  Cardchosen = [];
  CardchosenIds = [];
  if (cardwon.length == cardArray.length / 2) {
    resultDisplay.textContent = "Congractulations you found them all!";
  }
}

function flipcard() {
  console.log(cardArray);
  const cardId = this.getAttribute("data-id");
  console.log("clicked", cardId);
  Cardchosen.push(cardArray[cardId].name);
  CardchosenIds.push(cardId);
  console.log(Cardchosen);
  console.log(CardchosenIds);
  this.setAttribute("src", cardArray[cardId].img);
  if (Cardchosen.length == 2) {
    setTimeout(checkmatch, 500);
  }
}

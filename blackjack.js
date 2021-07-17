
//console.log(sum)
let hasBlackJack = false
let isAlive = true;
let message;
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let firstCard = Math.floor(Math.random() * (11 - 2 + 1) + 2);
let secondCard = Math.floor(Math.random() * (11 - 2 + 1) + 2);
console.log(firstCard)
console.log(secondCard)
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]
function renderGame() {



    if (sum <= 20) {
        message = "Do you want to draw a new card?"

    }
    else if (sum === 21) {
        message = "You got blackjack"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message;
    sumEl.textContent = `Sum: ${sum}`
    cardsEl.textContent = `Cards: ${cards[0]},${cards[1]}`
}

function startGame() {
    renderGame();
}
function newGame() {
    console.log("Drawing a new card from the deck")
    let card = Math.floor(Math.random() * (11 - 2 + 1) + 2);
    cards.push(card);
    sum += card;
    renderGame();
}


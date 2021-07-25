
//console.log(sum)
let hasBlackJack = false
let isAlive = false;
let message;
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let firstCard
let secondCard
let cards = []
let sum = 0;
let playerEl = document.getElementById("player-el")


let player = {
    name: "Alexis",
    chips: 145
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
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


}
function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1;
    if (random === 1) {
        return 11;
    }
    else if (random > 10) {
        return 10;
    }
    else { return random }
}

function startGame() {
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    console.log(firstCard)
    console.log(secondCard)
    isAlive = true;
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame();
}
function newGame() {
    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card from the deck")
        let card = getRandomCard()
        cards.push(card);
        sum += card;
        renderGame();
    }
}

let hasSolvedChallenge = false
let hasHintsLeft = false
if (hasHintsLeft === false && hasSolvedChallenge === false) {
    showSolution();
}
function showSolution() {
    console.log("Showing The Solution")
}


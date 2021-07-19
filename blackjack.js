
//console.log(sum)
let hasBlackJack = false
let isAlive = true;
let message;
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let firstCard = getRandomCard()
let secondCard = getRandomCard()
console.log(firstCard)
console.log(secondCard)
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]

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
    return Math.floor(Math.random() * (11 - 2 + 1) + 2);
}

function startGame() {
    renderGame();
}
function newGame() {
    console.log("Drawing a new card from the deck")
    let card = getRandomCard()
    cards.push(card);
    sum += card;
    renderGame();
}

let hasSolvedChallenge=false
let hasHintsLeft=false
if(hasHintsLeft===false&&hasSolvedChallenge===false)
{
    showSolution();
}
function showSolution(){
    console.log("Showing The Solution")
}
let firstCard = Math.floor(Math.random() * (11 - 2 + 1) + 2);
let secondCard = Math.floor(Math.random() * (11 - 2 + 1) + 2);
console.log(firstCard)
console.log(secondCard)
let sum = firstCard + secondCard
console.log(sum)
let hasBlackJack = false
let isAlive=true;
let message;
if (sum <= 20){
   message= console.log("Do you want to draw a new card?")
    isAlive=false;
}
else if (sum === 21) {
    message=console.log("woohoo! You got blackjack")
    hasBlackJack = true
}
else
    {message=console.log("You're out of the game")
isAlive=false
    }
console.log(hasBlackJack)

console.log(message)




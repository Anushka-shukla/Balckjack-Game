// player object. has two keys, name and chips, and set their values
let player = {
    name: "Anushka",
    chips: 145
}

let cards = [] // array -ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// or using query selector - let sumEl = document.querySelector("#sum-el")

let cardEl = document.getElementById("card-el")

console.log(cards)

let playerEl = document.getElementById("player-el")
console.log(playerEl)
playerEl.textContent = player.name + ": $" + player.chips

// this function return a random number between 1 and 13
// Ace as 11, J,K,Q as 10
function getRandomCard() {
    // Math.random gives -: 0 - 5.99999 so Math.random * 13 : 0.00- - 12.999
    // Math.floor gives the floor value eg - 5(if 5.999)

    let randomNo = Math.floor(Math.random() * 13) + 1
    // if 1     -> return 11
    // if 11-13 -> return 10
    if (randomNo > 10) {
        return 10
    } else if (randomNo === 1) {
        return 11
    } else {
        return randomNo
    }
}

// Create a new function called startGame() that calls renderGame()
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "

    // for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "

    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"


    } else if (sum === 21) {
        message = "You've got balckjack!"
        hasBlackJack = true


    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message


}

function newCard() {
    console.log("Drawing a new card from the deck!")
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        // Push the card to the cards array
        cards.push(card)
        renderGame()
    }

}


// 1. Set up the page

// Make player 1, player 2 isn't needed as it's only 2 player
let player1 = true

// Show whos turn it is
const whosTurn = document.querySelector('#player')

// Make new variable for the boxes
const boxes = document.querySelectorAll('section div')

// Make new variable to display who won
const outcome = document.querySelector('.outcome')

// Make new variable for the button
const resetButton = document.querySelector('button')

// Make button refresh the page when clicked
resetButton.addEventListener("click", function() {
    window.location.reload()
})

// Make new variable for h2 for the style points
const headerTwo = document.querySelector('h2')

// get all rows
const row1 = document.querySelectorAll('.row1')
const row2 = document.querySelectorAll('.row2')
const row3 = document.querySelectorAll('.row3')

// get all columns
const col1 = document.querySelectorAll('.col1')
const col2 = document.querySelectorAll('.col2')
const col3 = document.querySelectorAll('.col3')

// Get all Diagonals
const diag1 = document.querySelectorAll('.diag1')
const diag2 = document.querySelectorAll('.diag2')

// Record game over
let gameOver = null

// Count number of clicks
let counter = 0

// Get the values of any section of boxes
function getValues(elements) {
    let values = [];

    // Loop through the elements, then push there text content into the values array
    for( let i = 0; i < elements.length; i++) {
        values.push(elements[i].textContent)
    }

    // Make it return values so we can use the output
    return values
}

// Check if someone won and congradulate them
function didSomeoneWin(elements) {

    let whoWon = ''

    for (let i = 0; i < boxes.length; i++) {

        // Use the values of each element and join them into a string, then use that to check if someones won ('XXX' or 'OOO').
        if (getValues(elements).join("") == "XXX") {

            // If someone wins: loop through the elements and visually show someone's won
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.animationName = 'flashing'
                headerTwo.style.animationName = 'flashing'

                // Set whoWon to whoevers won
                whoWon = 'Player 1'
            }
        } else if (getValues(elements).join("") == "OOO") {
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.animationName = 'flashing'
                headerTwo.style.animationName = 'flashing'
                whoWon = 'Player 2'
            }
        } 
        
        // If one of the players wins then show it in the outcome 
        if (whoWon === 'Player 1') {
            outcome.innerText = whoWon + " Won The Game!"

            // Keep whos turn it is as the player who won instead of switching
            whosTurn.innerHTML = '1'

            // Set game over to true
            gameOver = true

            // break the loop
            break

        } else if (whoWon === 'Player 2') {
            outcome.innerText = whoWon + " Won The Game!"
            whosTurn.innerHTML = '2'
            gameOver = true
            break
        } 
    }
}

// 2. When the user clicks a box: Fill the box with either a O or X symbol
//  -- loop through all boxes
for (let i = 0; i < boxes.length; i++) {

    let currentBox = boxes[i]
    
    // Make all boxes clickable
    currentBox.addEventListener('click', function rules(event) {

        // Make sure you can only click a box while the game is in play
        if (!gameOver) {

            // Make sure boxes can't be clicked twice
            event.target.removeEventListener("click", rules)

            // When each player clicks:
            if (player1) {

                // Keep track of how many times the players have clicked
                counter++

                //  -- add X to the box clicked
                event.target.innerText = 'X'

                //  -- switch player and update who's turn it is
                player1 = false
                whosTurn.innerHTML = '2'

            } else {
                counter++
                event.target.innerText = 'O'
                player1 = true
                whosTurn.innerHTML = '1'
            }
            
            // Check if a player got 3 in a line and congradulate them - Find a way to put this into a loop
            didSomeoneWin(row1)
            didSomeoneWin(row2)
            didSomeoneWin(row3)
            didSomeoneWin(col1)
            didSomeoneWin(col2)
            didSomeoneWin(col3)
            didSomeoneWin(diag1)
            didSomeoneWin(diag2)

            // If every box is full tell players it's a tie
            if (counter == 9 && !gameOver) {
                outcome.innerText = "It's a Tie!"
            }
        }
    })
}   

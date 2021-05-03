// 1. Set up the page
    //  -- Show the board
    //  -- Show who's turn it is
// Make player 1 and 2
let player1 = true
let player2 = null
const whosTurn = document.querySelector('#player')
// Make new variable for the boxes
const boxes = document.querySelectorAll('section div')
// Make new variable for the button
const resetButton = document.querySelector('button')
// Make button refresh the page when clicked
resetButton.addEventListener("click", function() {
    window.location.reload()
})
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

let gameOver = null
let counter = 0

// 2. When the user clicks a box: Fill the box with either a O or X symbol

// Get the values of any section of boxes
function getValues(elements) {
    let values = [];

    for( let i = 0; i < elements.length; i++) {
        values.push(elements[i].textContent)
    }
    return values
}

// Check if someone won adn congradulate them
function didSomeoneWin(elements) {
    let whoWon = ''

    for (let i = 0; i < boxes.length; i++) {
        if (getValues(elements).join("") == "XXX") {
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor = 'green'
                whoWon = 'Player 1'
            }
        } else if (getValues(elements).join("") == "OOO") {
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor = 'green'
                whoWon = 'Player 2'
            }
        } 
        
        if (whoWon === 'Player 1') {
            alert(whoWon + " Won the game!")
            gameOver = true
            break
        } else if (whoWon === 'Player 2') {
            alert(whoWon + " Won the game!")
            gameOver = true
            break
        } 
    }
}

// Make all boxes clickable

for (let i = 0; i < boxes.length; i++) {

    let currentBox = boxes[i]
    
    currentBox.addEventListener('click', function rules(event) {

        event.target.removeEventListener("click", rules)
    // When each player clicks:
    //  -- add X to the box clicked
    //  -- switch player and update who's turn it is
        if (player1 === true) {
            counter++
            event.target.innerText = 'X'
            whosTurn.innerHTML = '2'
            player1 = false
            player2 = true 
        } else if (player1 != true) {
            counter++
            event.target.innerText = 'O'
            whosTurn.innerHTML = '1'
            player2 = false
            player1 = true
        }
        
        // Check if a player won and congradulate them
        didSomeoneWin(row1)
        didSomeoneWin(row2)
        didSomeoneWin(row3)
        didSomeoneWin(col1)
        didSomeoneWin(col2)
        didSomeoneWin(col3)
        didSomeoneWin(diag1)
        didSomeoneWin(diag2)

        // If someone won make the boxes unclickable
        if (counter == 9 && gameOver != true) {
            alert("It's a tie!")
        }
    })
}   


// 3. Check if any user has won
    

// function getRowValues(rowElements) {
//     let values = [];

//     for( let i = 0; i < rowElements.length; i++) {
//         values.push(rowElements[i].textContent)
//     }
//     return values
// }
//  -- check if every box in a row has the same value
// if (getRowValues(row1) === player1Wins) {
//     row1.style.backgroundColor = 'green'
//     alert ("player 1 Wins!")
// } else if (getRowValues(row1) === player2Wins) {
//     row1.style.backgroundColor = 'green'
//     alert ("player 2 Wins!")
// }
        //  -- if thats true:
            //  -- Highlight the boxes
            //  -- congradulate the player


    // Get the values of columns 1-3 everytime a box in a column is clicked

        //  -- check if every box in a column has the same value
        //  -- if it's true: 
            //  -- Highlight the boxes
            //  -- congradulate the player

    // Get the values of diagonals 1 and 2 everytime a box diagonally is clicked
        //  -- check if every box has the same value
        //  -- if it's true:
            //  -- Highlight the boxes
            //  -- congradulate the player

            
// 4. Check if no ones won
    //  -- Record how many boxes have values in them
        //  -- if all 9 boxes have a value:
            //  -- alert the players it's a tie
            //  -- prompt them to restart (Maybe restart button starts flashing)



// 5. Restart the game 
    //  -- Add button called 'restart' When pressed:
        //  -- Clear the board 




// function getDiagonalValues(rowElements) {
//     let newArray = [];

//     for( let i = 0; i < rowElements.length; i++) {
//         newArray.push(rowElements[i].textContent)
//     }
//     return newArray
// }

// let row1Values = getRowValues(document.querySelectorAll('.row1'))
// let row2Values = getRowValues(document.querySelectorAll('.row2'))
// let row3Values = getRowValues(document.querySelectorAll('.row3'))


// checkIfUserWon()

// function checkIfUserWon() {
//     if (doTheyHaveThreeInARow()) {
//         console.log('You win')
//     } else {
//         // Keep Playing
//     }
// }

// function doTheyHaveThreeInARow() {
//     if (doTheyHaveThreeInARowInRow1()
//         || doTheyHaveThreeInARowInRow2()
//         || doTheyHaveThreeInARowInRow3()){

//     }
// }


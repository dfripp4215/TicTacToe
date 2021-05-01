// 1. Set up the page
    //  -- Show the board
    //  -- Show who's turn it is


// 2. When the user clicks a box: Fill the box with either a O or X symbol

    // When player 1 clicks:
    //  -- add X to the box clicked
    //  -- switch player and update who's turn it is

    // When player 2 clicks:
    //  -- add O to the box clicked
    //  -- switch player and update who's turn it is


// 3. Check if any user has won
    // Get the values of rows 1-3 everytime a box in a row is clicked
        //  -- check if every box in a row has the same value
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


// 4. Restart the game 
    //  -- Add button called 'restart' When pressed:
        //  -- Clear the board 


function getRowValues(rowElements) {
    let newArray = [];

    for( let i = 0; i < rowElements.length; i++) {
        newArray.push(rowElements[i].textContent)
    }
    return newArray
}

function getColumnValues(columnElements) {
    let newArray = [];

    for( let i = 0; i < columnElements.length; i++) {
        newArray.push(columnElements[i].textContent)
    }
    return newArray
}

function getDiagonalValues(rowElements) {
    let newArray = [];

    for( let i = 0; i < rowElements.length; i++) {
        newArray.push(rowElements[i].textContent)
    }
    return newArray
}

let row1Values = getRowValues(document.querySelectorAll('.row1'))
let row2Values = getRowValues(document.querySelectorAll('.row2'))
let row3Values = getRowValues(document.querySelectorAll('.row3'))


checkIfUserWon()

function checkIfUserWon() {
    if (doTheyHaveThreeInARow()) {
        console.log('You win')
    } else {
        // Keep Playing
    }
}

function doTheyHaveThreeInARow() {
    if (doTheyHaveThreeInARowInRow1()
        || doTheyHaveThreeInARowInRow2()
        || doTheyHaveThreeInARowInRow3()){

    }
}


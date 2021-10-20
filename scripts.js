let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
nextPlayer = prompt("Start as X or O?");
if (nextPlayer != 'X' && nextPlayer != '0')
    nextPlayer = 'X';

// use the value stored in the nextPlayer variable to indicate who the next player is
let nextPlayerlb = document.getElementById('next-lbl');
nextPlayerlb.textContent = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    let cells = document.querySelectorAll('td');
    let htmlAdding = <button>[ ]</button>;
    for(let x = 0; x < cells.length; x++)
    {
        cells[x].innerHTML = htmlAdding;
    }
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    let eventTarget = event.target;
    eventTarget.textContent = '[' + nextPlayer + ']';
    evventTarget.setAttribute('disabled','disabled');
    if(nextPlayer == 'X')
        nextPlayer = '0';
    else
        nextPlayer = 'X';
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
        
        let endGamelbl = document.querySelector('#game-over-lbl');
    endGamelbl.innerHTML = "<h1>Game Over</h1>"
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
  
}

function isGameOver()
{
    
    let buttonArray = document.querySelectorAll('button');
    let disabledCount = 0l
    
    for(let z =0; z < buttonArray.length; z++)
    {if(buttonArray[z].disabled)
        disabledCount++;
    }
    if (disabledCount == buttonArray.length)
        return true;
    else
        return false;
    // This function returns true if all the buttons are disabled and false otherwise 
   
}

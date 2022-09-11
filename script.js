// This is a program to play rock paper scissors in browser console

// Print a welcome message and short brief of the game
console.log('Hello, and welcome to The Odin Project: Rock, Paper, Scissors!');
console.log('You will play against your own computer, and it definitely pretty smart, so choose carefully!');

//--First Feature: A game of rock paper scissor one time only

// Create an array to store rock, paper, and scissor text
// Create a variable to store player choice
// Create a variable to store random generated computer choice
// Create an array variable to store accumulative win
// Create a funcion to check if player input is rock, paper, or scissor. If not, re-prompt player.
// Create a function to generate computer choice and store it on computer choice variable
// Create a function to compare player and computer choice and return who win

//--Second Feature: A game of rock paper scissors on loop of five times and compare who won
// Create a function to execute five game and return the result into score array 
    // Create a for loop 5 times to game and print the result of each round
        // A while loop continuesly prompt and checking if player choice is not valid
        // Calling function to generate computer choice
        // A switch calling function that decide who win and print information about it
        // Reset player choice variable

//--First Feature: A game of rock paper scissor one time only
// Create an array to store rock, paper, and scissor text
const validChoices = ["rock", "paper", "scissor"];

// Create a variable to store player choice
let playerChoice;

// Create a variable to store random generated computer choice
let computerChoice;

// Create an array variable to store accumulative win
let score;

// Create a funcion to check if player input is rock, paper, or scissor. If not, re-prompt player.
function testChoice (choice) {
    let testing = validChoices.includes(choice);
    return testing;
}

// Create a function to generate computer choice and store it on computer choice variable

function randomChoice(items) {
    return items[Math.floor(Math.random()*items.length)];
}

// Create a function to compare player and computer choice and return who win then print into console the computer and player choices and who win
function playRound(playerChoice, computerChoice){
    if (
        (playerChoice == 'rock' && computerChoice == 'scissor') ||
        (playerChoice == 'paper' && computerChoice == 'rock') ||
        (playerChoice == 'scissor' && computerChoice == 'paper')
    ) {return "Player";}
    
    else if (
        (playerChoice == 'rock' && computerChoice == 'paper') ||
        (playerChoice == 'paper' && computerChoice == 'scissor') ||
        (playerChoice == 'scissor' && computerChoice == 'rock')
    ) {return "Computer";}

    else if (
        (playerChoice == 'rock' && computerChoice == 'rock') ||
        (playerChoice == 'paper' && computerChoice == 'paper') ||
        (playerChoice == 'scissor' && computerChoice == 'scissor')
    ) {return "Draw";}
}

//--Second Feature: A game of rock paper scissors on loop of five times and compare who won
// Create a function to execute five game and return the result into score array
function game () {

    let playerWin = 0;
    let computerWin = 0;
    // Create a for loop 5 times to game and print the result of each round
    for (i = 0; i <5 ; i++) {

        // A while loop continuesly prompt and checking if player choice is not valid
        while (testChoice(playerChoice) == false) {
            playerChoice = prompt("Rock, Paper, or Scissor?").toLowerCase();
        }

        // Calling function to generate computer choice
        computerChoice = randomChoice(validChoices);

        // A switch calling function that decide who win and print information about it
        switch (playRound(playerChoice, computerChoice)) {
            case "Player":
                console.log(`Player choose ${playerChoice}, Computer choose ${computerChoice}. Player win!`);
                playerWin += 1;
                break;
            case "Computer":
                console.log(`Player choose ${playerChoice}, Computer choose ${computerChoice}. Computer win!`);
                computerWin += 1;
                break;
            case "Draw":
                console.log(`Both Player and Computer choose ${playerChoice}. Its a Draw!`);
                break;
        }
        // Reset player choice variable
        playerChoice = false;
    }

    return [playerWin, computerWin];
}

score = game()
console.log (score[0]);
console.log (score[1]);
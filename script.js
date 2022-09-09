// This is a program to play rock paper scissors in browser console

// Print a welcome message and short brief of the game
console.log('Hello, and welcome to The Odin Project: Rock, Paper, Scissors!')
console.log('You will play against your own computer, and it definitely pretty smart, so choose carefully!')

// First Feature: A game of rock paper scissor one time only

// Create an array to store rock, paper, and scissor text
// Create a variable to store player choice. 
// Create a variable to store random generated computer choice
// Create a function to prompt then store player choice variable. It need to be case insensitive so turn it to lower-case first.
// Create a funcion to check if player input is rock, paper, or scissor. If not, re-prompt player.
// Create a function to generate computer choice and store it on computer choice variable
// Create a function to compare player and computer choice and return who win
// Create a while loop to re-prompt if player input is valid

//Second Feature: A game of rock paper scissors on loop of five times and compare who won



// First Feature: A game of rock paper scissor one time only

// Create an array to store rock, paper, and scissor text
const validChoices = ["rock", "paper", "scissor"];

// Create a variable to store player choice.
let playerChoice;

// Create variable to store player choice validity.
let choiceValidity = false;

// Create a variable to store random generated computer choice
let computerChoice;

// Create a function to prompt then store player choice variable. It need to be case insensitive so turn it to lower-case first.
function getChoice () {
    console.log("Rock, Paper, or Scissor?");
    return String(prompt()).toLowerCase();
    
}

//playerChoice = getChoice();
//console.log(playerChoice);

// Create a funcion to check if player input is rock, paper, or scissor. If not, re-prompt player.

function testChoice (choice) {
    let testing = validChoices.includes(choice);
    return testing;
}

//choiceValidity = testChoice(playerChoice);
//console.log(choiceValidity);

// Create a function to generate computer choice and store it on computer choice variable

function randomChoice(items) {
    return items[Math.floor(Math.random()*items.length)];
}

//computerChoice = randomChoice(validChoices);
//console.log(computerChoice);

// Create a function to compare player and computer choice and return who win then print into console the computer and player choices and who win

function decideWin(playerChoice, computerChoice){
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

    else {return "Draw";}
}

// Create a while loop to re-prompt if player input is valid

while (choiceValidity == false) {
    console.log("Please choice a valid response!");
    playerChoice = getChoice();
    choiceValidity = testChoice(playerChoice);
}

computerChoice = randomChoice(validChoices);
console.log("Player choose " + playerChoice);
console.log("Computer choose " + computerChoice);
console.log("Who win? It was " + decideWin(playerChoice, computerChoice));
// This is a program to play rock paper scissors in browser console

//--First Feature: A game of rock paper scissor one time only
// Create an array to store rock, paper, and scissor text
const validChoices = ["rock", "paper", "scissor"];

// Create a variable to store player choice
let playerChoice;

// Create a variable to store random generated computer choice
let computerChoice;

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
// A switch calling function that decide who win, add the result to game counts, and return information about it
function gameLoop() {
    switch (playRound(playerChoice, computerChoice)) {
        case "Player":
            playerWin += 1;
            return `Player choose ${playerChoice}, Computer choose ${computerChoice}. Player win!`;
            break;
        case "Computer":
            computerWin += 1;
            return `Player choose ${playerChoice}, Computer choose ${computerChoice}. Computer win!`;
            break;
        case "Draw":
            drawCount += 1;
            return `Both Player and Computer choose ${playerChoice}. Its a Draw!`;
            break;
    }
}


//--GUI Feature: A game of rock paper scissors on loop of five times and compare who won
// Add event listner to handle input on  buttons for player choices. Also, act as game TRIGGER.
const buttons = document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener('click', updateGame);
}

//Set varible for game counts
let gameRound = 0;
let playerWin = 0;
let computerWin = 0;
let drawCount = 0;

// Set Varable for DOM manipulation
const gameRoundText = document.querySelector('.round');
const playerWinText = document.querySelector('.player-win');
const computerWinText = document.querySelector('.computer-win');
const drawCountText = document.querySelector('.draw');
const resultText = document.querySelector('.result');


// A function to execute game and all of DOM manipulation
function updateGame() {
    //set player choice into then check who won
    playerChoice =  this.dataset.key;
    computerChoice = randomChoice(validChoices);
    resultText.textContent = gameLoop();

    //Update game round counts
    gameRound += 1;
    gameRoundText.textContent = `Game Round: ${gameRound}`;
    playerWinText.textContent = `Player Win: ${playerWin}`;
    computerWinText.textContent = `Computer Win: ${computerWin}`;
    drawCountText.textContent = `Draw Count: ${drawCount}`;
}

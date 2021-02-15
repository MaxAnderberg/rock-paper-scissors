const rockPaperScissorList = ["rock", "paper", "scissors"]
let userScore = 0;
let computerScore = 0;

const rockButton =  document.getElementById("rock")
const paperButton =  document.getElementById("paper")
const scissorsButton =  document.getElementById("scissors")

// create a function conputer selection which uses the random function to select one option in the list
function computerPlay() {
    let listLength = rockPaperScissorList.length
    return rockPaperScissorList[getRandomInt(listLength)]
}

// randomize the computer selection
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// main logic for handling winning and losing a round 
function playRound(user, computer) {
    // check if the user said either, rock, paper or scissor
    if (rockPaperScissorList.includes(user)) {
        if (user === computer) {
            return document.getElementById("playedhand").innerHTML = (`Tie: Both said ${user}.`) 
        } else if (user === "rock") {
            if (computer === "paper") {
                increaseComputerScore();
                return document.getElementById("playedhand").innerHTML = (`You lose: Paper beats Rock.`) // computer wins
            } else if (computer === "scissors") {
                increaseUserScore();
                return document.getElementById("playedhand").innerHTML = (`You win: Rock beats Scissors`) // user wins
            }
        } else if (user === "paper") {
            if (computer === "rock") {
                increaseUserScore();
                return document.getElementById("playedhand").innerHTML = (`You win: Paper beats Rock.`); // user wins
            } else if (computer === "scissors") {
                increaseComputerScore();
                return document.getElementById("playedhand").innerHTML = (`You lose: Scissors beats Paper`); // computer wins
            }
        } else if (user === "scissors") {
            if (computer === "paper") {
                increaseUserScore();
                return document.getElementById("playedhand").innerHTML = (`You win: Scissors beats Paper.`); // user wins
            } else if (computer === "rock") {
                increaseComputerScore();
                return document.getElementById("playedhand").innerHTML = (`You lose: Rock beats scissors`); // computer wins
            }
        }

    } else {
        console.log("This is the else you said something that is not useful.")
    }
}

// get the style from the user input and makes it lower case
function askUser(value) {
    return value;
}

function displayUserScore() {
    return userScore;
}

function displayComputerScore() {
    return computerScore;
}

function increaseComputerScore() {
    computerScore++;
}

function increaseUserScore() {
    userScore++;
}

function disablePlayButtons(){
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function enablePlayButtons(){
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

function updateGameInfo() {
    document.getElementById("scoreText").innerHTML = `Computer: ${displayComputerScore()} - User: ${displayUserScore()}`;
    if(computerScore >= 5){
        document.getElementById("winLose").innerHTML = `My condolences, the computer won.`;
        disablePlayButtons();

    } else if (userScore >= 5){
        document.getElementById("winLose").innerHTML = `Congratulations, you won!`;
        disablePlayButtons();
    }
}
    /* 
    add event listeners for the buttons, 'rock', 'paper', 'scissors', and 'play again'
    with each button click update the game info
    */
    rockButton.addEventListener("click", function () {
        playRound(askUser("rock"), computerPlay());
        updateGameInfo();
 
    });

    paperButton.addEventListener("click", function () {
        playRound(askUser("paper"), computerPlay());
        updateGameInfo();
    });

    scissorsButton.addEventListener("click", function () {
        playRound(askUser("scissors"), computerPlay());
        updateGameInfo();
    });

// reset the score
document.getElementById("playagain").addEventListener("click", function () {
    userScore = 0;
    computerScore = 0;
    document.getElementById("winLose").innerHTML = `Who will win?`;
    document.getElementById("playedhand").innerHTML = (`Let the games begin`);

    enablePlayButtons();
    updateGameInfo()
});
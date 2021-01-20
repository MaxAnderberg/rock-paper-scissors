const rockPaperScissorList = ["rock", "paper", "scissors"] // different styles
let userScore = 0;
let computerScore = 0;
// create a function conputer selection which uses the random function to select one option in the list
function computerPlay() {
    let listLength = rockPaperScissorList.length
    return rockPaperScissorList[getRandomInt(listLength)]
}
// randomize the computer selection
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// play round function - this function is going to call the computer selection and handle the logic for winning and loosing and tie
// TODO: REFACTOR THE CODE AND MAKE SMALLER FUNCTIONS THAT WILL DEAL WITH THE LOGIC BEHIND THE GAME
function playRound(user, computer) {
    // check if the user said either, rock, paper or scissor
    if (rockPaperScissorList.includes(user)) {
        if (user === computer) {
            return "You both said " + user + ". So that is a tie."
        } else if (user === "rock") {
            if (computer === "paper") {
                increaseComputerScore();
                return "You lose: Paper beats Rock." // computer wins
            } else if (computer === "scissors") {
                increaseUserScore();
                return "You win: Rock beats Scissors" // user wins
            }
        } else if (user === "paper") {
            if (computer === "rock") {
                increaseUserScore();
                return "You win: Paper beats Rock."; // user wins
            } else if (computer === "scissors") {
                increaseComputerScore();
                return "You lose: Scissors beats Paper"; // computer wins
            }
        } else if (user === "scissors") {
            if (computer === "paper") {
                increaseUserScore();
                return "You win: Scissors beats Paper."; // user wins
            } else if (computer === "rock") {
                increaseComputerScore();
                return "You lose: Rock beats scissors"; // computer wins
            }
        }
    } else {
        console.log("This is the else you said something that is not useful.")
    }
}

// get the style from the user input and makes it lower case
function askUser() {
    return prompt("Rock, Paper, Scissors?").toLowerCase();
}

function increaseComputerScore() {
    computerScore++;
}

function increaseUserScore() {
    userScore++;
}

function game() {
    while (userScore < 5 && computerScore < 5) {
        const userSelection = askUser();
        const computerSelection = computerPlay();
        console.log(playRound(userSelection, computerSelection))
        console.log("current score is - User: " + userScore + " and Computer: " + computerScore);
    }
}
game();

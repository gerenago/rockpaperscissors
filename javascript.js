//computer randomly selects rock paper or scissors
var choices = [
    "rock",
    "paper",
    "scissors"
];
let computerSelection;

//input from user
let lowerCaseSelection;
function playRound (computerSelection, lowerCaseSelection) {

    //user value is compared to computer value
    //if value is same, tie
    if (computerSelection == lowerCaseSelection) {
        const roundResult = document.querySelector('.roundResult');
        roundResult.textContent = "It's a tie!";
        //console.log ("It's a tie!")

    }
    // if values are different and player wins, print message
    else if ((computerSelection == "rock" && lowerCaseSelection == "paper") 
    || (computerSelection == "paper" && lowerCaseSelection == "scissors")
    || (computerSelection == "scissors" && lowerCaseSelection == "rock")) {
        const roundResult = document.querySelector('.roundResult');
        roundResult.textContent = `You win! ${lowerCaseSelection} beats ${computerSelection}!`;
        //console.log (`You win! ${lowerCaseSelection} beats ${computerSelection}!`)
            //if win, add 1 to score
            userScore ++
    }
    // if anything else (not a tie and not win) player loses, print message
    else {
        const roundResult = document.querySelector('.roundResult');
        roundResult.textContent = `You lose! ${computerSelection} beats ${lowerCaseSelection}`;
        //console.log (`You lose! ${computerSelection} beats ${lowerCaseSelection}`)
        computerScore ++
    }
    //output is Lose/Win/Tie
}
//keep score
let userScore = 0
let computerScore = 0
//play multiple round game
//function game () {
//count # rounds played
//if # less than 5, play another round
    
   // for (let i=0; i<5; i++) {
        //get selection from user
       // let userSelection = prompt("rock, paper, or scissors?");
        //transition to lowercase to compare
       // let lowerCaseSelection = userSelection.toLowerCase()
        //get selection from computer
       // let computerSelection = choices[Math.floor(Math.random()*choices.length)];
        //play the round with above selections
        //playRound (computerSelection, lowerCaseSelection)

   // }
    //if the user wins more times than the # of rounds - their score, they win
    //if (userScore > computerScore) {
        //console.log ("You won the game!")
    //}
    //otherwise the computer wins
    //else {
        //console.log ("You lost the game!")
    //}

//}
const rock = document.querySelector('.rock');
rock.addEventListener("click", () => {
    lowerCaseSelection = "rock"
    computerSelection = choices[Math.floor(Math.random()*choices.length)]
    playRound(computerSelection, lowerCaseSelection)
    const score = document.querySelector('.score');
    score.textContent = `The score is: User = ${userScore}, Computer = ${computerScore}`;
    if (userScore == 5 || computerScore == 5) {
        if (userScore > computerScore) {
            const endResult = document.querySelector('.endResult');
            endResult.textContent = `You won the game!`;
        }
        else {
            const endResult = document.querySelector('.endResult');
            endResult.textContent = `You lost the game!`;
        }
    }
});

const paper = document.querySelector('.paper');
paper.addEventListener("click", () => {
    lowerCaseSelection = "paper"
    computerSelection = choices[Math.floor(Math.random()*choices.length)]
    playRound(computerSelection, lowerCaseSelection)
    const score = document.querySelector('.score');
    score.textContent = `The score is: User = ${userScore}, Computer = ${computerScore}`;
    if (userScore == 5 || computerScore == 5) {
        if (userScore > computerScore) {
            const endResult = document.querySelector('.endResult');
            endResult.textContent = `You won the game!`;
        }
        else {
            const endResult = document.querySelector('.endResult');
            endResult.textContent = `You lost the game!`;
        }
    }
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener("click", () => {
    lowerCaseSelection = "scissors"
    computerSelection = choices[Math.floor(Math.random()*choices.length)]
    playRound(computerSelection, lowerCaseSelection)
    const score = document.querySelector('.score');
    score.textContent = `The score is: User = ${userScore}, Computer = ${computerScore}`;
    if (userScore == 5 || computerScore == 5) {
        if (userScore > computerScore) {
            const endResult = document.querySelector('.endResult');
            endResult.textContent = `You won the game!`;
        }
        else {
            const endResult = document.querySelector('.endResult');
            endResult.textContent = `You lost the game!`;
        }
    }
});

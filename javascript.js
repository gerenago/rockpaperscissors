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
        console.log ("It's a tie!")
    }
    // if values are different and player wins, print message
    else if ((computerSelection == "rock" && lowerCaseSelection == "paper") 
    || (computerSelection == "paper" && lowerCaseSelection == "scissors")
    || (computerSelection == "scissors" && lowerCaseSelection == "rock")) {
            console.log (`You win! ${lowerCaseSelection} beats ${computerSelection}!`)
            //if win, add 1 to score
            userScore ++
    }
    // if anything else (not a tie and not win) player loses, print message
    else {
        console.log (`You lose! ${computerSelection} beats ${lowerCaseSelection}`)
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
const rock = document.querySelector('#rock');
rock.addEventListener("click", selectRock {
    lowerCaseSelection = "rock"
    computerSelection = choices[Math.floor(Math.random()*choices.length)]
    playRound(computerSelection, lowerCaseSelection)
});

const paper = document.querySelector('#paper');
paper.addEventListener("click", selectPaper(e) {
    lowerCaseSelection = "paper"
    computerSelection = choices[Math.floor(Math.random()*choices.length)]
    playRound(computerSelection, lowerCaseSelection)
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener("click", selectScissors (e) {
    lowerCaseSelection = "scissors"
    computerSelection = choices[Math.floor(Math.random()*choices.length)]
    playRound(computerSelection, lowerCaseSelection)
});
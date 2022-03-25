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
    }
    // if anything else (not a tie and not win) player loses, print message
    else {
        console.log (`You lose! ${computerSelection} beats ${lowerCaseSelection}`)
    }
    //output is Lose/Win/Tie
}
//play multiple round game
function game () {
//count # rounds played
//if # less than 5, play another round
    
    for (let i=0; i<5; i++) {
        let userSelection = prompt("rock, paper, or scissors?");
        let lowerCaseSelection = userSelection.toLowerCase()
        let computerSelection = choices[Math.floor(Math.random()*choices.length)];
        playRound (computerSelection, lowerCaseSelection)

    }
//if # = 5, end game, report winner
//count score
//user #, computer (rounds-user #)
//if user wins, +1 to userWin
//if user loses, +0 to userWin
//if user ties, +0 to userWin
}

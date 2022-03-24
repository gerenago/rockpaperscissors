const computerSelection = computerPlay ();
function computerPlay () {
    var choices = [
        "rock",
        "paper",
        "scissors"
    ];
    return choices[Math.floor(Math.random()*choices.length)];
}
const lowerCaseSelection = "rock";

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


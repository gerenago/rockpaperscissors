function playRound () {
//user inputs variation of rock/paper/scissors
    userPlay ()
    computerPlay ()
    function userPlay () {
        let userSelection = prompt ("rock, paper, or scissors?");
        let lowerCaseSelection = userSelection.toLowerCase();
        //If input is viable, return value, otherwise repeat
        if (lowerCaseSelection == "rock" || lowerCaseSelection == "paper" || lowerCaseSelection == "scissors") {
            return lowerCaseSelection
            }
            else {
                userPlay ();
                
        }
        
    }

    //computer randomly selects rock/paper/scissors
    function computerPlay () {
        var gameOptions = [
            "rock",
            "paper",
            "scissors"
        ];
        let computerSelection = gameOptions[Math.floor(Math.random()*gameOptions.length)];
        return computerSelection
    }

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

//user inputs variation of rock/paper/scissors
function userPlay () {
    let userSelection = prompt ("rock, paper, or scissors?");
    let lowerCaseSelection = userSelection.toLowerCase();
    return lowerCaseSelection
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
//if value is different, check type
//if computer rock, user paper = win
//if computer rock, user scissors = lose
//if computer paper, user rock = lose
//if computer paper, user scissors = win
//if computer scissors, user rock = win
//if computer scissors, user paper = lose
//output is Lose/Win/Tie
//
// computerPlay to make the computer randomly play: rock, paper, or scissors.
function computerPlay() {
    const choice = ["ROCK", "PAPER", "SCISSORS"];
   return choice[Math.floor(Math.random() * choice.length)];
}

/* Function that plays a round of the game
    Takes the player's selection of "Rock", "Paper", or "Scissors".
        Makes the playerSelection argument all caps to remove case sensitivity
    Takes the computer's selection
    Compares the player's choice to the computer's choice and chooses a winner
        Rock beats Scissors
        Scissors beats Paper
        Paper beats Rock
*/
function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    // Compares playerSelection to computerSelection
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") || 
    (playerSelection === "PAPER" && computerSelection === "ROCK")) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else {
        console.log(`You lose! ${playerSelection} loses against ${computerSelection}!`);
    }
}
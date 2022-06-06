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
        return;
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") || 
    (playerSelection === "PAPER" && computerSelection === "ROCK")) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return "win";
    } else {
        console.log(`You lose! ${playerSelection} loses against ${computerSelection}!`);
        return "lose";
    }
}

/* Function that plays a 5 round game
    Keeps track of the player's wins and losses
    Declares a winner at the end

    Initialize a wins variable to track the number of times the player wins
    Initialize a losses variable to track the number of losses the player has
    FOR loop to play the game for 5 rounds
        Prompts the user with "Please type in your selection: rock, paper, or scissors"
        Runs playRound() and stores the result in a variable result (1 for winning, 0 for losing)
        IF to check if round is won or lost
            wins++ if result === 1
            losses++ if result === 0
    IF wins > losses: player wins
    ELSE IF losses < wins: computer wins
    ELSE: it's a tie
*/

function game() {
    let wins = 0;
    let losses = 0;

    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Please type in your selection: rock, paper, or scissors");
        let results = playRound(playerSelection, computerPlay());
        if (results === "win") {
            wins++;
        } else if (results === "lose") {
            losses++;
        }
    }

    if (wins > losses) {
        console.log(`The final score is ${wins} to ${losses}. You win!`);
    } else if (wins < losses) {
        console.log(`The final score is ${wins} to ${losses}. You lose!`);
    } else {
        console.log(`The final score is ${wins} to ${losses}. Too bad, it's a tie!`);
    }
}

game();
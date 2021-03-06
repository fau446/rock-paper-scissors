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

// Buttons
let wins = 0;
let losses = 0;

const score = document.querySelector('#score');

const selections = document.querySelectorAll('.selection');
selections.forEach((selection) => {
    selection.addEventListener('click', () => {
        let results = playRound(selection.textContent, computerPlay());
        if (results === "win") {
            wins++;
        } else if (results === "lose") {
            losses++;
        }

        score.textContent = `Wins: ${wins} Losses: ${losses}`;

        if (wins === 5 || losses === 5) {
            if (wins === 5) {
                score.textContent = `The final score is ${wins} to ${losses}. You win!`;
            } else if (losses === 5) {
                score.textContent = `The final score is ${wins} to ${losses}. You lose!`;
            }
            const game = document.querySelector('#game');
            const reset = document.createElement('button');
            reset.textContent = "Play Again!";
            reset.addEventListener('click', () => {
                wins = 0;
                losses = 0;
                score.textContent = "Wins: 0 Losses: 0";
                reset.style.display = 'none';
            })
            game.appendChild(reset);
            
        }


    })
})





//game function should be active at all times
//after the game is over, a button should pop up to play the game again.
//(maybe use a while loop in game()?)
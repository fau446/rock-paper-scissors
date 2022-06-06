// computerPlay to make the computer randomly play: rock, paper, or scissors.
function computerPlay() {
    const choice = ["Rock", "Paper", "Scissors"];
   return choice[Math.floor(Math.random() * choice.length)];
}
console.log(computerPlay());

/* Function that plays a round of the game
    Takes the player's selection of "Rock", "Paper", or "Scissors".
        Makes the playerSelection argument all caps to remove case sensitivity
    Takes the computer's selection
    Compares the player's choice to the computer's choice and chooses a winner
        Rock beats Scissors
        Scissors beats Paper
        Paper beats Rock
*/

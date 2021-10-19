'use strict';

const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const bodyEl = document.querySelector('body');
const guessEl = document.querySelector('.guess');

let secretNum;
let score = 20;
let highScore = 0;

/* Restarting the Game */
function restart() {
    score = 20;
    generateNum();

    bodyEl.style.backgroundColor = "#222";
    numberEl.textContent = "?";
    guessEl.value = "";
    scoreEl.textContent = 20;
    displayMessage("Start guessing...");
}

/* textContent of the Message element in the DOM */
function displayMessage(messageToDisplay) {
    messageEl.textContent = messageToDisplay;
}

/* Generating the SecretNum */
function generateNum() {
    secretNum = Math.trunc(Math.random()*20) + 1;
}

guessEl.value = "";
generateNum();

/* Check Button Click Event */
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(guessEl.value);

    /* When there is no Input */
    if(!guess){
        displayMessage("⛔️ No Number!");
    } else {
        if(guess === secretNum && score > 0){
            /* When the player wins the Game */
            displayMessage("🥳 Correct Number!");
            numberEl.textContent = secretNum;
            bodyEl.style.backgroundColor = "#60b347";

            if(score > highScore) highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        } else if(guess !== secretNum && score > 0){
            /* When the guess is not correct */
            displayMessage((guess > secretNum) ? "📈 Too High!" : "📉 Too Low!");

            score--;
            scoreEl.textContent = score;
        }
    }

    /* The score becomes 0 and the player loses the game */
    if(score === 0){
        displayMessage("☠️ You Lost the Game!");
        bodyEl.style.backgroundColor = "red";
    } 
});

/* Restarting the game after clicking the Restart button*/
document.querySelector('.again').addEventListener('click', restart);

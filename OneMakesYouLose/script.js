'use strict';

/* Selecting Elements */
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function(){
    // 1. Setting both players current scores to 0
    currentScore = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    // 2. Setting both players final scores to 0
    scores = [0, 0];
    score0El.textContent = 0;
    score1El.textContent = 0;

    // 3. Setting the active player as 0
    if(activePlayer === 1) switchPlayer();

    // 4. Changing the background color for winners of previous game
    activePlayer = 0;
    playing = true;
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

init();

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = (activePlayer === 0) ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

/* Rolling Dice Functionality */
btnRoll.addEventListener('click', function(){
    if(playing){
        // 1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        
        // 2. Displaying the dice
        diceEl.src = `dice-${dice}.png`;
        diceEl.classList.remove('hidden');

        // 3. Check for rolled 1
        if(dice !== 1){
            // Add dice to current score of current Player
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});

/* Adding the Hold functionality */
btnHold.addEventListener('click', function(){
    if(playing){
        // 1. Add current score to active player's final score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. Check if player's score is >= 100
        if(scores[activePlayer] >= 50){
            // Finish the Game
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            // Switch to the next player
            switchPlayer();
        }
    }
});

/* Starting a New Game */
btnNew.addEventListener('click', init);

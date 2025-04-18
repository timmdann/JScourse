'use strict';
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const dice = document.querySelector('.dice')
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const currentScore0El = document.getElementById('current--0')
const currentScore1El = document.getElementById('current--1')
const rollBtn = document.querySelector('.btn--roll')
const holdBtn = document.querySelector('.btn--hold')
const newBtn = document.querySelector('.btn--new')

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  dice.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

rollBtn.addEventListener('click', function() {
  if(playing){
    let diceNumber = Math.trunc(Math.random() * 6 ) + 1;
    dice.scr = `dice-${diceNumber}.png`;
    dice.classList.remove('hidden');

    if(diceNumber !== 1){
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', function(){
  if(playing){
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer]>= 20){
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }else{
      switchPlayer();
    }
  }
});

newBtn.addEventListener('click', init);
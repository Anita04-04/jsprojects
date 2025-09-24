'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

// Rolling Dice functionality

btnRoll.addEventListener('click', function(){
    //1. generating random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; 

    // check for rolled 1: if true switch to next player
    if(dice !== 1) {
         //add dice to correct code
            currentScore += dice;
            current0El.textContent = currentScore;

    }
});

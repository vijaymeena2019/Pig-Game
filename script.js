'use strict';



const roll = document.querySelector('.btn--roll');

const hold = document.querySelector('.btn--hold');

const newGame = document.querySelector('.btn--new');

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');

const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
// const current3 = document.querySelector('#current--' + player)


let player0 = 0;
let player1 = 0;
let value;
let current = 0;
let player = 0;
// useing toggle
//let activePlayer = document.querySelector('.player--' + player);

let diceValue = function () { return Math.trunc(Math.random() * 6) + 1 };  // 1 to 6

const dice = document.querySelector('.dice');


// new game buttom 
newGame.addEventListener('click', function () {
    //dice.remove();

    player0 = 0;
    player1 = 0;

    score0.textContent = player0;
    score1.textContent = player1;

    current0.textContent = player0;
    current1.textContent = player1;
    document.querySelector('.player--' + player).classList.remove('player--winner', 'name');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    player = 0;
})

//if (player0 < 100 && player1 < 100) { //not working why ?

// roll a dice
roll.addEventListener('click', function () {
    //console.log(diceValue(), `value`);
    // generate random value
    if (player0 < 100 && player1 < 100) {
        value = diceValue()
        dice.setAttribute('src', `dice-${value}.png`);

        if (value !== 1) {
            current += value;
            document.querySelector('#current--' + player).textContent = current;
            // if (player === 0) current1.textContent = current;
            // else current2.textContent = current;
        }
        else {
            current = 0;
            //if (player === 0) {
            document.querySelector('#current--' + player).textContent = current;
            document.querySelector('.player--' + player).classList.toggle('player--active')
            player = player === 0 ? 1 : 0;
            document.querySelector('.player--' + player).classList.toggle('player--active')
            // else { // update and player change
            //     current2.textContent = current;
            //     document.querySelector('.player--' + player).classList.toggle('player--active')
            //     player = 0;
            //     document.querySelector('.player--' + player).classList.toggle('player--active');
            //     //activePlayer.classList.toggle('player--active')
            // }
            // player change ?
            // add/remove css classes
        }
    }
}
)
// hold button 
hold.addEventListener('click', function () {
    // switching
    if (player0 < 100 && player1 < 100) {
        //player0 += current;
        //player === 0 ? player0 += current : player1 += current;
        if (player === 0) {
            player0 += current;
            document.querySelector('#score--' + player).textContent = player0
        } else {
            player1 += current;
            document.querySelector('#score--' + player).textContent = player1
        }

        current = 0;
        document.querySelector('#current--' + player).textContent = current;
        if (player0 >= 100 || player1 >= 100) {
            document.querySelector('.player--' + player).classList.add('player--winner', 'name');
        } else {
            document.querySelector('.player--' + player).classList.toggle('player--active');
            player = player === 0 ? 1 : 0; // swap
            document.querySelector('.player--' + player).classList.toggle('player--active');
        }
    }
}
)


        // if (player === 0) {
        //     player0 += current;
        //     score0.textContent = player0;
        //     current = 0;
        //     current0.textContent = current;
        //     document.querySelector('.player--' + player).classList.toggle('player--active')
        //     player = 1;   // add css
        //     document.querySelector('.player--' + player).classList.toggle('player--active')
        // } else {
        //     player1 += current;
        //     score1.textContent = player1;
        //     current = 0;
        //     current1.textContent = 0;
        //     document.querySelector('.player--' + player).classList.toggle('player--active')
        //     player = 0; // add css
        //     document.querySelector('.player--' + player).classList.toggle('player--active')
        // }

        // win
        // if (player0 >= 100 || player1 >= 100) {
        //     document.querySelector('.player--' + player).classList.add('player--winner', 'name');


        // if (player1 >= 100) {
        //     document.querySelector('.player--' + player).classList.toggle('player--active')
        //     player = 0;
        //     document.querySelector('.player--' + player).classList.toggle('player--active')
        //     document.querySelector('.player--' + player).classList.add('player--winner', 'name');  // works
        //     //document.querySelector('.player--' + player).classList.add('name');
        // } else {
        //     document.querySelector('.player--' + player).classList.toggle('player--active')
        //     player = 1;
        //     document.querySelector('.player--' + player).classList.toggle('player--active')
        //     document.querySelector('.player--' + player).classList.add('player--winner', 'name');
        //     //document.querySelector('.player--' + player).classList.add('name');
        // }
    // check if player wins?
    // otherwise switch player
    // add/remove css classes


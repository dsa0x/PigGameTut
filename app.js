/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice1, dice2, gamePlaying;


init()


/* document.querySelector('#current-' + activePlayer).textContent = dice;

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
var x = document.querySelector('#score-0').textContent
console.log(x) */


document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1
        var dice2 = Math.floor(Math.random() * 6) + 1
        var diceDOM1 = document.querySelector('.dice1')
        var diceDOM2 = document.querySelector('.dice2')
        diceDOM1.style.display = 'block'
        diceDOM1.src = 'dice-' + dice1 + '.png'

        diceDOM2.style.display = 'block'
        diceDOM2.src = 'dice-' + dice2 + '.png'
    
        if (dice1 > 1 && dice2 > 1) {
            roundScore += dice1 + dice2
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer()
        }
    }

/*     if (prevScore === roundScore && prevScore === 6) {
        score[activePlayer] = 0
        document.querySelector('#score - ' + activePlayer).textContent = scores[activePlayer]
    } else if (dice > 1)
        roundScore += dice
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
} else {
        nextPlayer()
    }
        prevScore = dice
} */
})

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
    
    scores[activePlayer] += roundScore

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

    var win = document.getElementById('win').value

    if (win) {
        var score = win
    } else {
        score = 100
    }
    if (scores[activePlayer] >= win){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner'
        document.querySelector('.dice1').style.display = 'none'
        document.querySelector('.dice2').style.display = 'none'
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        gamePlaying = false
    } else {
            nextPlayer()
    }
}
})


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
        roundScore = 0
        document.getElementById('current-0').textContent = '0'
        document.getElementById('current-1').textContent = '0'

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice1').style.display = 'none'
        document.querySelector('.dice2').style.display = 'none'
}

document.querySelector('.btn-new').addEventListener('click', init)

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true

    document.querySelector('.dice1').style.display = 'none'
    document.querySelector('.dice2').style.display = 'none'
    document.querySelector('#name-0').textContent = 'Player 0'
    document.querySelector('#name-1').textContent = 'Player 1'
document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}
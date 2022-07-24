//Define variables
var rollCount = 0;
var playerOneTotal = 0;
var playerTwoTotal = 0;
var playerOneRoundTotal = 0;
var playerTwoRoundTotal = 0;

//Define dice attributes
var dice = [];
for ( i = 0; i < 6; i++) {
    dice[i] = {
        value: i + 1,
        src: 'images/dice-' + (i+1) + '.png'
    }
}

//Generate dice roll
function rollDice() {

    //Roll the dice
    var diceRoll = [];
    for ( i = 1; i <= 4; i++ ) {
        diceRoll[i] = {
            img: dice[rollDie()]
        }
        //Output Dice Roll
        document.getElementById('dice'+i).setAttribute('src', diceRoll[i].img.src)
    }
    //Calculate Player 1 Round Score
    playerOneRoundTotal = calculateScore( diceRoll[1].img.value, diceRoll[2].img.value);
    //Calculate Player 2 Round Score
    playerTwoRoundTotal = calculateScore( diceRoll[3].img.value, diceRoll[4].img.value);

    return (playerOneRoundTotal, playerTwoRoundTotal);
}

//Roll Single Die
function rollDie() {
    var roll = Math.floor(Math.random() * 6);
    return roll;
}

// Calculate score function
function calculateScore( value1, value2 ) {
    //Check to see if die have the value of 1
    if ( value1 == 1 || value2 == 1) {
        return roundScore = 0;
    //Die doesnt have value of 1
    } else {
        //Do the dice equal each other
        if ( value1 == value2 ) {
            return roundScore = ( value1 + value2 ) * 2;
            //They dont equal, add the dice together for round score
        } else {
            return roundScore = value1 + value2;
        }
    }
}
//Play the game
document.getElementById('buttonRoll').addEventListener('click', function() {
    rollCount++;
    rollDice();
    //Set player totals
    playerOneTotal = playerOneTotal + playerOneRoundTotal;
    playerTwoTotal = playerTwoTotal + playerTwoRoundTotal;
    //Display output data
    document.getElementById('playerOneRound').innerText = playerOneRoundTotal;
    document.getElementById('playerTwoRound').innerText = playerTwoRoundTotal;
    document.getElementById('playerOneTotal').innerText = playerOneTotal;
    document.getElementById('playerTwoTotal').innerText = playerTwoTotal;
    document.getElementById('rollNumber').innerText = rollCount;

    //Check to see if game is complete
    if (rollCount == 3 ) {
        //Display game results
        if ( playerOneTotal > playerTwoTotal ) {
            document.getElementById('winner').innerHTML = "The <span>Player</span> has won the game"
        } else if ( playerOneTotal == playerTwoTotal ) {
            document.getElementById('winner').innerHTML = "This game has ended in a tie"
        } else {
            document.getElementById('winner').innerHTML = "The <span>Computer</span> has won the game"
        }
        document.getElementById('playerScore').innerText = playerOneTotal;
        document.getElementById('computerScore').innerText = playerTwoTotal;
        //toggle visibility of popup
        setTimeout(function() { 
            document.getElementById('popUp').hidden = false;
        }, 300 );
    }
});
//Event listeners to start new game
document.getElementById('newGame').addEventListener('click', function() {
    location.reload();
});
document.getElementById('playAgain').addEventListener('click', function() {
    location.reload();
});
//Event listener for rules
document.getElementById('rulesButton').addEventListener('click', function() {
    document.getElementById('rules').style.transform = "scale(1)";
});
document.getElementById('rulesClose').addEventListener('click', function() {
    document.getElementById('rules').style.transform = "scale(0)";
})

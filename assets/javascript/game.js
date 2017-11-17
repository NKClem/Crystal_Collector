$(document).ready(function() {

//add user variables
var userTotal = 0;
var userScore;

//add variable for random computer number
var compNum;

//add variable for buttons
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;

//add variables to track wins and losses
var numWins = 0;
var numLosses = 0;


//start game
generateNumber();
numbersForButtons();

//click function
$('#button1').click(function() {
	sumOfCrystals(crystalOne);
});

$('#button2').click(function() {
	sumOfCrystals(crystalTwo);
});

$('#button3').click(function() {
	sumOfCrystals(crystalThree);
});

$('#button4').click(function() {
	sumOfCrystals(crystalFour);
});

//function for random computer number
function generateNumber() {
	compNum = Math.floor((Math.random() * 102) + 19);
	$('#computer-number').text(compNum);
}

//function for random button numbers
function numbersForButtons() {
	crystalOne = Math.floor((Math.random() * 12) + 1);
		console.log('Crystal One is ' + crystalOne);
	crystalTwo = Math.floor((Math.random() * 12) + 1);
		console.log('Crystal Two is ' + crystalTwo);
	crystalThree = Math.floor((Math.random() * 12) + 1);
		console.log('Crystal Three is ' + crystalThree);
	crystalFour = Math.floor((Math.random() * 12) + 1);
		console.log('Crystal Four is ' + crystalFour);
}

//function to add crystals
function sumOfCrystals(crystalValue) {
	userTotal += crystalValue;
	$('#user-score').text(userTotal);
	checkTotal();
}

function checkTotal() {
	if (userTotal == compNum) {
		numWins++;
		$('#message').text('You win!');
		$('#number-of-wins').text(numWins);
		resetGame();
	} else if (userTotal > compNum) {
		numLosses++;
		$('#message').text('You lose...');
		$('#number-of-losses').text(numLosses);
		resetGame();
	}
}

function resetGame() {
	userTotal = 0;
	$('#user-score').empty();
	generateNumber();
	numbersForButtons();
}
});
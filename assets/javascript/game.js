//vars
//diplayed vars
var displayedWins = 0;
var displayedLosses =0;
var displayedCrystalValue =0;
var displayedYourScore =0;
var crystalPoints=[1,2,6,10];



//functions
// When the game starts there needs to be a random number on the screen
function randomNum() {
    displayedCrystalValue = Math.floor((Math.random() * 111) + 19);
    // document.getElementById("randomNumberBox").innerHTML = displayedCrystalValue;
    $("#randomNumberBox").html(displayedCrystalValue);
}

function shuffleCrystalValue(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function addToTotal(amount) {
    displayedYourScore += amount;
    $("#crystalValueBox").html(displayedYourScore);
    checkWinOrLose();
}

function printWinsAndLosses()
{
    $("#winText").html("Wins: " + displayedWins);
    $("#loseText").html("Losses: " + displayedLosses);
}

//win or lose function
function checkWinOrLose() {
    if (displayedYourScore == displayedCrystalValue) {
        displayedWins++;
        resetGame();
    }
    else if(displayedYourScore > displayedCrystalValue) {
        displayedLosses++;
        resetGame();
    }
}



// reset function

function resetGame() {
    displayedCrystalValue =0;
    displayedYourScore =0;
    randomNum();
    shuffleCrystalValue(crystalPoints);
    printWinsAndLosses();
    $("#crystalValueBox").html("000");
}

//events

$("#idCrystal0").click(function(){
    addToTotal(crystalPoints[0]);
});

$("#idCrystal1").click(function(){
    addToTotal(crystalPoints[1]);
});

$("#idCrystal2").click(function(){
    addToTotal(crystalPoints[2]);
});

$("#idCrystal3").click(function(){
    addToTotal(crystalPoints[3]);
});

$(document).ready(function() {
   resetGame();
});



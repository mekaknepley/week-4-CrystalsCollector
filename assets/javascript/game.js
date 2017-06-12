//vars
//diplayed vars
var displayedWins = 0;
var diplayedLosses =0;
var displayedCrystalValue =0;
var displayedYourScore =0;
var crystalPoints=[1,2,6,10];



//functions
// When the game starts there needs to be a random number on the screen
function randomNum() {
    var displayedCrystalValue = Math.floor((Math.random() * 45) + 15);
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
}

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
// reset function

//events
randomNum();
shuffleCrystalValue(crystalPoints);

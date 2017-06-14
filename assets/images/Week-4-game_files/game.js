//variables
var gameState = "chooseCharacter";

   	


//constructor function

function Character(htmlClass, healthPoints, attackPower, counterAttack) {
  this.htmlClass=htmlClass;
  this.healthPoints=healthPoints;
  this.attackPower=attackPower;
  this.counterAttack=counterAttack;

  
}

var belleBonnycharacter = new Character(".gameBellBonny", 120, 8, 25);
   
var bitterCupCharacter = new Character(".gameBitterCup", 200, 8, 50);

var lucasSimmsCharacter = new Character(".gameLucusSimms", 80, 8, 40);
    
var threeDogCharacter =  new Character(".gameThreeDog", 160, 8, 35);
  
//$(threeDogCharacter.htmlClass).appendTo($("#gameDefender"))

//functions
function ChooseCharacter(character){
  
}
// ALL four characters are displayed

//One character is the active character. The other characters are now the enemies.


// Active character is trying to reduce HP of the now enemies.

//display HP health

//function for the Attack button




//(display functions)
//All character will be displayed on the screen

//update the game
function updatePage() {
 // displayScore();
 // displayGuessedLetters();
}

//reset button to start the game over
function resetGame() {
  //guessesleft = 9;
  //computerPick ="";
  //playerGuessTheLetter = [];
}




//Events

$(document).ready(function(){
  $("#gameBitterCup").click(function(){

  })
});
// The player must choose a character to play with


// Once the player chooses a charcter then that is their character to play with

// must pick a character for the defender box


//update the game
//updatePage();













function rollingDice() {
    //select type of sided-dice
let sides = document.getElementById("diceSides").value;
    //get players name
let userOne = document.getElementById("playerOne").value;
let userTwo = document.getElementById("playerTwo").value;
    //generate 2 random number for both players
let randomNumber1 = Math.floor(Math.random() * sides) + 1;
let randomNumber2 = Math.floor(Math.random() * sides) + 1; 
    //matchup dice image with random number
let randomImage1 = "image/dice" + randomNumber1 + ".png";
let randomImage2 = "image/dice" + randomNumber2 + ".png";
    //replace default img with random number
document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);    
    //use condition to present winner's name
if ( randomNumber1 > randomNumber2 ) document.getElementById("gameResult").innerText = userOne + " Wins!"
else if ( randomNumber1 < randomNumber2 ) document.getElementById("gameResult").innerText = userTwo + " Wins!"
else document.getElementById("gameResult").innerText = "Draw Game!" 

}

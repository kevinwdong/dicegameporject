document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("select").addEventListener('change', globalFunction);
});
   
var diceSides = 6;

function selectDiceSides (event) {
    sides = parseInt (event.target.value)
    console.log(sides)
}


   function rollD6() {
            //create a random nubmer between 1 - 6
        let randomD6Number1 = Math.floor(Math.random() * 6) + 1;
        let randomD6Number2 = Math.floor(Math.random() * 6) + 1; 
            
            //assign this random nubmer to the correspondent images
        let randomD6Image1 = "image/dice" + randomD6Number1 + ".png";
        let randomD6Image2 = "image/dice" + randomD6Number2 + ".png";
            
            //change the exsitng image with random image
        document.querySelectorAll("img")[0].setAttribute("src", randomD6Image1);
        document.querySelectorAll("img")[1].setAttribute("src", randomD6Image2);
        
            //showing different result
        if ( randomD6Number1 > randomD6Number2 ) document.querySelector("h2").innerHTML = "Player 1 Wins!"
        else if ( randomD6Number1 < randomD6Number2 ) document.querySelector("h2").innerHTML = "Player 2 Wins!"
        else document.querySelector("h2").innerHTML = "Draw!"  
    }

    function rollD10() {
            //create a random nubmer between 1 - 10
        let randomD10Number1 = Math.floor(Math.random() * 10) + 1;
        let randomD10Number2 = Math.floor(Math.random() * 10) + 1;
        
            //assign this random nubmer to the correspondent images
        let randomD10Image1 = "image/dice" + randomD10Number1 + ".png";
        let randomD10Image2 = "image/dice" + randomD10Number2 + ".png";
        
            //change the exsitng image with random image
        document.querySelectorAll("img")[0].setAttribute("src", randomD10Image1);
        document.querySelectorAll("img")[1].setAttribute("src", randomD10Image2);

            //showing different result
        if ( randomD10Number1 > randomD10Number2 ) document.querySelector("h2").innerHTML = "Play 1 Wins!"
        else if ( randomD10Number1 < randomD10Number2 ) document.querySelector("h2").innerHTML = "Play 2 Wins!"
        else document.querySelector("h2").innerHTML = "Draw!" 
    }


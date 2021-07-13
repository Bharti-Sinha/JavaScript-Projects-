'use strict';


let secretNumber = Math.trunc(Math.random()*20) +1;
let score = 20;
let highscore = 0;

const displayMessage = function (message){
    document.querySelector('.message').textContent= message;
}

document.querySelector(".check").addEventListener('click', function(){
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    if (!guess){
        //document.querySelector(".message").textContent =" No number ";
        displayMessage(" No number ");

    // when the guess is correct
    }else if (guess === secretNumber){
        //document.querySelector(".message").textContent =" Currect number "; 
        displayMessage(" Currect number ");

        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = "30rem";

        if (score> highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // when the guess is different than the secretnumber
    }else if (guess !== secretNumber) {
        if (score>1){
            let message = "";
            message = guess > secretNumber ? "Too high" : "Too low";
            
            //document.querySelector(".message").textContent = message;
            displayMessage(message);
            // document.querySelector(".message").textContent = guess > secretNumber ? "Too high" : "Too low";
            
            score--;
            document.querySelector(".score").textContent = score; 
            
        }else{
            //document.querySelector(".message").textContent =" You lost the game";  
            displayMessage("You lost the game"); 
            document.querySelector(".score").textContent = 0; 
        }

    }
}
)
  

// again button implementation
document.querySelector(".again").addEventListener("click", function () {

    // restore score
    score = 20;
    document.querySelector(".score").textContent = score; 

    // clear the old generated number
    document.querySelector(".number").textContent = "?";

    // generate a new secret number
    secretNumber = Math.trunc(Math.random()*20) +1;

    // restore guess value
    document.querySelector(".guess").value = "";

    // restore message
    // document.querySelector(".message").textContent ="Start guessing...";
    displayMessage("Start guessing..."); 

    // restore styles
    document.querySelector("body").style.backgroundColor = "#222";

    document.querySelector(".number").style.width = "15rem";
}
)

'use strict';


// generate secret number
let secretNumber = Math.trunc(Math.random()*20) +1;

let score = 20;

document.querySelector(".check").addEventListener('click', function(){
    const guess = Number(document.querySelector(".guess").value);
    // console.log(guess);
    if (!guess){
        document.querySelector(".message").textContent =" No number ";

    // when the guess is correct
    }else if (guess === secretNumber){
        document.querySelector(".message").textContent =" Currect number "; 

        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = "30rem";

    // when the guess is higher
    } else if (guess > secretNumber) {
        if (score>1){
            document.querySelector(".message").textContent =" Too high ";
            score--;
            document.querySelector(".score").textContent = score; 
        }else{
            document.querySelector(".message").textContent =" You lost the game";   
            document.querySelector(".score").textContent = 0; 
        }
        
    // when the guess is lower
    } else if (guess < secretNumber){
        if (score>1){
            document.querySelector(".message").textContent =" Too low ";
            score--;
            document.querySelector(".score").textContent = score; 
        }else{
            document.querySelector(".message").textContent =" You lost the game";   
            document.querySelector(".score").textContent = 0; 
        }    
    }
})

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
    document.querySelector(".message").textContent ="Start guessing...";

    // restore styles
    document.querySelector("body").style.backgroundColor = "#222";

    document.querySelector(".number").style.width = "15rem";
}
)

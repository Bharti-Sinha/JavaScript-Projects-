'use strict';

/*
// select an element in js - this is dom manipulation
console.log(document.querySelector(".message"));
// dot for class, # for id
*/


/*
console.log(document.querySelector(".message").textContent);
// make javascript interact with webpage - DOM maipulation
// document object model: structured representation of html document
// Dom Allows js to access html elements and styles to manipulate them
// manipulate means - change text, change html attributes and css styles
// when i load the html page, dom is created by the browser
// stores in tree structure
// dom is link bwtween html and js


// DOM
// Every html element is one object in DOM
// DOM has a special object called document which is entry point into DOM
// Dom is not part of js code that we write, js is a dialect of ECMAscript specification
// Dom methods and properties are part of web APIs
// Dom is web API (library which is already included) written in javascript
// this api can interact with js code that we write to manipulate html and css
// other web APIs are --> fetch and timer


document.querySelector(".message").textContent = "Correct Number! "

console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;


// value property
// setting input from js
document.querySelector(".guess").value = 10;
console.log(document.querySelector(".guess").value); 
*/
// generate secret number
let secretNumber = Math.trunc(Math.random()*20) +1;
// random generates number between 0 and 1 
// so to generate number btwn 1 and 20 , multiply by 20
// now there will be decimal part so trcuncate it
// with truncate 19.99999999 will become 19 
// and the number will never be 20 so add 1




let score = 20;
// this is called stage variable
// any var relevant to the application
// dom can be used to get the score in the condition where guess != secret number
// dom can also be used to write the score after updating

// but never do this just using dom
// always store it in the code then manipulate and dispaly using dom


// reading input from the user
// event is something that happens on the browser - mouse click, move moving, click

// with event listener waits for a certain event to happens and do something accordingly

// step 1 for event listening
// select the element where the event will happen
document.querySelector(".check").addEventListener('click', function(){
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    // see this - if code block has to run then falsey to true
    if (!guess){
        document.querySelector(".message").textContent =" No number ";

    // when the guess is correct
    }else if (guess === secretNumber){
        document.querySelector(".message").textContent =" Currect number "; 

        document.querySelector(".number").textContent = secretNumber;
        // this will be hidden behind ?

        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = "30rem";// manipulating style only with string

        // when the guess is to high
    } else if (guess > secretNumber) {
        if (score>1){
            document.querySelector(".message").textContent =" Too high ";
            score--;
            document.querySelector(".score").textContent = score; 
        }else{
            document.querySelector(".message").textContent =" You lost the game";   
            document.querySelector(".score").textContent = 0; 
        }
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
// arguments are:-
// type of event - click
// reaction to the click event - it is function - event handler
// function is a value so we can pass it as argument to another function 

// always handle case when no input has been made



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

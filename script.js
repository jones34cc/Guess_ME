'use strict';
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct NUmber";

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 7;

// console.log(document.querySelector(".guess").value = 23);
var secretNumber = Math.floor(Math.random() * 20);
console.log(secretNumber);
let score = 20;

document.querySelector('.check').addEventListener("click", function () {
    const guess = Number(document.querySelector('.guess').value);


    if (!guess) {
        document.querySelector('.message').textContent = 'NO Number !!';
    }
    else if (guess != secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'TOO HIGH !!' : "TOO LOW";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector(".score").textContent = 0;
            document.querySelector(".message").textContent = "🤦‍♂️GAME OVER!!"
        }

    }

    else {
        document.querySelector('.message').textContent = 'YEEPEE !! CORRECT ANSWER';

        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "green";

        document.querySelector(".number").style.width = "30rem";

        var sc = document.querySelector(".score").textContent;
        var hsc = document.querySelector(".highscore").textContent;

        if (sc > hsc) {
            document.querySelector(".highscore").textContent = sc;
        }





    }

});


document.querySelector(".again").addEventListener("click", function () {
    secretNumber = Math.floor(Math.random() * 20);
    console.log(secretNumber);
    document.querySelector(".message").textContent = "start guessing....";
    document.querySelector(".score").textContent = 20;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "rgb(34,34,34)";
    document.querySelector(".number").style.width = "15rem";



})


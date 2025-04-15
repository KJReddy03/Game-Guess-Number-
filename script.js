"use strict";
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!...';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = Number(document.querySelector(".highscore").textContent);
console.log(highScore);
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//check the input
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  //If No Number is Inserted
  if (!guess) {
    displayMessage("No Number");
  }

  //When a correct guess is done
  else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector("body").style.backgroundColor = "#29b829";
    document.querySelector(".number").style.width = "250px";
  }

  //When a Wrong guess is done
  else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? "Too High!" : "Too low!");
    score--;

    //When Score reaches 0
    if (score === 0) {
      displayMessage("Game Over!");
    }
    document.querySelector(".score").textContent = score;
  }
});

//When Clicked Again
document.querySelector(".again").addEventListener("click", function () {
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
});

//Reset all data
// document.querySelector(".reset").addEventListener("click", function () {
//   displayMessage("Start guessing...");
//   document.querySelector(".guess").value = "";
//   score = 20;
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   highScore = 0;
//   document.querySelector(".highscore").textContent = highScore;
//   console.log(secretNumber);
// });

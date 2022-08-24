"use strict";
// Assignment 11.5: While loop

// Write a ‘while’ loop, and use conditionals to check whether a user’s input is correct.

// Tasks:
//     Create a variable to store the number of tries to solve the problem the child will receive. Call it "lives".
//     Write a ‘while’ loop and “Game Over!” message.
//     Prompt the child to solve a simple addition problem (5 + 2 etc.) and store their answer in a variable.
//     Use a conditional to confirm whether or not the user’s input matches the correct answer, and deduct a life if it does not.

let lives = 5;

while (lives > 0) {
  let result = prompt(`You have ${lives} lives left. What is 4+2?`);
  if (result !== "6") {
    lives--;
    console.log("Opps that's not right - try again");
  } else {
    console.log("Congratulations! That's the correct answer.");
    break;
  }
}
console.log("Game Over!");
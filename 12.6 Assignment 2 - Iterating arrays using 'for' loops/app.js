"use strict";
// Assignment 12.6: Iterating arrays using 'for' loops

// In this assignment we will create and see the differences between a ‘for...of’ loop, a ‘for’ loop, and a ‘forEach’ loop.

// Tasks:
//     Declare two variables:
//         subscriberAge = [16, 22, 38, 45, 33, 17, 27, 55, 17];
//         targetAudience = [];

//     Create a ‘for…of’ loop and log the numbers to terminal.

//     Log to terminal whether each number is greater than 20.

//     Use a conditional to store numbers above 20 in the new variable targetAudience.

//     Perform the same sorting job using a ‘for’ loop.

//     Perform the same sorting job one more time using a ‘forEach’ loop.

let subscriberAge = [16, 22, 38, 45, 33, 17, 27, 55, 17];
let targetAudience = [];

// Using For Of Loop
for (let element of subscriberAge) {
  if (element > 20) {
    targetAudience.push(element);
  }
  console.log(`Is ${element} larger than 20? Ans:${element > 20} `);
}
console.log(targetAudience);

// Using For Loop
for (let index = 0; index < subscriberAge.length; index++) {
  console.log(
    `Is ${subscriberAge[index]} larger than 20? Ans: ${
    subscriberAge[index] > 20
    }`
  );
  if (subscriberAge[index] > 20) {
    targetAudience.push(subscriberAge[index]);
  }
}
console.log(targetAudience);

// Using For Each Loop
subscriberAge.forEach((item) => {
  if (item > 20) {
    targetAudience.push(item);
  }
});

console.log(targetAudience);
"use strict";

// Add a smaller string into the middle of a larger string using a template literal
let userName = "Mario";
console.log(`Hi ${userName}, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam 
tempora deserunt adipisci nobis velit atque natus.`);

// Perform math within a string, using a template literal
console.log(`Lorem ipsum ${4 + 2} dolor, sit amet consectetur adipisicing elit.`);

// Use a method with our variable inside of the string (using a template literal)
console.log(`Welcome ${userName.toUpperCase()}!`);

// Add “use strict” to the beginning of your file and re-run
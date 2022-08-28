"use strict";

// Assignment 13.3: Using array methods

// In this assignment we will learn to use the .split, .indexOf, .lastIndexOf, .slice, .splice, .join, and .concat methods.

// Tasks:
//     Convert the original, single-lined poem from before to an array and add it to the arrayedPoem variable.
//     let originalPoem = `This little piggy went to market this little piggy stayed home this little piggy had roast beef and this little piggy had none and this little piggy cried "Wee! Wee! Wee!" all the way home!`;
let originalPoem = `This little piggy went to market this little piggy stayed home this little piggy had roast beef and this little piggy had none and this little piggy cried "Wee! Wee! Wee!" all the way home!`;
let arrayedPoem = originalPoem.split(" ");
console.log(arrayedPoem);

//     We need to find where the poem first mentions “piggy” (using the .indexOf method).
console.log(arrayedPoem.indexOf("piggy"));

//     We need to find “cried” in the manuscript (using the .lastIndexOf method).
console.log(arrayedPoem.indexOf("cried"));
console.log(arrayedPoem.lastIndexOf("all"));

//     We need to grab a quote and store it in a new variable "poemQuote" (using the .slice) method.
let poemQuote = arrayedPoem.slice(28, 31)
console.log(poemQuote);

//     We need to delete the first “and” (using the .splice method).
console.log(arrayedPoem.indexOf("and"));

console.log(arrayedPoem.splice(17, 1));

//     We need to combine the parts of the poem into a full poem (using the .join method).
console.log(arrayedPoem.join(" "));

//     We need to add “The End” at the end of the manuscript (using the .concat method).
console.log(arrayedPoem.concat("The", "End"));
"use strict";
// Create an array of names of people who you think will be going.
let names = ["Emma", "Noah", "Oliver"];
console.log(names);

// Add “Darius” to the list, using the .push method.
names.push("Darius");
console.log(names);

// You discover your friend’s sister will be in town, and must be 
// included - use the .unshift method to make sure she’s first on the list.
names.unshift("Olivia");
console.log(names);

// You just got a text on your phone from Darius “I’m not feeling well.” 
// Remove him from the list using the .pop method.
names.pop();
console.log(names);
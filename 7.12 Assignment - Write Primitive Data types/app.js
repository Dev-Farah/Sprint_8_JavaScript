// Assignment 7.12: Write Primitive Data types

// An auto parts supply company needs you to update their website’s "Welcome" page to improve business. 
// Since you now know how to do things like writing strings, using methods, and performing math; let’s see if 
// you can improve this page!

// The auto parts supply company also wants the welcome page to celebrate how long each visitor has had their 
// account for, or note the day when they first signed up. Try to address this mid-way through the assignment.

// Complete the task using the following steps:
// Write three strings:
//     a basic string;
//     a string that contains a literary quotation from an author/quote from a public speaker (perhaps using interpolation);
//     a single string that spans multiple lines of code.

// Use three methods:
// 1) Perform a basic math calculation, and then verify the data type of your result (that it’s a number, and not a string);
// 2) Perform a boolean check;
// 3) Use JavaScript’s coercion to combine mixed data types (strings and numbers).

// Tasks:
// Using your main.js file, write and display a string with a text greeting.
let greeting = "Welcome";
console.log(greeting);

// Write and display a string that uses interpolation.
let userName = "Ali";
let greeting2 = `Hi ${userName}!`;
console.log(greeting2);

// Write and display a string that spans multiple lines of code
let str = `An example of multi line text:
This is line 1 
This is line 2 
This is line 3`;

console.log(str);

// Try punching up our first line (“Hi Neighbor! …) by making the entire line capitalized.
let cap = "Hi Neighbor!".toUpperCase();
console.log(cap);

// Check to see how many elements/characters are in the second line of your greeting.
let count = greeting2.length;
console.log(count);

// Split the second line into two, at the “:” character
console.log('Greeting'.split(":"));

// Perform a basic math calculation 
// Note: this is a great opportunity to meet the client’s celebratory needs
console.log(8 / 8);

// Check to see that your result is a number and not a string, using the typeof operator
console.log(typeof(8 / 8));

// Perform a Boolean check
// Note: this may come in handy later, if the client wants to perform checks (such as whether the customer has done business for more than a year, lives in Europe, or is a “value plus” member)
console.log("s" < "z");

// Use strict equality to confirm that your math is returning a number (and not a string)
console.log(1 === 1);

// Test JavaScript’s coercion ability by adding our result to a string in order to get: 
//     a string, and then
//     a number

console.log(5 - 3 + " days left");

console.log(5 - 3 + 18);
// OR
let a = 5;
++a;
console.log(a);
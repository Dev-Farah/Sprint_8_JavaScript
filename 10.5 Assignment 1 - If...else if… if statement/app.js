"use strict";
// Assignment 10.5: If else if

// In this assignment we will:

//     Test an “if” statement,
//     Test an “else” statement,
//     Test an “else if” statement,
//     Test a ternary statement.

// Tasks:

//     Create an “if” statement to test something
let a = 4;
if (a === 4) {
    console.log("The condition is true");
}

//     Add an additional conditional using “else”
if (a !== 4) {
    console.log("First condition is true");
} else if (++a === 5) {
    console.log("Second condition is true");
}

//     Add additional conditionals, using “else if” and a logical operators
if (4 != 4) {
    console.log("First condition is true");
} else if (--a == 5) {
    console.log("Second condition is true");
} else {
    console.log("Both conditions are false");
}

//     Add a ternary statement
(20-5 < 50) ? console.log(true) : console.log(false);
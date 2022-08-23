"use strict";
// Assignment 11.4: For loops

//  Write a “for” loop and console.log a modified version of the "99 bottles" song.

// Tasks:
//     Create a ‘for’ loop that prints to console “99 Bottles” (of brewed coffee, obviously!)

for (let i = 99; i > 0; i--) {
  console.log(`${i} bottles of brewed coffee on the wall ${i} bottles of brewed coffee!
    Take one down and pass it around - ${i - 1} bottles of brewed coffee on the wall!`);
}
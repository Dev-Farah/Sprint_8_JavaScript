"use strict";
// Assignment 11.6: For...of

// Write a “For … of” loop and convert a paragraph of text into a structured poem.

// Tasks:
//     Declare two variables, one for the original text and another one for the converted text.
//     Create a ‘for of’ loop
//     Use a conditional and an equivalency to check for commas
//     Use an “else” in your conditional to store the newly-formatted poem


let originalText = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, dicta neque mollitia dolor autem aspernatur quis ratione odit impedit nulla vero, aliquid nam qui rem velit.Culpa soluta veritatis enim.`;

let spacedText;

for (let element of originalText) {
//   console.log(element);
  if (element == ",") {
    // console.log(element);
    spacedText += `\n`;
    
  } else {
    spacedText += element;
  }
}
console.log(spacedText.replace(/undefined/g, ""));
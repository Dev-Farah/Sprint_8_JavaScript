"use strict";
// Assignment 10.6: Switch

// Write a switch statement that includes at least two “cases” and a “default” case (plus “breaks”).

// Tasks:
//     Create a weekDay variable and store a day of the week in it
let weekDay = "Monday";

//     Write a switch statement and add Monday as a first case

switch (weekDay) {
    case "Monday":
      console.log("When life gives you Monday, dip it in glitter and sparkle all day");
      break;
  }

//     Write six more switch cases (one for each day of the week)
switch (weekDay) {

    case ("Tuesday"): console.log("Have a great Tuesday. Choose to love. Choose to Smile. Choose to be Happy.");
        break;

    case ("Wednesday"): console.log("If you allow yourself to have a good wednesday everything else will fall into place.");
        break;

    case ("Thursday"): console.log("Today is Thursday - Make it Fab");
        break;

    case ("Friday"): console.log("You made it - it's Friday!");
        break;

    case ("Saturday"): console.log("Knock, knock. Who's there - It's Saturday!");
        break;

    case ("Sunday"): console.log("A Sunday well spent brings a week of content");
        break;
}

//     Add a default case
switch (weekDay) {
    case ("Monday"): console.log("When life gives you Monday, dip it in glitter and sparkle all day");
        break;

        case ("Tuesday"): console.log("Have a great Tuesday. Choose to love. Choose to Smile. Choose to be Happy.");
        break;

    case ("Wednesday"): console.log("If you allow yourself to have a good wednesday everything else will fall into place.");
        break;

    case ("Thursday"): console.log("Today is Thursday - Make it Fab");
        break;

    case ("Friday"): console.log("You made it - it's Friday!");
        break;

    case ("Saturday"): console.log("Knock, knock. Who's there - It's Saturday!");
        break;

    case ("Sunday"): console.log("A Sunday well spent brings a week of content");
        break;

    default: console.log("Please enter a valid weekday");
        break;
}
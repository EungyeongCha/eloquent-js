//Binding
let caught = 5 * 5;

let ten = 10;
console.log(ten * ten);

let mood = "light";
console.log(mood);
mood = "dark";
console.log(mood);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);

let one = 1, two = 2;
console.log(one + two);

var name = "Ayda"; 
const greeting = "Hello";
console.log(name + greeting);

// Function: a piece of program wrapped in a value
prompt("Enter passcode");

// The colsole.log function
let x = 30;
console.log("the value of x is", x);

// Return values
console.log(Math.max(2, 4));
console.log(Math.min(2, 4) + 100);

// Control flow
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " + theNumber * theNumber);

// Conditional execution
let theNumber = Number(prompt("Pick a number"));
if(!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of" + theNumber * theNumber);
}

if (1 + 1 == 2) console.log("It's true");

let theNumber = Number(prompt("Pick a number"));

if(num < 10) {
    console.log("Small");
} else if (num < 100) {
    console.log("Medium");
} else {
    console.log("Large");
}

// while and do loops
let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}

let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);

let yourName;
do {
    yourName = prompt("Who are you?");
} while(!yourName);
console.log(yourName);

// Indenting code
if (false != true) {
    console.log("That makes sense.");
    if (1 < 2) {
        console.log("No surprise there.");
    }
}

// for loops
for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}

let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
    result = result * 2;
}
console.log(result);

// Breaking out of a loop
for (let current = 20;; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}

// Updating bindings succinctly
for (let number = 0; number <= 12; number += 2) {
    console.log(number);
}

// Dispatching on a value with switch
if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();

switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unknown weather type!");
        break;
}


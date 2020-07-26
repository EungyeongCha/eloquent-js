// 1. Data sets - array

let listOfNumbers = [2, 3, 4, 7, 11];
console.log(listOfNumbers[2]);
console.log(listOfNumbers[0]);

// 2. Properties
// almost all js values have peoperties except null and undefined
null.length;
// dot notation only works with valid binding names
value.x;
value[x];
value[2];
value["John Doe"];

// 3. Methods
// : properties that contain functions

let doh = "doh";
console.log(typeof dot.toUpperCase);
console.log(doh.toUpperCase());

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);

// 4. Objects
//  : arbitrary collections of properties

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
// -> undefined
day1.wolf = false;
console.log(day1.wolf);
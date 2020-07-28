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

let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};

let anObject = {left: 1, right: 2};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
// -> undefined
console.log("left" in anObject);
console.log("right" in anObject);

console.log(Object.keys({x: 0, y: 0, z: 2}));
// -> ["x", "y", "z"]

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);

let journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
   squirrel: true},
  /* and so on... */
];

// 5. Mutability

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2); // true
console.log(object1 == object3); // false

object1.value = 15;
console.log(obejct2.value); //15
console.log(object3.value); //10

const score = {visitors: 0, home: 0};
score.visitors = 1; // okay
score = {visitors: 1, home: 1}; // not okay

// 6. The lycanthrope’s log

let journal = [];
function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}

addEntry(["work, touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);

// 6. Computing corelation
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));
// → 0.068599434

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 1;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

console.log(tableFor("pizza", JOURNAL));

// 7. Array loop
for (let i = 0; i < JOURNAL.length; i++) {
    let enrty = JOURNAL[i];
    // DO something with entry
}

for (let entry of JOURNAL) {
    console.log(`${entry.events.length} events.`);
}

// 8. The final analysis
function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}
console.log(journalEvents(JOURNAL));

for (let event of journalEvents(JOURNAL)) {
    console.log(event + ":", phi(tableFor(event, JOURNAL)));
}
// → carrot:   0.0140970969
// → exercise: 0.0685994341
// → weekend:  0.1371988681
// → bread:   -0.0757554019
// → pudding: -0.0648203724
// and so on...


for (let event of journalEvents(JOURNAL)) {
    let corelation = phi(tableFor(event, JOURNAL));
    if (corelation > 0.1 || corelation < -0.1) {
        console.log(event + ":", corelation);
    }
}

// → weekend:        0.1371988681
// → brushed teeth: -0.3805211953
// → candy:          0.1296407447
// → work:          -0.1371988681
// → spaghetti:      0.2425356250
// → reading:        0.1106828054
// → peanuts:        0.5902679812

for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") &&
        !entry.events.includes("brushed teeth")) {
      entry.events.push("peanut teeth");
    }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
// → 1

// 9. Further arrayology
let todoList = [];
function remember(task) {
    todoList.push(task);
}
function getTask() {
    return todoList.shift();
}
function rememberUrgently(task) {
    todoList.unshift(task);
}

console.log([1, 2, 3, 2, 1].indexOf(2));
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

// first arg inclusive last not inclusive 
console.log([0, 1, 2, 3, 4].slice(2, 4));
console.log([0, 1, 2, 3, 4].slice(2));

function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove[["a", "b", "c", "d", "e"], 2]);
// → ["a", "b", "d", "e"]

// 10. Strings and their properties
let kim  = "Kim";
kim.age = 88;
console.log(kim.age) 
// -> undefined

console.log("coconuts".slice(4, 7));
// -> nut
console.log("coconut".indexOf("u"));
// -> 5
console.log("one two three".indexOf("ee"));
//-> 11
console.log("   okay \n".trim());
console.log(String(6).padStart(3, "0"));

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

console.log("LA".repeat(3));

let string = "abc";
console.log(string.length);
console.log(string[1]);

// 11. Rest parameters
// is bound to an array containing all further arguments
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));

let numbers = [5, 1, 7];
console.log(max(...numbers));

let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);

// 12. The math object
//can you define a binding with a name already taken?
//yes: var, function || no: let, conse

function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));

console.log(Math.floor(Math.random() * 10));

// 13. Destructuring

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1])/
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
              (n01 + n11) * (n00 + n10));
}

let {name} = {name: "Faraji", age: 23};
console.log(name);
// -> Faraji

// 14. JSON
//  JavaScript Object Notation. It is widely used as a data storage and communication format on the Web

{
    "squirrel": false,
    "events": ["work", "touched tree", "pizze", "running"]
}

let string = JSON.stringify({squirrel: false, events: ["weekend"]});
console.log(string);
console.log(JSON.parse(string).events);



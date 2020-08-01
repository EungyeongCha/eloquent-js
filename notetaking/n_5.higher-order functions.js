// 1. Abstracting repetition
for (let i = 0; i < 10; i++) {
    console.log(i);
}

function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
repeat(5, console.log);

let labels = [];
repeat(5, i => {
   labels.push(`Unit ${i + 1}`); 
});
console.log(labels);


// 2. Higher-order functions
// functions that operates on other functions
// allow us to abstract over actions


// a function that create a new function
function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));


// a function that change other functions
function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1


// a function that provide a new type of control flow
function unless(test, then) {
    if (!test) then();
}

repeat(3, n => {
   unless(n % 2 == 1, () => {
          console.log(n, "is even");
        }); 
});
// → 0 is even
// → 2 is even

// for/of loop as a higher-order function
["A", "B"].forEach(l => console.log(l));


// 3. Filtering arrays
// returns a new array that passed the test (no value transformation)
function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if(test(element)) {
            passed.push(element);
        }
    }
    return passed;
}
console.log(filter(SCRIPT, script => script.living));


console.log(SCRIPT.filter(s => s.direction == "ttb"));


// 4. Transforming with map
//  new array from the returned values(value transformation)
function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}
let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));


// 5. Summarizing with reduce
function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

function characterCount(script) {
    return script.ranges.reduce((count, [from, to] )=> {
        return count + (to - from);
    }, 0);
}
console.log(SCRIPTS.reduce((a, b => {
    return characterCount(a) < characterCount (b) ? b : a;
})));

// 6. Composability
let biggest = null;
for (let script of SCRIPTS) {
    if (biggest == null ||
        characterCount(biggest) < characterCount(script)) {
            biggest = script;
        }
}
console.log(biggest);

function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}
console.log(Math.round(average(
    SCRIPTS.filters(s => s.living).map(s => s.year)
)));
console.log(Math.round(average(
    SCRIPTS.filters(s => !s.living).map(s => s.year)
)));

let total = 0, count = 0;
for (let script of SCRIPTS) {
    if (script.living) {
        total += script.year;
        count += 1;
    }
}
console.log(Math.round(total / count));


// 7. Strings and character codes
// some method takes a test function and tells you whether that function returns true for any of the elements in the array
function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
        return null;
    }
}

// two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(horseShoe.length);
// -> 4
console.log(horseShoe[0]);
// → (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)

let roseDragon = "🌹🐉";
for (let char of roseDragon) {
    console.log(char);
}
// → 🌹
// → 🐉


// 8. Recognizing text
function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]

function textScript(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";

    return script.map(({name, count}) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).joun(", ");

    console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic
}
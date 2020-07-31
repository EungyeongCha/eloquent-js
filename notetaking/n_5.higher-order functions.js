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




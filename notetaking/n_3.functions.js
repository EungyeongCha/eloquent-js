// 1. Defining a function
const square = function(x) {
    return x * x;
};
console.log(square(12));

const makeNoise = function() {
    console.log("Pling!");
};
makeNoise();

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(power(2, 10));

// 2. Binding and scopes
// let, const: local to the block that they are declared in
// var: global scope, if they are not in a function
let x = 10;
if (true) {
    let y = 20;
    let z = 30;
    console.log(x + y + z);
    // -> 60
}
// -> y is not visible here
console.log(x + z);

const halve = function(n) {
    return n / 2;
};
let n = 10;
console.log(halve(100));
// -> 50
console.log(n);
// -> 10

// 3. Nested scope
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

// 4. Functions as values
let launchMissles = function() {
    missileSystem.launch("now");
};
if (safeMode) {
    launchMissles = function() {/*do nothing*/};
}

// 5. Declaration notation
// can use a function before you declare it
function square(x) {
    return x * x;
}

console.log("The future says: ", future());
function fuure() {
    return "You'll never have flying cars";
}

// 6. Arrow functions
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

const square1 = (x) => {return x * x};
const sqaure2 = x => x * x;

const horn = () => {
    console.log("Toot");
};

// 7. The call stack
function greet(who) {
    console.log("Hello" + who);
}
greet("Harry");
console.log("Bye");

/*
not in function
    in greet
        in console.log 
    in greet
not in function 
    in console.log
not in function
*/

function chicken() {
    return egg();
}
function egg() {
    return chicken();
}
console.log(chicken() + "came first.");
// -> infinite stack

// 8. Optional arguments
function square(x) {return x * x;}
console.log(square(4, true, "hedgehog"));
// -> 16(extra args are ignored)

function minus(a, b) {
    if (b == undefined) return -a;
    else return a - b;
}
console.log(minus(10));
// -> -10(args are assigned as undefined when no value is given)
console.log(minus(10, 5));

function power(base, exponent = 2) {
    let result = 1;
    if (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(4));
console.log(power(2, 6));

// 9. Closure
// being able to reference a specific instance of a local binding in an enclosing scope
function wrapValue(n) {
    let local = n;
    return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// -> 1
console.log(wrap2());
// -> 2

function multiplier(factor) {
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
// -> 10

// 10. Recursion
functino power(base, exponent) {
    if (exponetn == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(2, 3));
// -> 8

// Function which finds target number by adding 5 and multiflying by 3
function findSolution(target) {
    function find(current, history) {
        if (current == history) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `${history + 5}`) ||
                   find(current * 3, `${history * 3}`);
        }
    }
    return find(1, "1");
}
console.log(findSolution(24));
// -> (((1 * 3)) + 5) * 3);

/* 
<Call stack: finding target(13)>
find(1, "1")
    find(6, "(1 + 5)")
        find(11, "((1 + 5) + 5)")
            find(16, "(((1 + 5) + 5) + 5)")
                too big
            find(33, "(((1 + 5) + 5) * 3)")
                too big
        find(18, "((1 + 5) * 3)")
            too big
    find(3, "(1 * 3)")
        find(8, "(1 * 3) + 5")
            find(13, "((1 * 3) + 5) + 5")
                found!
*/

// 10. Growing functions

// a function prints the number of farm animals with 3 digits
function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

// modified function that can prints various animals
function printZeroPaddedWithLabel(number, animal) {
    let numberString = String(number);
    while (numberString < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`)
}

function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}
printFarmInventory(7, 11, 3);

// same function with more abstraction
function zeroPad(number, width) {
    let string = String(number);
    while (string.length < 3) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) { 
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(7, 16, 3);
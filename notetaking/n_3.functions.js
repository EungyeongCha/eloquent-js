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


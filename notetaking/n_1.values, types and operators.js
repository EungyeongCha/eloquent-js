// Tmplate literals
console.log(`half of 100 is ${100 / 2}`);

// Unary Operators
console.log(typeof 4.5);
console.log(typeof "x");

// Boolean Values
console.log(3 > 2);
console.log(3 < 2);

console.log("Aardvark" < "Zoroaster");
console.log("Itchy" != "Scratch");
console.log("Apple" == "Orange");

console.log(NaN == NaN);

// Logical Operators
console.log(true && false);
console.log(true && true);

console.log(false || true);
console.log(false || false);

// Conditional(ternary) Operator
console.log(true ? 1 : 2);
console.log(false ? 1 : 2);

// Automatic type conversion
// Use === and !== to compare values precisely
console.log(8 * null);
console.log("5" - 1);
console.log("5" + 1);
console.log("five" * 2);
console.log(false == 0);

console.log(null == undifined);
console.log(null == 0);

// Short-circuiting of logical operators
// depends on the value on the left side
console.log(null || "user");
console.log("Agnes" || "user");
console.log(true || X);
//-> return true
console.log(false && X);
//-> return false
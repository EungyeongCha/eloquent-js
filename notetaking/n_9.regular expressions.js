// 1. Creating a regular expressrion
// type of object
let re1 = new RegExp("abc");
let re2 = /abc/;

// use \ when using forward slash 
let eighteenPlus = /eighteen\+/;



// 2. Testing for matches
console.log(/abc/.test("abcde"));
console.log(/abc/.test("abxde"));



// 3. Set of characters
console.log(/[0123456789]/.test("in 1992"));
console.log(/[0-9]/.test("in 1992"));

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
console.log(dateTime.test("30-jan-2001 15:20"));

// []: any number of value, ^: except that value
let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
console.log(notBinary.test("1100100010200110"));


// 4. Repeating parts of a pattern
console.log(/'d+'/.test("'123'"));
console.log(/'d+'/.test("''"));
console.log(/'d*'/).test("'123'"); // 0 and more
console.log(/'d*'/).test("''");

let neighbor = /neighbou?r/; // 0 or 1 times
console.log(neighbor.test("neighbour"));
console.log(neighbor.test("neighbor"));

let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));



// 5. Grouping subexpressions
// Use () and + or * to match more than one element at a time
// i: case inseneitive
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));



// 6. Matches and groups
let match = /\+d/.exec("one two 100");
console.log(match);
console.log(match.index);


console.log("one two 100".match(/\d+/));

console.log(/bad(ly)?/.exec("bad"));
console.log(/(\d)+/.exec("123"));
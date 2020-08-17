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


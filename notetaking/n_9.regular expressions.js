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



// 7. The date class
// current date and time
console.log(new Date());

// specific time
console.log(new Date(2009, 11, 9));
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));

// milliseconds since the 1970
console.log(new Date(2013, 11, 19).getTime());
console.log(new Date(1387407600000));

// a date object created from a string(_: to skip the full match element)
function getDate(string) {
    let [_, month, day, year] =
    /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month -1, day);
}
console.log(getDate("1-30-2003"));
// → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)



// 8. Word and string boundaries
// ^: start, ?: end
// /b: boundary
console.log(/cat/.test("concatenate"));
console.log(/\bcat\b/.test("concatenate"));


// 9. Choice patterns
//pipe(|): denotes a choice between the pattern to its left and the pattern to its right
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
console.log(animalCount.test("15 pigchickens"));


// 10. The replace method
// g: replace all matches
console.log("papa".replace("p", "m"));

console.log("Borobudur".replace(/[ou]/, "a"));
console.log("Borobudur".replace(/[ou]/g, "a"));

// $: refers to parenthesized groups
console.log(
    "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
    .replace(/(\w+), (\w+)/g, "$2 $1");
)

// passing a function as a second arg to replace
let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, 
            str => str.toUpperCase()));

let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
    amount = Number(amount) - 1;
    if (amount == 1) { // only one left, remove the 's'
        unit = unit.slice(0, unit.length - 1);
    } else if (amount == 0) {
        amount = "no";
    }
    return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));


// 11. Greed
// greedy operators(+, *, ?, and {}): match as much as they can and backtracks from there
// use nongreedy operators(+?, *?, ??, {}?)

function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}

function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}

// 12. Dymanically creating regexp objects
let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b("+ name +")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));


// 13. The search method
//search: returns the first index(found), -1(not found)
console.log("   word".search(/\S/));
console.log("   ".search(/\S/));


// 14. The lastIndex property
// sticky(y): match succeed only if it starts at lastIndex
// global(g): search for a position where a match can start
// If the match was successful, the call to exec automatically updates the lastIndex property to point after the match.

let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index); //4
console.log(pattern.lastIndex); //5

let global = /abc/g;
console.log(global.exec("xyz abc")); // ["abc"]
let sticky = /abc/y;
console.log(sticky.exec("xyz abc")); // null

// regexp start at an index that was left over
let digit = /\d/g;
console.log(digit.exec("here it is: 1")); // ["1"];
console.log(digit.exec("and now: 1")); // null

console.log("Banana".match(/an/g)); // ["an", "an"];



// 15. Looping over matches
let input = "A string with 3 numbers in it... 42 and 88.";
let number = /\b\d+\b/g;
let match;
while (match = number.exec(input)) {
    console.log("Found", match[0], "at", match.index);
}










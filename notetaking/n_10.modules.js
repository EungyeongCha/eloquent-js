// 1. Improvised modules
// the way to create modules before built-in module system
// does not declare depencencies

const weekDay = (function () {
  const names = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return {
    name(number) {
      return names[number];
    },
    number(name) {
      return names.indexOf(name);
    },
  };
})();

console.log(weekDay.name(weekDay.number("Sunday")));

// 2. Evaluation data as code
// eval: execute a string in the current scope but breaks some of the properties tha scopes normally have.

const x = 1;
function evalAndReturnX(code) {
  eval(code);
  return x;
}

console.log(evalAndReturnX("val x = 2"));
console.log(x);

// Function constructor("list of args", "function body")
let plusOne = Function("n", "return n + 1;");
console.log(plusOne(4));

// 3. CommonJs
// require: function, makes sure the module is loaded and returns its interface

const ordinal = require("ordinal");
const { days, months } = require("date-names");

// the module adds formatDate(interface function) to exports so that modules that depends on it gets access to it
exports.formatDate = function (date, format) {
  return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, (tag) => {
    if (tag == "YYYY") return date.getFullYear();
    if (tag == "M") return date.getMonth();
    if (tag == "MMMM") return months[date.getMonth()];
    if (tag == "D") return date.getDate();
    if (tag == "Do") return ordinal(date.getDate());
    if (tag == "dddd") return days[date.getDay()];
  });
};

// how to use the module
const { formatDate } = require("./format-date");
console.log(formatDate(new Date(2017, 9, 13), "dddd the Do"));
// -> Friday the 13th

// 4. ECMAScript modules
import ordinal from "ordinal";
import { days, months } from "date-names";

export function formatDate(date, format) {
  /* */
}

// creating a degfault export
export default ["Winter", "Spring", "Summer", "Autumn"];

// renaming imported bindings
import { days as dayNames } from "date-names";

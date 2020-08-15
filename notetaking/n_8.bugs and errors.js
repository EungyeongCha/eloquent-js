// 1. Strict mode
function canYouSpotTheProblem() {
    "use strict";
    for (counter = 0; counter < 10; counter++) {
        console.log("Happy happy");
    }
}
canYouSpotTheProblem();
//-> ReferenceError: counter is not defined



function Person(name) {this.name = name;}
let ferdinand = Person("Ferdinand"); // forgot new
console.log(name);
// -> Ferdinand


"use strict";
function Person(name) {this.name = name;}
let ferdinand = Person("Ferdinand"); // forgot new
// -> TypeError: Cannot set property 'name' of undefined

// class notation returns error when called without new


// 2. Types

// Use comment: (VillageState, Array) -> {direction: string, memory: Array}
function goalOrientedRobot(state, memory) {
    //...
}
// Use type variable: 
// ([T]) -> T



// 3. Testing
// Writing a test for toUpperCase
// Use test runners
function test(label, body) {
    if (!body()) console.log(`Failed: ${label}`);
}

test("convert Latin text to uppercase", () => {
    return "hello".toUpperCase() == "Hello";
});



// 4. Debugging
// Use console.log or debug to catch errors
function numberToString(n, base = 10) {
    let result = "", sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }
    do {    
        result = String(n % base) + result;
        n /= base; 
        // n = Math.floor(n/base) to produce whole nums
    } while (n > 0); {
        return sign + result;
    }
}
console.log(numberToString(13, 10));
// → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e-3181.3…



// 5. Error propagation
// Return special values for recovery when error occured (or wrap them in an object)
function promptNumber(question) {   
    let result = Number(prompt(question));
    if (Number.isNaN(result)) return null;
    else return result;
}
console.log(promptNumber("How many trees do you see?"));

function lastElement(array) {
    if(array.length == 0) {
        return {failed: true};
    } else {
        return {element: array[array.length - 1]};
    }
}



// 6. Exceptions
// try (if error hapened) -> catch (from throw)
function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
}

function look() {
    if (promptDirection("Which way?") == "L") {
        return "a house";
    } else {
        return "two angry bears";
    }
}

try {
    console.log("You see", look());
} catch (error) {
    console.log("Something went wrong: " + error);
}



// 7. Cleaging up after exceptions
// Beaware of the control flow
const accounts = {
    a: 100,
    b: 0,
    c: 20
  };

  function getAccount() {
      let accountName = prompt("Enter an account name");
      if (account.hasOwnProperty(accountName)) {
          throw new Error(`No such account: ${accountName}`);
      }
      return accountName;
  }

  function transfer(from, amount) {
      if (account[from] < amount) return;
      accounts[from] -= amount;
      accounts[getAccount()] += amount;
  }

  // Write a secure version of transfer by recording progress and using finally
  function transfer(from, amount) {
    if (accounts[from] < amount) return;
    let progress = 0;
    try{
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    } finally {
        if(progress == 1) {
            account[from] += amount;
        }
    }
  }



  // 8. Selective catching
  // Don't use exception for non-function related errors(ex.type error)
  for(;;) {
      try{
          let dir = promtDirection("Where?"); //misspelled
          console.log("You chose ", dir);
          break;
      } catch(e) {
          console.log("Not a valid direction. Try again.");
      }
  }
  
  
  // Define a new type of error to recognize error types
  class InputError extends Error{}
  for(;;) {
    try{
        let dir = promtDirection("Where?"); //misspelled
        console.log("You chose ", dir);
        break;
    } catch (e) {
        if (e instanceof InputError) {
            console.log("Not a valid direction. Try again.");
        } else {
            throw e;
        }
    }
    }



    // 9. Assertions
    // Set a retun value to recognize programmer mistakes
    function firstElement(array) {
        if (array.length == 0) {
            throw new Error("firstElement called with []");
        }
        return array[0];
    }

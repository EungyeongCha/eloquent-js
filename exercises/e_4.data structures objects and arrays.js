/*
The sum of a range

The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

function range(num1, num2, num3) {
    let array = [];
    if (num1 < num2) {
        for (let i = num1; i <= num2; i+= num3) {
            array.push(i);
        }        
    } else {
        for (let j = num1; j >= num2; j+= num3) {
            array.push(j);
        }        
    }
    return array;
}

function sum(array) {
    let sumArray = 0;
    for (let value of array) {
        sumArray += value;
    }
    return sumArray;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
//console.log(sum(range(1, 10)));
// → 55



/*
Reversing an array

Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
*/

function reverseArray(arr) {
    let array = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        array.push(arr[i]);
    }
    return array;
}

function reverseArrayInPlace(array) {
    let newLength = Math.floor(array.length / 2);
    for (let j = 0; j < newLength; j++) {
        let old = array[j];
        array[j] = array[array.length - 1 - j];
        array[array.length - 1 - j] = old;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

/*
A list

Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.

*/





/*
Deep comparison

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

*/



function deepEqual(obj1, obj2) {
    if(obj1 === obj2) return true;
    
    if (obj1 == null || typeof obj1!= "object" ||
        obj2 == null || typeof obj2!= "object") return false;
    
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    
    if (keys1.length != keys2.length) return false;
    
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
    }
    return true;
}
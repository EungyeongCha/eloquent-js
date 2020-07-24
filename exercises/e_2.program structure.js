/*
Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/


/*let container = ""
for (let number = 1; number <= 7; number++) {
    container += "#";
    console.log(container);    
}*/

/*
FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

/*
for (let num = 1; num <= 100; num++) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("FizzBuzz");
    } else if (num % 3 == 0) {
        console.log("Fizz");
    } else if (num % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}
*/

/*
Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

let eptStr = "";
function dash(n) {
    for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
        for (let j = 0; j < n; j++) {
        if (j % 2 == 0) {
            eptStr += " ";
        } else {
            eptStr += "#";
        }
    }
    }
    else {
        for (let j = 0; j < n; j++) {
        if (j % 2 == 0) {
            eptStr += "#";
        } else {
            eptStr += " ";
        }       
    }
   }
    eptStr += "\n";
}
console.log(eptStr);
}

dash(10);

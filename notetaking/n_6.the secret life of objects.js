// 1. Methods
// are properties that hold function values

let rabbit = {};
rabbit.speak = function(line) {
    console.log(`The rabbit says '{$line}'`);
};
rabbit.speak("I'm alive");


function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};
whiteRabbit.speaks("Oh my ears and whiskers," + "how late it's getting!");
hungryRabbit.speaks("I could use a carrot right now.");


// call methods takes the this value as its first arg and treats further args as normal parameters
speak.call(hungryRabbit, "Burp!");


// normal <-> arrow function(see the this binding of the scope around them)
function normalize() {
    console.log(this.coords.map(n => n / this.length));
}
normalize({coords: [0, 2, 3], length: 5});



// 2. Prototypes
// A prototype is another object that is used as a fallback source of properties.

let empty = {};
console.log(empty.toString);
// → function toString(){…}
console.log(empty.toString());
// → [object Object]


console.log(Object.getPrototypeOf({} == Object.prototype));
// -> true
console.log(Obejct.getPrototypeOf(Object.prototype));
// -> null


console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// -> true
console.log(Object.getPrototypeOf([]) == Array.prototype);
// -> true


let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};
let killerRabbit = Object.create(protoRabbit);
killetRabbit.type = "killer";
killerRabbit.speak("SKREEE!");
// -> The killer rabbit says 'SKREEEE!'



// 3. Classes
// A class defines the shape of a type of object—what methods and properties it has.

function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}


// constructor names are capitalized 
function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};
let weirdRabbit = new Rabbit("weird");


console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// -> true
console.log(Object.getPrototypeOf(weirdRabbit) == Ranbbit.prototype);
// -> true




// 4. Class notation
// JavaScript classes are constructor functions with a prototype property.

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");



// Like function, class can be used both in statements and in expressions.
let object = new class { getWord() {return "hello"}};
console.log(object.getWord());
// -> hello




// 5. Overriding derived properties

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// -> small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// -> long, sharp, and bloody
console.log(blackRabbit);
// -> small
console.log(Rabbit.prototype.teeth);
// -> small


// Calling toString on an array puts commas between the values in the array
console.log(Array.prototype.toString == Object.prototype.toString);
// -> false
console.log([1, 2].toString());
// -> 1, 2


//  Directly calling Object.prototype.toString puts the word object and the name of the type between square brackets.
console.log(Object.prototype.toString.call([1, 2]));
// -> [object Array]



// 6. Maps

// A map is a data structure that associates values (the keys) with other values.
let ages = {
    Boris: 39,
    Liang: 22,
    Julia: 62
};
console.log(`Julia is ${ages["Julia"]}`);
console.log("Is Jack's age known?", "Jack" in ages);
// -> Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// -> Is toString's age known? true
// because plain objects derive from Object.prototype, it looks like the property is there.

console.log("toString" in Object.create(null));
// -> false


let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);
console.log(`Julia is ${ages.get("Julia")}`);
console.log("Is Jack's age known?", ages.has("Jack"));
console.log(ages.has("toString"));
// -> false


// hasOwnProperty: ignores the object's prototype
// Object.keys: returns an object's own keys
console.log({x: 1}.hasOwnProperty("x"));
console.log({x: 1}.hasOwnProperty("toString"));
// -> false



// 7. Polymorphism
//  polymorphic code can work with values of different shapes, as long as they support the interface it expects

Rabbit.prototype.toString = function() {
    return `a ${this.type}rabbit`;
};
console.log(String(blackRabbit));
// -> a black rabbit



// 8. Symbols
// symbols are values created with the Symbol function. Unlike strings, newly created symbols are unique—you cannot create the same symbol twice.

let sym = Symbol("name");
console.log(sym == Symbol("name"));
// -> false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// -> 55


const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn`;
};
console.log([1, 2].toString());
// -> 1, 2
console.log([1, 2[toStringSymbol]()]);
// -> 2cm of blue yarn


let stringObject = {
    [toStringSymbol]() {return "a jute rope";}
};
console.log(stringObject[toStringSymbol]());
// -> a jute rope



// 9. The iterator interface
// the object given to a for/of loop is expected to be iterable. This means it has a method named with the Symbol.iterator symbol

let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
// -> {value: "O", done: false}
console.log(okIterator.next());
// -> {value: "K", done: false}
console.log(okIterator.next());
// -> {value: undefined, done: true}


// The class stores its content in a single array of width × height elements.
class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }
    set (x, y, value) {
        this.content[y * this.width + x] = value;
    }
}


class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y == this.matrix.height) return {done: true};

        let value = {x: this.x,
                     y: this.y,
                     value: this.matrix.get(this.x, this.y)};
        this.x++
        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        }
        return {value, done: false};
    }
}


// set up the Matrix class to iterable
Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
};


let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix) {
    console.log(x, y, value);
}
// → 0 0 value 0,0
// → 1 0 value 1,0
// → 0 1 value 0,1
// → 1 1 value 1,1



// 10. Getters, Setters, and Statics
// Interfaces often consist mostly of methods, but it is also okay to include properties that hold non-function values

let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100);
    }
};
console.log(varyingSize);


class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}
let temp = new Temperature(22);
console.log(temp.fahrenheit);
// -> 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
// -> 30



// 11. Inheritance

class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        // the constructor calls its superclass’s constructor through the super keyword
        super(size, size, (x, y) => {
            if (x > y) return element(y, x);
            else return element(x, y);
        });
    }
    // 
    set(x, y, value) {
        super.set(x, y, value);
        if (x != y) {
            super.set(y, x, value);
        }
    }
}
let matrix = new SymmetricMatrix(5, (x, y) => `{${x}, ${y}}`);
console.log(matrix.get(2, 3));
// -> 3, 2



// 12. The instanceof operator

console.log(
    new SymmetricMatrix(2) instanceof SymmetricMatrix);
// -> true
console.log(new SymmetricMatrix(2) instanceof Matrix);
// -> true
console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
// -> false
console.log([1] instanceof Array);
// -> true
/*
 A vector type

Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.
Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).
 */


class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }
    minus(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    }

    // To compute the distance from (0, 0) to (x, y), you can use the Pythagorean theorem(√(x2 + y2))
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}


/*
Groups

Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

Iterable groups

Make the Group class from the previous exercise iterable.
 */

class Group {
    constructor() {
        this.members = [];
    }

    add(value) {
        if(!this.has(value)) {
            this.members.push(value);
        }
    }
    
    delete(value) {
        this.members = this.members.filter(v => v !== value);
    }

    has(value) {
        return this.members.includes(value);
    }

    static from(collection) {
        let group = new Group;
        for (let value of collection) {
            group.add(value);
        }
        return group;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));


class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if (this.position >= this.group.members.length) {
            return {done: true};
        } else {
            let result = {value: this.group.members[this.position], done: false};
            this.position++;
            return result;
        }
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }

/*
Borrowing a method

Can you think of a way to call hasOwnProperty on an object that has its own property by that name?
*/

let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
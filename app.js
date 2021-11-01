console.log("Hello World!\n==========\n");

// Exercise 1 Section
class Person{
    constructor (name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }
    info() {
        console.log(`${this.name}\n${this.pets}\n${this.residence}\n${this.hobbies}`);
    }
    greeting() {
        console.loglog("Hi!");
    }
}

class Coder extends Person {
    constructor (name, pets, residence, hobbies) {
        super(name, pets, residence, hobbies)
        this.occupation = "Full Stack Web Developer"
    }
    greeting() {
        console.log("Hi TrueCoder!");
    }
}

const Tanner = new Person("Tanner", 0, "Alabama", ["Reading", "Chess"]);
const Ben = new Coder("Ben", 0, "Alabama", ["Coding", "Running"]);

Tanner.info();
Ben.info();

console.log("EXERCISE 1:\n==========\n");

export class Person {
    // public name: string;
    //private address: string;

    constructor(
        public name: string, 
        private address: string = "Unknown") {
        // this.name = name;
        // this.address = address;
    }
}

const person1 = new Person("Alice", "123 Main St"); 
const person2 = new Person("Bob");

console.log(person1);
console.log(person2);
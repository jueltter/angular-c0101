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

export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        

        super(realName, 'Unknown');
    }
}

const person1 = new Hero("Alice", 30, "Alice Smith"); 
const person2 = new Hero("Bob", 25, "Bob Johnson");

console.log(person1);
console.log(person2);
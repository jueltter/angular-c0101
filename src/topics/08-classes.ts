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

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
        

//         super(realName, 'Unknown');
//     }
// }


export class Hero {
    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        
        this.person = person;
        
    }
}

const person = new Person("Alice Smith", "123 Main St");
const hero = new Hero("Alice", 30, "Alice Smith", person);

console.log(hero);
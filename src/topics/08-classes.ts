export class Person {
    public name: string;
    private address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}

const person1 = new Person("Alice", "123 Main St"); 

console.log(person1);
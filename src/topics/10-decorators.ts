function classDecorator<T extends { new (...args:any[]) : {}}>(
    constructor: T
){
    return class extends constructor {
        newProperty = "New property added by the decorator";
        hello = "Override the original class";
    }
}

@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123'

    print() {
        console.log('Hola Mundo!');
    }
}


console.log(SuperClass);


const myClass = new SuperClass();
myClass.print();
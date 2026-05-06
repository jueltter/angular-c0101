
export interface Passenger {
    name: string;
    children?: string[];

}

const passenger1: Passenger = {
    name: 'Stalin',
}

const passenger2: Passenger = {
    name: 'Maria',
    children: ['Natalia', 'Sofia']
}

const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);
}

printChildren(passenger1);
printChildren(passenger2);
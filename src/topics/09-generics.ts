


export function whatsMyType<T>(argument: T): T {
    return argument;
}


const amIString = whatsMyType<string>("Hello, TypeScript!");
const amINumber = whatsMyType<number>(42.5);
const amIArray = whatsMyType<number[]>([1, 2, 3]);

console.log(amIString.split(" "));
console.log(amINumber.toFixed());
console.log(amIArray.join(", "));
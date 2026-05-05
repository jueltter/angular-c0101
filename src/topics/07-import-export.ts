import { type Product, taxtCalculation } from "./06-function-destructuring";


const shoppingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 150
    },
    {
        description: 'iPad Air',
        price: 350
    }
];

const [total, tax] = taxtCalculation({
    taxt: 0.15,
    products: shoppingCart
});

console.log('Total: ',total);
console.log('Tax: ',tax);

export {};
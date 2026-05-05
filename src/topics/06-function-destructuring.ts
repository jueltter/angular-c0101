interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150
}

const tablet: Product = {
    description: 'iPad Air',
    price: 350
}

const shoppingCart = [ phone, tablet ];
const taxt = 0.15;

interface TaxCalculationOptions {
    taxt: number;
    products: Product[];
}


function taxtCalculation(options: TaxCalculationOptions) : number[] {
    let total = 0;

    options.products.forEach( ({ price }) => {
        total += price;
    });

    return [total, total * options.taxt];
}

const result = taxtCalculation({
    taxt,
    products: shoppingCart
});

console.log('Total: ',result[0]);
console.log('Tax: ',result[1]);
















export {};
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


function taxtCalculation(options: TaxCalculationOptions) : [number, number] {
    const { taxt, products } = options;
    
    let total = 0;

    products.forEach( ({ price }) => {
        total += price;
    });

    return [total, total * taxt];
}

const [total, tax] = taxtCalculation({
    taxt,
    products: shoppingCart
});

console.log('Total: ',total);
console.log('Tax: ',tax);
















export {};
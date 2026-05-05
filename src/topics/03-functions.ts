function addNumbers(  a: number, b: number ): number {

    return a + b;
}

const addNumbersArrow = ( a: number, b: number ): string => {

    return `${a + b}`;
}

function multiply(first: number, second?: number, base: number = 2): number {
    return first * base;
}

// const result = addNumbers( 1, 2 );
// const arrowResult = addNumbersArrow( 1, 2 );
// const multiplyResult = multiply( 5 );

// console.log({ result });
// console.log({ arrowResult });
// console.log({ multiplyResult });

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}


const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    showHp() {
        console.log(`HP: ${this.hp}`);
    }
}

healCharacter(strider, 20);
strider.showHp();


export {};
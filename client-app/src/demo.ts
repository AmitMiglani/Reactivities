let data = 42;
data = 10;

export interface ICar {
    color: string;
    model: string;
    topSpeed?: number
}

const car1: ICar = {
    color: 'blue',
    model: 'BMW'
}


const car2: ICar = {
    color: 'red',
    model: 'Mercedes',
    topSpeed: 100
}

// Mode is strict, we need to explicitly specify the data types, any is not default in strict
const multiply = (x: number, y: number): string => {
        return (x*y).toString();
}


const multiply1= (x: number, y: number) => {
    (x*y).toString();
}

export const cars = [car1, car2];
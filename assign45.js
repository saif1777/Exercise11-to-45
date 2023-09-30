"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, modelName, ...args) {
    const car = {
        manufacturer,
        modelName,
    };
    for (let i = 0; i < args.length; i += 2) {
        const key = args[i];
        const value = args[i + 1];
        car[key] = value;
    }
    return car;
}
// Call the function with required information and additional properties
const myCar = createCar('Toyota', 'Camry', 'color', 'blue', 'year', 2023);
console.log(myCar);

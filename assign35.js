"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let animals = ["Horse", "Dog", "Cat"];
for (const animal of animals) {
    console.log(animal);
}
animals.forEach(modifyprogram);
function modifyprogram(items) {
    console.log(`A ${items} would be a great pet`);
}
console.log("statment:");
console.log('Any of these animals would make a great pet!');

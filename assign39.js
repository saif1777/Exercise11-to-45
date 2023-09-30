"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let city_country = (city, country) => {
    return (`${city},${country}`);
};
let city = city_country("`Lahore", "Pakistan`");
let city1 = city_country("'London", "England'");
let city3 = city_country("'Newyork", "America'");
console.log(city);
console.log(city1);
console.log(city3);

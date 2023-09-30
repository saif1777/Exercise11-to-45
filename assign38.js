"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let describe_city = (city, country) => {
    console.log(`${city}  is in ${country}`);
};
describe_city("karachi", "pakistan");
describe_city("london", "england");
describe_city("new jersey", "unknown country.");
// Karachi is in Pakistan.
// New York is in USA.
// Tokyo is in Unknown Country.

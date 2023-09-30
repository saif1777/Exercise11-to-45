// Define the initial array of magician names
const magicians: string[] = ["ali", "wasif", "Hamayu", "Dikshat"];

// Function to add "Great" to magician names
function make_great(names: string[]): string[] {
    const greatMagicians: string[] = names.map(name => `Great ${name}`);
    return greatMagicians;
}

// Function to display magician names
function show_magicians(names: string[]): void {
    for (const name of names) {
        console.log(name);
    }
}

// Create a copy of the original array
const originalMagicians: string[] = [...magicians];

// Call make_great() with a copy of the array
const greatMagiciansArray: string[] = make_great(originalMagicians);

// Display both arrays
console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagiciansArray);





export{};













// Original Magicians:
// Merlin
// Gandalf
// Houdini
// David Copperfield

// Great Magicians:
// Great Merlin
// Great Gandalf
// Great Houdini
// Great David Copperfield

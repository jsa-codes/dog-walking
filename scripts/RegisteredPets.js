import { getPets } from "./database.js"

// "pets" contains a copy of array of Pets from the database.js
const pets = getPets()

/* 
➡️ WHAT DOES THIS FUNCTION DO?
    - It iterates the "pets" array
        - For each pet is gets the pet's name and places it inside the <li> tags
        - Then appends it to the <u> string that is stored in the "petHTML" variable
        - It then returns the "petHTML" string
*/
export const RegisteredPets = () => {
    let petHTML = "<ul>"

    // Iterate the pets array
    //  "pets" is the result of the getPets function (see Line 4) 👀
    for (const pet of pets) {
        petHTML += `<li>${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}


import { findWalkerCitiesByWalker } from './CityList.js';
import { getPets, getWalkerCities } from './database.js';
import { getWalkers } from './database.js';

// "pets" contains a copy of array of Pets from the database.js
const pets = getPets();
const walkerCities = getWalkerCities();
const walkers = getWalkers();

/* 
➡️ WHAT DOES THIS FUNCTION DO?
    - It iterates the "pets" array
        - For each pet is gets the pet's name and places it inside the <li> tags
        - Then appends it to the <u> string that is stored in the "petHTML" variable
        - It then returns the "petHTML" string
*/
export const RegisteredPets = () => {
  let petHTML = '<ul>';

  // Iterate the pets array
  //  "pets" is the result of the getPets function (see Line 4) 👀
  for (const pet of pets) {
    petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`;
  }

  petHTML += '</ul>';

  return petHTML;
};

/* 
-----ALGORITHM-----
GOAL: When a user clicks on a pet, display an alert that says who is walking the pet
    1) Create eventListener
    2) Find the pet that matches the pet that was clicked on
    3) Find the walker that is currently walking that pet


*/

document.addEventListener('click', (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.id.startsWith('pet')) {
    // This provides me with the petId
    const [, petId] = itemClicked.id.split('--');

    // Create empty variable to store the pet when it is located in the array
    let foundPet;
    // Iterate the array of pets
    for (const pet of pets) {
      // If the pet id matches the petId (of the item clicked on)
      if (pet.id === parseInt(petId)) {
        // Store that pet to "foundPet"
        foundPet = pet;
      }
    }
    // Create empty variable for the walker that is found to be stored in
    let foundWalker;
    // Iterate the walkers array
    for (const walker of walkers) {
      // If the walker id matches the foundPet's walkerId
      if (walker.id === foundPet.walkerId) {
        // Store that walker in the foundWalker variable
        foundWalker = walker;
      }
    }

    window.alert(`${foundPet.name} is being walked by ${foundWalker.name}`);
  }
});

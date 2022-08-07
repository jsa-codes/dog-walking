import { getWalkerCities } from './database.js';
import { getCities } from './database.js';
import { getWalkers } from './database.js';

const cities = getCities();

// walkers contains a copy of the exported array of "walkers" from the database
// Not sure if I even need access to getWalkers now ❓
// const walkers = getWalkers()

/* 
➡️ WHAT DOES THIS FUNCTION DO?
     - This function creates an ordered list of City Names 
*/
export const CityList = () => {
  let citiesHTML = '<ol>';

  for (const city of cities) {
    citiesHTML += `<li>${city.name}</li>`;
  }

  citiesHTML += '</ol>';

  return citiesHTML;
};

/* 
➡️ WHAT DOES THIS FUNCTION DO?
*/
export const findWalkerCitiesByWalker = (walkerId) => {
  // Define an empty array to store all of the assignment objects
  let walkerAssignments = [];
  //   walkerCities contains a copy of the array walkerCities found in database.js ⬅️ 👀
  const allWalkerCities = getWalkerCities();
  const walkers = getWalkers();
  // Iterate the array value of walkerCities
  for (const assignment of allWalkerCities) {
    for (const walker of walkers) {
      // Check if the primary key of the walker equals the foreign key on the assignment
      // IF it does then add the current object to the array of assignments
      if (assignment.walkerId === walker.id) {
        walkerAssignments.push(assignment);
      }
    }
  }
  return walkerAssignments;
};

/* 
➡️  WHAT DOES THIS FUNCTION DO?
*/

// Define a function that builds a string of city names. Needs a parameter for assignments array.
//      The array walkerCities is aka - "Assignments"
export const assignedCityNames = (arrayOfAssignments) => {
  // Define an empty string that will get appended with the matching assignments array
  let cityNames = '';

  //   WHAT IS THIS FUNCTION DOING❓❓❓❓
  //          - It is looking for a match between the city's id and the assignment's city id
 
  for (const assignment of arrayOfAssignments) {
    // STEP 2) For each assignment, now iterate the cities array to find the match
    for (const city of cities) {
      // IF the city id matches the assignment's city id
      if (city.id === assignment.cityId) {
        cityNames = `${cityNames} ${city.name},`;
      }
    }
  }

  return cityNames;
};

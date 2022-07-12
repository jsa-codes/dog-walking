import { getWalkers } from './database.js';
import { getCities } from './database.js';
import { getWalkerCities } from './database.js';

const cities = getCities();

// walkers contains a copy of the exported array of "walkers" from the database
// Not sure if I even need this now ❓
// const walkers = getWalkers()

// ➡️ This function creates an ordered list of City Names
export const CityList = () => {
  let citiesHTML = '<ol>';

  for (const city of cities) {
    citiesHTML += `<li>${city.name}</li>`;
  }

  citiesHTML += '</ol>';

  return citiesHTML;
};

/* 
    - This function will need the walker information. It will take (1) parameter
    - Define a function that will get ALL objects in the walkerCities array that are for the walker that was clicked on. 
    - It should RETURN an ARRAY of ALL matching objects.
*/
export const findWalkerCitiesByWalker = (walker) => {
  // Define an empty array to store all of the assignment objects
  let assignments = [];
//   walkerCities contains a copy of the array walkerCities found in database.js
  const walkerCities = getWalkerCities();
  // Iterate the array value of walkerCities
  for (const assignment of walkerCities) {
    // Check if the primary key of the walker equals the foreign key on the assignment
    // IF it does then add the current object to the array of assignments
    if (assignment.walkerId === walker.walkerId) {
      assignments.push(walker);
    }
  }
  return assignments;
};



// ➡️ Define a function that builds a string of city names. Needs a parameter for assignments array.
//      The array walkerCities is aka - "Assignments"
export const assignedCityNames = (assignments) => {
  // Define an empty string that will get appended with the matching assignments array
  let cityNames = '';

  // Iterate the array of assignment objects
  for (const assignment of assignments) {
    // For each assignment, iterate the cities array to find the match
    for (const city of cities) {
      if (city.id === assignment.cityId) {
        cityNames += `$${city.name}`
      }
    }
  }

  return cityNames;
};




import { getCities, getWalkers } from './database.js';
import { findWalkerCitiesByWalker } from './CityList.js';
import { assignedCityNames } from './CityList.js';

const allWalkers = getWalkers();
const allCities = getCities();

// ⚠️ EVENT LISTENER - Listening for "click" on ANY of the Walkers
document.addEventListener('click', (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith('walker')) {
    const [, walkerId] = itemClicked.id.split('--'); // Example = "walker--3" --> ["walker", "3"]
    //const [name, walkerId] = itemClicked.id.split('--') (["walker", "3"])

    /* 
                            ⬇️ Another Way To Break It Down
                            const itemId = itemClicked.id
                            console('itemId', itemId)
                            const parts = itemId.split('--')
                            console('parts', parts)
                            const walkerId = parts[1]
                            */

    // "findWalkerCitiesByWalker" takes (1) parameter = walkerId (which is accessed from above)
    const walkerAssignmentsArray = findWalkerCitiesByWalker(walkerId);
    // "assignedCityNames" takes a single parameter (walkerAssignmentsArray)
    //      "cities" is storing the return value of the assignedCityNames function
    const cities = assignedCityNames(walkerAssignmentsArray);

    // When a walker is clicked on alert user of the walker's name and the cities they service
    let foundWalker;
    for (const walker of allWalkers) {
      if (walker.id === parseInt(walkerId)) {
        foundWalker = walker;
      }
    }
    if (foundWalker) {
      window.alert(`${foundWalker.name} services: ${cities}`);
    }
  }
});

export const Walkers = () => {
  // Create an empty string with a <ul> inside of it
  let walkerHTML = '<ul>';

  // Iterate the array of allWalkers
  for (const walker of allWalkers) {
    walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`;
  }
  // Close the walkerHTML with the closing </ul> tag
  walkerHTML += '</ul>';
  // Return the walkerHTML string
  return walkerHTML;
};

import { getWalkers } from "./database.js"

const allWalkers = getWalkers()

// ⚠️ EVENT LISTENER - Listening for "click" on ANY of the Walkers
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
          const [, walkerId] = itemClicked.id.split('--');
          // ⬇️ PREVIOUS CODE
          // for (const walker of allWalkers) {
          //     if (walker.id === parseInt(walkerId)) {
          //         window.alert(`${walker.name} services ${walker.city}`)
          //     }
          // }
          // ➡️ PUTTING IT ALTOGETHER - (UPDATED CODE BASED ON CHANGES TO DATABASE)
          // Iterate the array of walkers
          for (const walker of allWalkers) {
            if (walker.id === parseInt(walkerId)) {
              // findWalkerCitiesByWalker takes a single parameter (walker)
                // "assignments" contains the results of the findWalkerCitiesByWalker function
              const assignments = findWalkerCitiesByWalker(walker);
              // assignedCityNames takes a single parameter (assignments)
                // "cities" contains the results of the assignedCityNames function
              const cities = assignedCityNames(assignments);
              // When a walker is clicked on alert user of the walker's name and the cities they service
              window.alert(`${walker.name} services ${cities}`);
            }
          }
        }
    }
)



export const Walkers = () => {
    // Create an empty string with a <ul> inside of it
    let walkerHTML = "<ul>"

    /* 
    - Iterating the array of walker objects with a for/of loop (allWalkers is the result of the imported function that is now stored in the variable allWalkers, found above ⬆️))
        - Place the "id" of the walker inside of an <li> using string interpolation
        - Place the walker's name in between the <li></li> using string interpolation so that each walker' name will show up as a list item
        - Append all of that to the walkerHTML string
    - Append to the walkerHTML the closing </ul>
    - RETURN the walkerHTML string
    */
    for (const walker of allWalkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`;
    }
// Close the walkerHTML with the closing </ul> tag
    walkerHTML += "</ul>"
    // Return the walkerHTML string
    return walkerHTML
}



import { getPets, getWalkers } from "./database.js"



// Get copy of state for use in this module
// allPets contains the result of the getPets function
// allWalkers contains the result of the getWalkers function
// const walkerAssignments = findWalkerCitiesByWalker()
const allPets = getPets()
const allWalkers = getWalkers()
// const cityNames = assignedCityNames()




/* 
➡️ WHAT DOES THIS FUNCTION DO?
    - This function takes in the returned value of "allPets" and "allWalkers", both arrays of objects
    -  
*/

const findPetWalker = (pet) => {
    let petWalker
    
    // Iterate the array of allWalkers
    for (const walker of allWalkers) {
        
            
            // IF the id of the walker === the walkerId of any of the pets
            if (walker.id === pet.walkerId) {
                
                petWalker = walker
            }
        
    }
    
    return petWalker
}

export const Assignments = () => {
    let assignmentHTML = '<ul>';
    
    
    // For each current pet of allPets (Imported function "allPets" found above)
    
    for (const currentPet of allPets) {
            
        
        /* 
        - Invoke the findPetWalker function
        - It takes (2) arguments as input
        - currentPet (which is the iterator of allPets) and allWalkers (an array of Objects that is the returned result of the getWalkers function, found above)
        */
       const currentPetWalker = findPetWalker(currentPet, allWalkers)
       
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name}.
            </li>
        `
    }


    assignmentHTML += '</ul>'

    return assignmentHTML
}

// const returnedAssignments = Assignments()
// console.log(returnedAssignments);


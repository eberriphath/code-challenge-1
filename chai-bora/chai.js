//function for chai ingredients

function calculateChaiIngredients(numberOfCups){
    const teaLeaves = numberOfCups
    const water = numberOfCups * 200
    const sugar = numberOfCups * 2
    const milk = numberOfCups * 50
//Amount of ingredients should change with the number of cups prompted.

    //output for the ingredients
    console.log(`To make ${numberOfCups} cups of kenyan chai,you will need:`)
    console.log(`water: ${water} ml,`)
    console.log(`milk: ${milk} ml,`)
    console.log(`Tea leaves (MAJANI) ${teaLeaves} tablespoons`)
    console.log(`Sugar (SUKARI): ${sugar} teaspoons.`)
    console.log("BARAKA TELE ENJOY!!!")
}
 
//calling the function
const userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
calculateChaiIngredients(Number(userInput));

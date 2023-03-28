// importing module to check the price according to kilometers
const checkPrice = require('./vehicleKilometer');

// importin g prompt module to get user input
const prompt = require('prompt-sync')();

//Displaying welcome message
console.log("Welcome to PAY-AS-YOU-DRIVE INSURANCE\n")

//Input kilometers from user from console
let kilometers = prompt("Enter kilometers driven by vehicle: ")

//Let price is the variable returned by the module function
let price = checkPrice.calculateCost(kilometers);

//Printing the result
console.log("The total price is :" , price);

//Printing the exit message as thank you
console.log("\n Thank you");
"use strict";
//            🚀 Day 30 Challenge: Start Coding! 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// Question 88: 
// Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded
// to the nearest integer.
function roundToNearestInteger(num) {
    return Math.round(num); //round the number
}
console.log(roundToNearestInteger(5.5)); // Shows 6
console.log(roundToNearestInteger(5.4)); // Shows 5
// Question 89: 
// Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and 
// converts it into an actual number type.
function convertStringToNumber(str) {
    return parseFloat(str);
    return parseInt(str);
}
console.log(convertStringToNumber("123")); // Shows 123
console.log(convertStringToNumber("123.45")); // Shows 123.45
// Question 90
// Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
function checkIfValueIsNaN(value) {
    return isNaN(value);
}
console.log(checkIfValueIsNaN("Salam"));
console.log(checkIfValueIsNaN(123));

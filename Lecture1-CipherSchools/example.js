// console.log("My console statement")


// // Datatypes

// // Syntax and declaration

// var score = 10; // ESS - Ecma
// let result = 50; // ES6 - Ecmascript 2015
// const PI = 3.14; // ES6

// score = 15;
// result = 55;
// PI = 3.26;

// console. log(score);
// console. log(result);
// console. log(PI) ;

/**
 * DATATYPES : 
 * 1.Number
 * 2.String
 * 3.Boolean
 * 4.Null
 * 5.Underdefined
 * 6.Objects
 * 7.Symbols
 * Loosely types
 */

 let score = 10; //Number
 let result = '10'; //String

 // BEDMAS (Bracket,Exponent,Divison,Multiplication,addition,Subtraction)
let finalScore = score + result; // Concatenating with string
let penalty = score - result; // Mathematical
let totalGames = 'five';

let avgScore = finalScore / totalGames;

console. log(finalScore, penalty);
console.log(avgScore);

//typeof
console. log(typeof finalScore);
console.log(typeof penalty);
console. log(typeof avgScore);

let value =(finalScore**2)*10/(penalty+totalGames)

console.log(penalty*totalGames);
console.log(value); // value = NaN(Not a number)


// 1. Write a program to print Hello world in console? 

console.log("Hello world");


//2. Write a program to Add two Numbers ? 

var addNumber=(a,b)=>{
  return a+b;
}
console.log(addNumber(2,5));


// 3. Write a program to Find Square root ? 

var findSquareroot=(a)=>{
  return a*a;
}
console.log(findSquareroot(5));

// 4. Write a program to check the input number is Odd or Even? 

var number=3;
if (number % 2 == 0) {
  console.log (number + " is even.");
} else {
  console.log(number + " is odd.");
}

// 5. Write a program to generate Random Number? 

function generateRandomNumber() {
  return Math.random() * Number.MAX_VALUE;
}
const randomNumber = generateRandomNumber();
console.log(randomNumber);


// 6. Write a program to Largest of three Numbers? 

function largestOfThree(a, b, c) {
  return Math.max(a, b, c);
}

console.log( largestOfThree(10, 20, 30));


// 7. Write a program to Print your Name in console for 20 times? 
const myName = "narmadha"; 
for (let i = 0; i < 20; i++) {
  console.log(myName);
}


// 8. Write a  program to check if the input numbers A and B have same last digit? 

function sameLastDigit(a, b) {
  return a % 10 === b % 10;
}
console.log(sameLastDigit(23, 2353)); 


// 10. Write a program to add append two input Arrays A and B in C and print all Array contents of C in console.  
const A = [1, 2, 3];
const B = [4, 5, 6];
const C = [...A, ...B];
console.log(C);

// 9. Write a program to replace Characters of a Input String? 
let str = prompt("Enter a string: ");
let charToReplace = prompt("Enter character to replace: ");
let replacementChar = prompt("Enter replacement character: ");
let result = str.replace(charToReplace, replacementChar);
console.log("Original String: " + str);
console.log("Result String: " + result);

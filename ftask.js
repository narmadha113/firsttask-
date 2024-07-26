

// 1. Write a program to print Hello world in console? 
alert("1. Write a program to print Hello world in console?"+" "+"check console");
console.log("Hello world");


//2. Write a program to Add two Numbers ? 


function add(a, b) {
  a = parseInt(prompt("Enter First Number:"));
  b = parseInt(prompt("Enter Second Number:"));
  var total = a + b;
  alert("Total: " + total);
  return total;
}



// 3. Write a program to Find Square root ? 
function square(a) { a = parseInt(prompt("Enter Number:")); return alert("Total: " + parseInt(a * a)); } 


// 4. Write a program to check the input number is Odd or Even? 
function check(a) {
  a = parseInt(prompt("Enter Number:"));
if (a % 2 == 0) {
  alert("even");
} else {
  alert("odd");
}
}


// 5. Write a program to generate Random Number? 

function Randomno() {
  alert( Math.random() * Number.MAX_VALUE);
}


// 6. Write a program to Largest of three Numbers? 

function maxno(a, b, c) {
  a = parseInt(prompt("Enter Number:"));
  b = parseInt(prompt("Enter Number:"));
  c = parseInt(prompt("Enter Number:"));
  alert("maxno:" +Math.max(a, b, c));
}



// 7. Write a program to Print your Name in console for 20 times? 

function loop(a) {
  a =(prompt("Enter name:"));
  for (let i = 0; i < 20; i++) {
 console.log("check consolve")

}
}


// 8. Write a  program to check if the input numbers A and B have same last digit? 

function checkno() {
  var a = parseInt(prompt("Enter First Number:"));
  var b = parseInt(prompt("Enter Second Number:"));
  
  if (a % 10 === b % 10) {
    alert("same");
  } else {
    alert("not same");
  }
}


// 10. Write a program to add append two input Arrays A and B in C and print all Array contents of C in console. 

function addarray() { 
const A = [1, 2, 3];
const B = [4, 5, 6];
const C = [...A, ...B];
alert(C);
}

function changecahr() {
let str = prompt("Enter a string: ");
let charToReplace = prompt("Enter character to replace: ");
let replacementChar = prompt("Enter replacement character: ");
let result = str.replace(charToReplace, replacementChar);
// console.log("Original String: " + str);
alert("Result String: " + result);
}

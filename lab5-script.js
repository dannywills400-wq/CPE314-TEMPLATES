let name = "JONES DANIEL WILLIAMS";
let age = 20;
let major = "Computer Engineering";

console.log("Student Name: " + name);
console.log("Age: " + age);
console.log("Major: " + major);

function greet(user) {
    alert("Welcome, " + user + "!");
}

greet(name);

function calculateSum(num1, num2) {
    return num1 + num2;
}

alert("The sum of 15 and 25 is " + calculateSum(15, 25));

let number = parseInt(prompt("Enter any integer:"));

if (!isNaN(number)) {
    if (number % 2 === 0) {
        alert(number + " is an even number.");
    } else {
        alert(number + " is an odd number.");
    }
} else {
    alert("Invalid input.");
}

let fruits = ["Apple", "Banana", "Orange", "Mango", "Grape"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

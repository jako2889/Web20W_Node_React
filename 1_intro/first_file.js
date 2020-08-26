// Exercise 1
const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log("My first name " + firstName + " and my last name is " + lastName);
console.log(`My first name ${firstName} and my last name is ${lastName}`);

// Exercise 2 - Numbers and Strings

const year = "2019";
const number = 1;

// Add the year plus the number
// The result should be 2018
// You cannot touch line 1 or 2

console.log(parseInt(year) + 1);

//Exercise 3 
const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

console.log(parseFloat(numberOne) + parseFloat(numberTwo));

// Exercise 4 - Add the numbers and the total with 2 decimals

let parsedNum1 = parseFloat(numberOne);
let parsedNum2 = parseFloat(numberTwo);

console.log((parsedNum1 + parsedNum2).toFixed(2));

// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

let arr = [one, two, three];
const arrAvg = arr.reduce((a,b) => a + b) / arr.length;

let sum = 0;
for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("With for loop ", (sum / arr.length).toFixed(5));

console.log("With reduce method ", arrAvg.toFixed(5));

// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(letters.charAt(2));


// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
console.log(fact.replace("j", 'J'));

// --------------------------------------


// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message 

console.log(myObj.message);

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

let infoObj = {
    name: "Jakob",
    age: "26"
}


// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};

stackOverflow.isAllowed = true;

console.log(stackOverflow);

// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {"description": "The best song in the world."}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description;

thisSong.about = "Just a tribute";

console.log(thisSong);


// --------------------------------------

// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters2 = ["a","b","c"];
// show b in the console 

console.log(letters2[1]);
// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  


friends.push({key: "jakob"}, {key: "bobo"}, {key: "magnus"});
console.log(friends);

// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value).

let index = significantMathNumbers.indexOf(1729); 

console.log(index);


// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocolla"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements rocolla and kale


diet.splice(2, 0, 'hamburger', "soda", "pizza");

console.log(diet);
// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 


diet.pop();

console.log(diet);


// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

let dinnerTray = [...diet];

console.log(dinnerTray);

// --------------------------------------
// Exercise 7 - For loop

const letters3 = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

for(let i = 1; i < letters3.length; i+=2){
    console.log(letters3[i]);
}

// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 6 || numbers[i] < 0){
        console.log(numbers[i]);
    }else {
        discardedNumbers.push(numbers[i]);
        console.log("discarded: " + discardedNumbers);
    }
}

// --------------------------------------
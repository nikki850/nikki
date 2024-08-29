var firstName = "Alekya";   
let lastName = "Kola";     
const age = 20;            
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);

var globalVar = "Global Scope"; // Global scope

function outerFunction() {
    let outerVar = "Outer Function Scope";

    function innerFunction() {
        let innerVar = "Inner Function Scope";
        console.log(globalVar); // Accessible (global scope)
        console.log(outerVar);  // Accessible (outer function scope)
        console.log(innerVar);  // Accessible (local scope)
    }

    innerFunction();
    // console.log(innerVar); // Uncaught ReferenceError: innerVar is not defined
}

outerFunction();
let num1 = 10;
let num2 = 3;
let add = num1 + num2;
let sub= num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;

console.log("Addition:", add);
console.log("Subtraction:", sub);
console.log("Multiplication:", mul);
console.log("Division:", div);
console.log("Modulus:", mod);

let result = (num1 + num2) * (num1 - num2);
console.log("Result with parentheses:", result);

// Comparison Operators
console.log("10 == '10':", 10 == '10');
console.log("10 === '10':", 10 === '10');
console.log("10 != '5':", 10 != '5');
console.log("10 !== '10':", 10 !== '10');
console.log("10 > 5:", 10 > 5);
console.log("10 < 20:", 10 < 20);
console.log("10 >= 10:", 10 >= 10);
console.log("10 <= 5:", 10 <= 5);

// Logical Operators
let a = true, b = false;
console.log("a && b:", a && b);
console.log("a || b:", a || b);
console.log("!a:", !a);
let number = 100;          
let string = "Hello";      
let boolean = true;        
let null_val = null;         
let undefined_val;            

console.log("Number:", number, "Type:", typeof number);
console.log("String:", string, "Type:", typeof string);
console.log("Boolean:", boolean, "Type:", typeof boolean);
console.log("Null:", null_val, "Type:", typeof null_val);
console.log("Undefined:", undefined_val, "Type:", typeof undefined_val);

// Object Data Type
let person = {
    firstName: "alekya",
    lastName: "kola",
    age: 20,
    greet: function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    }
};

console.log("Person Object:", person);
person.greet();
person.age = 21; 
console.log("Updated Age:", person.age);
// Explicit Type Conversion
let strNum = "123";
let convertedNum = Number(strNum);
let boolValue = Boolean(1);
console.log("Converted Number:", convertedNum);
console.log("Converted Boolean:", boolValue);

// Implicit Type Coercion
let implicitCoercion = "5" + 2; // String concatenation due to + operator
console.log("Implicit Coercion Result:", implicitCoercion); // "52"
let comparisonCoercion = "5" == 5;
console.log("'5' == 5:", comparisonCoercion); // true
// String Manipulation
let t1 = "Hello";
let t2 = "World";
let concatenated = t1 + " " + t2;
console.log("Concatenated String:", concatenated);
console.log("Character at Index 1:", t1[1]);
console.log("Length of String:", t1.length);
console.log("Substring:", t1.substring(1, 3));
var firstName = "Alekya";   
let lastName = "Kola";     
const age = 20; 
// Template Literals
let templateLiteral = `Hello, ${firstName} ${lastName}.
You are ${age} years old.`;
console.log("Template Literal:", templateLiteral);
// If-Else Statements
let numberToCheck = 15;

if (numberToCheck < 10) {
    console.log("The number is less than 10");
} else if (numberToCheck > 10 && numberToCheck < 20) {
    console.log("The number is between 10 and 20");
} else {
    console.log("The number is 20 or greater");
}

// Switch Statements
let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("Bananas are yellow.");
        break;
    case "apple":
        console.log("Apples are red or green.");
        break;
    case "orange":
        console.log("Oranges are orange.");
        break;
    default:
        console.log("Unknown fruit.");
}
"use strict"; // Enables strict mode

// Try to assign a value to an undeclared variable (will throw an error)
try {
    undeclaredVar = "This will cause an error in strict mode";
} catch (error) {
    console.log("Error in strict mode:", error.message);
}
// Function Declaration
function addNumbers(x, y) {
    return x + y;
}

let sum = addNumbers(10, 20);
console.log("Sum:", sum);

// Function Expression
let multiplyNumbers = function(x, y) {
    return x * y;
};

let product = multiplyNumbers(10, 20);
console.log("Product:", product);
// Function Declaration
function addNumbers(x, y) {
    return x + y;
}

let sum = addNumbers(10, 20);
console.log("Sum:", sum);

// Function Expression
let multiplyNumbers = function(x, y) {
    return x * y;
};

let product = multiplyNumbers(10, 20);
console.log("Product:", product);

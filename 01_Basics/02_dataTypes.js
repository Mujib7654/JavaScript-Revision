"use strict"; //treat all JS code as newer version

// alert(3+3) //we are using node.js, not browser, it works inside the document
// alert("helloJavaScript")

// console.log(3+3) console.log("Mujib") //getting error because of semicolon
console.log(3+3); console.log("Mujib")

//code readability should be high
console.log(3+3) 
console.log("Mujib")

let name = "Mujib"
let age = 18
let isLoggedIn = true

//primitive data types

/*
    1. number => range => 2 to power 53
    2. bigInt => deal with large number
    3. string => ""/ ''
    4. boolean => true/false
    5. null => stand alone value => empty value
    Ex: let city = null;
    6. undefined => variable assigned, but don't assign any value in it
    ex: let state;
*/ 

//non primitive data types

/*
    //object
*/

console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof isLoggedIn); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object

/*
    Note: typeof null is object
    The reason why typeof null returns "object" in JavaScript is because null is a special value in JavaScript that represents the intentional absence of any object value. It is often used to signify an empty reference to an object.
*/ 


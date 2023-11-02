let score = 33
//check dataTypes
console.log(typeof score)  //number
//Alternate way
console.log(typeof(score))  //number


let run = "33"
//check dataTypes
console.log(typeof run)  //string
//convert string to number
let valueInNumber = Number(run)
console.log(typeof valueInNumber)  //number


let goal = "33abc"
//check dataTypes
console.log(typeof goal)  //string
//convert it into number
let valueInNumber1 = Number(goal)
console.log(typeof valueInNumber1)  //number
console.log(valueInNumber1)  //NaN


//null
let run1 = null
//check dataTypes
console.log(typeof run1)  //object
//convert object to number
let valueInNumber2 = Number(run1)
console.log(typeof valueInNumber2)  //number
console.log(valueInNumber2) //0


//undefined
let run2 = undefined
//check dataTypes
console.log(typeof run2)  //undefined
//convert undefined to number
let valueInNumber3 = Number(run2)
console.log(typeof valueInNumber3)  //number
console.log(valueInNumber3) //NaN


//boolean
let run3 = true
//check dataTypes
console.log(typeof run3)  //boolean
//convert boolean to number
let valueInNumber4 = Number(run3)
console.log(typeof valueInNumber4)  //number
console.log(valueInNumber4) //1


//string
let name = "Mujib"
//check dataTypes
console.log(typeof name)  //string
//convert string to number
let valueInNumber5 = Number(name)
console.log(typeof valueInNumber5)  //number
console.log(valueInNumber5) //NaN



// "33" => 33
// "33abh" => NaN
// true => 1 ; false => 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)  //boolean
console.log(booleanIsLoggedIn)    //true

//empty string to boolean
let isLoggedIn1 = ""
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(typeof booleanIsLoggedIn1)  //boolean
console.log(booleanIsLoggedIn1)    //false

//string to boolean
let isLoggedIn2 = "Mujib"
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(typeof booleanIsLoggedIn2)  //boolean
console.log(booleanIsLoggedIn2)    //true


// 1 => true; 0 => false
// "" => false
// "Mujib" => true


//number to string
let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)  //string
console.log(stringNumber) //33

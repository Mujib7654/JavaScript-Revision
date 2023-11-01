//Keywords: Let, Var and const

const accountId = 144553;
let accountEmail = "mujibullahinami26@gmail.com";
var accountPassword = "12345";
accountCity = "Kolkata";

//lets try to change the value
// accountId = 5699;    not allowed

//print it
//console.log(accountId);  //144553
//getting error : Assignment to constant variable.

accountEmail = "mujib@gmail.com";
accountPassword = "244466";
accountCity = "Delhi";

console.log(accountId, accountEmail, accountPassword, accountCity);

//output in table form
console.table([accountId, accountEmail, accountPassword, accountCity]);

/*
    var and let are both used to declare variables, but the main difference is the scope of the variables they declare. Variables declared with var are function-scoped or globally scoped, while let declarations are block-scoped. That means that a variable declared with var can be accessed anywhere within the current function or global scope, while a variable declared with let can only be accessed within the block it was declared in. This can be useful for preventing variable declarations from accidentally colliding or overwriting one another.
*/

let accountState;
console.log(accountState);  //undefined

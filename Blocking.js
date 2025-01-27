const crypto = require("node:crypto");

console.log("Hello world");

let a = 1078698;
let b = 20986;
function multiplyFn(x,y){
    const result = a * b;
    return result;
}
let c = multiplyFn(a,b);
console.log("Multiplication result is: ", c);
//pbkdf2 - password base key Deravative function

//async function
crypto.pbkdf2("password" , "salt", 5000000 , 50 , "sha512", (err , key) => {
    console.log("Second key is generated");
});

//synchronous function - will block the main thread - dont use it
crypto.pbkdf2Sync("password" , "salt", 5000000 , 50 , "sha512");
console.log("First key is generated");



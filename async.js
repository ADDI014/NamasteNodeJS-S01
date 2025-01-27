const fs = require("fs");
const https = require("https");

let a = 1078698;
let b = 20986;

https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("fetched data successfully");
});

setTimeout(()=>{
    console.log("SetTimeout Called after 5 second");
},5000);

fs.readFile("./File.txt","utf8",(err,data) => {
    console.log("File Data: ",data);
})

function multiplyFn(x,y){
    const result = a * b;
    return result;
}
let c = multiplyFn(a,b);
console.log("Multiplication result is: ", c);


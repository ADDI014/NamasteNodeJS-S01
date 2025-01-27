const fs = require("fs");

const a = 100;

setImmediate(() => console.log("SetImmediate"));

fs.readFile("./file.txt", "utf8", () => {
    console.log("File Reading CB");
});


setTimeout(() => console.log("Timer expired"),0);

function printA() {
    console.log("a", a);
}
printA();

console.log("last line of the line");



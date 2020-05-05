const fs = require("fs");
// console.log(process.argv[0], "\n", process.argv[1]);
let result = "";
result = process.argv[2];
var buf = fs.readFileSync(result);
const str = buf.toString();
console.log(str.split("\n").length - 1);

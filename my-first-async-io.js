const fs = require("fs");
let result = "";
result = process.argv[2];
fs.readFile(result, function (err, data)  {
  if (err) {
      return console.log(err)
  }
  const lines = data.toString().split("\n").length - 1;
  console.log(lines);
});

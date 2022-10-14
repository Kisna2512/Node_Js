const fs = require("fs");
const { fileURLToPath } = require("url");

fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log(err, data);
});

console.log("hello");

fs.writeFile("file.txt", "This is data", () => {});

console.log("finished reading file");

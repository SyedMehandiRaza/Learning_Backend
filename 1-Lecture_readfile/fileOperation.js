const fs = require("fs");

// //  To read file content using blocking code.
// console.log("Starting to read ");

// const buffer = fs.readFileSync("data.txt", {encoding: "utf8"});
// console.log(buffer)

// Create a file and writing a file
try {
  fs.writeFileSync("employee.txt", "Name: Syed, Age: 23, Position: Student")
} catch (error) {
  console.log(error)
}

// Append another employee data
fs.appendFileSync('employee.txt',"Name: Mehandi, Age:22, Position:Manager");

// Deleting a file
try {
  fs.unlinkSync("employee.txt")
} catch (error) {
  console.log("File does not file")
}

console.log("This is another operation being perfomed");
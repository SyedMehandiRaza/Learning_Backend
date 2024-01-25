// 1. import readLine 
const readline = require("readline");

// 2. Configure interface to connect with terminal/command line.

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// 3. reading values
interface.question("Enter the first number",(num1) => {
  interface.question("Enter the second number", (num2) => {
    // num1, num2 
    const sum = Number(num1) + Number(num2) ;
    console.log(sum);
  })
} )
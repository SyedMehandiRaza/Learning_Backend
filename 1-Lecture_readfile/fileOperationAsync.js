const fs = require('fs');
const path = require('path');

const filePath = path.join('src', 'home', 'data.txt');

// Reading data
fs.readFile(filePath, (err, data)=> {
if(err){
  console.log(err);
}else{
  console.log(data.toString());
}
});

// // Write data

// fs.writeFile('employee.txt','New Employee', (err) => {
//   if (err) {
//     console.log(err);
//   }else{
//     console.log('File is written');
//   }
// })

// console.log('this is another operation');

// // Append Operation 
// fs.appendFile('employee.txt', '\nAnother employee',(err) => {
//   if(err){
//     console.log(err);
//     }else{
//       console.log('File is append');
//     }
// });

// Delete
fs.unlink('employee.txt',(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log('File Deleted');
  }
}) 
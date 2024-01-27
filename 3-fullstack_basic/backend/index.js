// const express = require('express');
import express from 'express';

const app = express();

// app.get('/', (req,res) => {
//   res.send('Server is ready')
// });

app.get('/api/jokes', (req,res) => {
  const jokes = [
    { name: 'John Doe', class: '10A', rollNo: '101' },
    { name: 'Jane Smith', class: '10B', rollNo: '102' },
    { name: 'Alice Johnson', class: '10C', rollNo: '103' },
    { name: 'Bob Williams', class: '10A', rollNo: '104' },
    { name: 'Charlie Brown', class: '10B', rollNo: '105' }
  ];
  res.send(jokes)
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
})
require('dotenv').config();

const express = require('express')
// import express from 'express';

const app = express()

const port = 6000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
  res.send('SyedMehandiRaza')
})

app.get('/login', (req,res) => {
  res.send('<h1> Please Login at Syed </h1>')
})

app.get('/nikal', (req, res) => {
  res.send('<h2>Bhai ja yaar</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
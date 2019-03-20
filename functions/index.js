const functions = require('firebase-functions');
const express = require('express');
const app=express();
app.get('/:fn',(req,res)=>{
const date = new Date();
const hours = date.getHours();
const mins=date.getMinutes();
const secs=date.getSeconds();
  res.send(`
    <!doctype html>
    <head>
      <title>Time</title>
      <link rel="stylesheet" href="/style.css">
      <script src="/script.js"></script>
    </head>
    <body>
      <p>In London, the clock strikes:
        <span id="bongs">${hours} : ${mins} : ${secs}</span></p>
      <button onClick="refresh(this)">Refresh</button>
    </body>
  </html>`);
});

app.get('/:fn/:name',(req,res)=>{
const date = new Date();
const hours = date.getHours();
const mins=date.getMinutes();
const secs=date.getSeconds();
  res.send(`
    <!doctype html>
    <head>
      <title>Time</title>
      <link rel="stylesheet" href="/style.css">
      <script src="/script.js"></script>
    </head>
    <body>
      <p>In ${req.params.name}, the clock strikes:
        <span id="bongs">${hours} : ${mins} : ${secs}</span></p>
      <button onClick="refresh(this)">Refresh</button>
    </body>
  </html>`);
});

exports.fun=functions.https.onRequest(app);
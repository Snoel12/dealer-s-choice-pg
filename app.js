const express = require("express");
const app = express();
const pg = require("pg");
const client = new pg.Client("postgress://localhost/villain");
const port = process.env.port || 3000;
console.log("hellow world");

const setUP = async () => {
  try {
    await client.connect();
  } catch (ex) {
    console.log(ex);
  }
};
setUP();
app.get("/", async (req, res, next) => {
  const data = client.query("SELECT * FROM ");
  res.send(` <!DOCTYPE html>
  <html>
  <head>
      <title> The Villains </title>
      <link rel = "stylesheet" type= 'text/css' href ='./style.css'/>
  </head>
  <body>
  <nav>
  <a href= '/' > Home </a>
  <a href ='/users'> Users </a>
  </nav>
  <div>
  <h1 > The Villains </h1>
  <ul>
    
  </ul>
  </div>
  </body>
  
  </html>
  
  `);
});

app.get("/users/:id", (req, res) => {
  res.send(` <!DOCTYPE html>
  <html>
  <head>
      <title> The Villains </title>
      <link rel = "stylesheet" type= 'text/css' href ='./style.css'/>
  </head>
  <body>
  <nav>
  <a href= '/' > Home </a>
  <a href ='/users'> Users </a>
  </nav>
  <div>
  <h1 > The Villains </h1>
  <ul>
    
  </ul>
  </div>
  </body>
  
  </html>
  
  `);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
//setupx
//data layerx
//express app
//main route
//detail route

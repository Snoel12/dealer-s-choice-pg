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
  const data = (await client.query("SELECT * FROM villains")).rows;
  console.log(data);
  res.send(` <!DOCTYPE html>
  <html>
  <head>
  
      <title> The Villains </title>
      <link rel = stylesheet href = styles.css> 
  </head>
  <body>
  <nav>
  <a href= '/' > Home </a>
  
  </nav>
  <div>
  <h1 > The Villains </h1>
  <ul>
  ${data
    .map(
      (villain) =>
        `<li> <a href = /villain/${villain.id}> ${villain.alias} </a>  </li>`
    )
    .join("")}
  </ul>
  </div>
  </body>
  
  </html>
  
  `);
});

app.get("/villain/:id", async (req, res) => {
  let pointer = req.params.id;
  const data = (
    await client.query(
      "SELECT * FROM villains WHERE villains.id = $1",

      [pointer]
    )
  ).rows[0];

  res.send(` <!DOCTYPE html>
  <html>
  <head>
  <link rel = stylesheet href = styles.css>
      <title> The Villains </title>
      
  </head>
  <body>
  <nav>
  <a href= '/' > Home </a>
  
  </nav>
  <h1 id='h1'> ${data.alias} </h1>
  <table id = 'sheet'> 
  <tr>
   <th> first name</th>
   <th> last name</th>
  </tr>
  <th> ${data.name} </th>
  <th> ${data.surname} </th>
  <tr> 
   
  </tr>
  

  
  </table>
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

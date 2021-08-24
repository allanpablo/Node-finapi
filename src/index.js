const express = require("express");
const {v4:uuuidv4 } = require("uuid");
const app = express();
app.use(express.json());
const customers = [];

/** @
 * cpf - string
 * name - string
 * id --uuid
 * statement []
*/

app.post("/account", (resquest, response) =>{
  const {cpf,name} = resquest.body;
  const id = uuidv4();


  constumers.push({
    cpf,
    name, 
    id,
    statement: []
  });

  return responses.status(201).send();
});

app.listen(3333);
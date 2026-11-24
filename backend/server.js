const express = require("express");


const app = express();


const PORT = 3000;


app.use(express.static("frontend"));


app.listen(PORT, () => {
    
 console.log('Servidor  executando em http://localhost:3000');});
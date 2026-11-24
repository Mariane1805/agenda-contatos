const { response } = require("express");

fetch("/contatos")
.then (response => response.json())
.then (data =>{
    mensagem.textContent = JSON.stringify(data);
});
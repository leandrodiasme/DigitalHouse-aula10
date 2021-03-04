const express = require("express");
const app = express();

const usuarios = ["Leandro", "José", "João"];

// Root Params
app.get("/usuarios", (req, res) => {
  return res.json(usuarios);
});

// Query Params
app.get("/users", (req, res) => {
  const { nome } = req.query;
  let listaRetorno = usuarios.filter((i) =>
    i.includes(nome || "Não encontrado")
  );
  return res.json(listaRetorno);
});

app.get("/:usuario", (req, res) => {
  const { usuario } = req.params;
  return res.send("Hello world!" + usuario);
});

app.listen(3000, () => {
  console.log("The server is fucking running!");
});

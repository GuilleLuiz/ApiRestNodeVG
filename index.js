//librerias, librerias que se ocuparán
const express = require("express");
const app = express();
const paises = [
  { id: 1, nombre: "Chile", habitantes: 15000000 },
  { id: 2, nombre: "Argentina", habitantes: 23000000 },
  { id: 3, nombre: "Perú", habitantes: 10000000 },
  { id: 4, nombre: "Bolivia", habitantes: 9000000 },
];
//middleware, acciones que se ejecutan antes de levantar el servidor
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//router, todas las rutas creadas
//create(post),read(get),update(put),delete(delete)
//www.greeen.cl/api/v1/users
app.get("/", (req, res) => {
  res.send("inicio...");
});
app.get("/paises", (req, res) => {
  res.send(paises);
});
app.get("/paises/:id", (req, res) => {
  let id = req.params.id;
  let query = req.query;
  let pais = paises.find((e) => e.id == id);
  if (pais) {
    res.send(pais);
  } else {
    res.status(404).send("dato no encontrado...");
  }
});
app.post("/paises", (req, res) => {
  let body = req.body;
  paises.push(body);
  res.send(body);
});
app.put("/paises/:id", (req, res) => {
  let id = req.params.id;
  let body = req.body;
  let pais = paises.find((e) => e.id == id);
  if (pais) {
    pais.nombre = body.nombre;
    pais.habitantes = body.habitantes;
    res.send(pais);
  } else {
    res.status(404).send("dato no encontrado...");
  }
});
app.delete("/paises/:id", (req, res) => {
  let id = req.params.id;
  let pais = paises.find((e) => e.id == id);
  if (pais) {
    paises.splice(paises.indexOf(pais), 1);
    res.send(pais);
  } else {
    res.status(404).send("dato no encontrado...");
  }
});
//server, levantamiento del servidor
const port = 3000;
app.listen(port, () => {
  console.log(`todo ok... puerto http://localhost:${port}`);
});
//process.env.

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
app.use(express.json());
const integrantes = [
  {
    id: 1,
    nombre: "Joseph",
    apellido: "Caza",
    edad: 19,
    email: "joseph.caza@epn.edu.ec",
  },
  {
    id: 2,
    nombre: "Marlon",
    apellido: "Nicolalde",
    edad: 20,
    email: "marlon.nicolalde@epn.edu.ec",
  },
  {
    id: 3,
    nombre: "Michelle",
    apellido: "Suarez",
    edad: 20,
    email: "michelle.suarez@epn.edu.ec",
  },
  {
    id: 4,
    nombre: "Isaac",
    apellido: "Quinapallo",
    edad: 20,
    email: "isaac.quinapallo@epn.edu.ec",
  },
];

app.get("/integrantes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const integrante = integrantes.find((int) => int.id === id);

  if (integrante) {
    res.status(200).json(integrante);
  } else {
    res.status(404).json({ error: "Integrante no encontrado" });
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

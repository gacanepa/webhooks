// 1. Incluir express
const express = require("express")

// 2. Crear la app express y setear el puerto
const app = express();
app.use(express.json());
const PORT = 3000;

// 3. Iniciar la app en el puerto indicado
app.listen(PORT, () => console.log(`🚀 El servidor está corriendo en el puerto ${PORT}`));

app.post("/hook", (req, res) => {
  console.log(req.body);
  res.status(200).end();
});

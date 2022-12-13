// Instrucciones para probar un webhook paso a paso

// 0. Agregar child_process para ejecutar procesos del SO con Node
const { exec } = require("child_process");

// 1. Incluir express
const express = require("express");

// 2. Crear la app express y setear el puerto
const app = express();
app.use(express.json());
const PORT = 3000;

// 3. Iniciar la app en el puerto indicado
app.listen(PORT, () => console.log(`🚀 El servidor está corriendo en el puerto ${PORT}`));

app.post("/hook", (req, res) => {
  console.log(req.body);
  // Asume que dentro del home existe un directorio llamado web que contiene un repositorio
  // Se pueden cambiar los comandos para aprovechar el webhook con otros propósitos, pero
  // sin permitir que provengan del usuario directamente por cuestiones de seguridad.
  exec('cd ~/web && git pull');
  res.status(200).end();
});

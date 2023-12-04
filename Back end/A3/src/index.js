// backend/src/index.js
const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');
const db = require('./db/database');

const app = express();
const port = 3001;

app.use(express.json());

app.use('/api/usuarios', usuarioRoutes);

db.serialize(() => {

  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
});

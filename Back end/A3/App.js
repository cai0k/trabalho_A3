import express from 'express';
import fs from 'fs';
import https from 'https';
const app = express();
const port = 3000;
import cors  from 'cors';
app.use(cors());
app.use(express.json());
import router1 from './src/routes/Usuario.js';
import router2 from './src/routes/Jogo.js';
import router3 from './src/routes/Plataforma.js';

app.use(router1);
app.use(router2);
app.use(router3);

app.listen(port, ()=>console.log("Executando..."))

https.createServer({
  cert: fs.readFileSync('src/SSL/code.crt'),
  key: fs.readFileSync('src/SSL/code.key')
}, app).listen(3001, ()=> console.log("Rodando HTTPS"));
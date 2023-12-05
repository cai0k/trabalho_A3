import {openDb}  from "../../src/db/banco.js";

export async function Tableuser(){
  openDb().then(db=>{
    db.exec('CREATE TABLE IF NOT EXISTS Usuario (id INTEGER PRIMARY KEY, nome TEXT, email TEXT UNIQUE, senha TEXT)')
  })
}

export async function InsertUsuario(req, res){
  let usuario = req.body;
  openDb().then(db=>{
    db.run('INSERT INTO Usuario (nome, email, senha) VALUES (?, ?, ?)',[usuario.nome, usuario.email, usuario.senha]);
  })
  res.json({
    "statuscode": 200
  })
}

export async function updateUsuario(req, res){
  let usuario = req.body;
  openDb().then(db=>{
    db.run('UPDATE Usuario SET nome=?, email=?, senha=? WHERE id=?',[usuario.nome, usuario.email, usuario.senha, usuario.id]);
  })
  res.json({
    "statuscode": 200
  })
}

export async function selectUsuario(req, res){
  let nome = req.body.nome;
  openDb().then(db=>{
    db.get('SELECT * FROM Usuario WHERE nome=?', [nome])
    .then(usuario=>res.json(usuario))
  });
}

export async function deleteUsuario(req, res){
  let nome = req.body.nome;
  openDb().then(db=>{
    db.get('DELETE FROM Usuario WHERE nome=?', [nome])
    .then(usuario=>res.json(usuario))
  });
  res.json({
    "statuscode": 200
  })
}

export async function verificarEmail(req, res) {
  let email = req.body.email;
  try {
  openDb().then(db=>{
    db.get('SELECT * FROM Usuario WHERE email=?', [email])
    .then(usuario=>{
      if (usuario) {
        res.status(401).json({ msg: 'Email ja existente'});
      } else {
        res.json({ emailExistente: false });
      }
    }) 
  });
} catch (error) {
  console.error('Erro ao verificar email:', error);
  res.status(500).json({ error: 'Erro interno do servidor ao verificar o email.' });
}
} 

export async function verificaUsuario(req, res) {
  try {
    let { nome, senha } = req.body;
  openDb().then(db=>{
    db.get('SELECT * FROM Usuario WHERE nome=? AND senha=?', [nome, senha])
    .then(usuario=>{
      if (usuario) {
        res.json({ autenticado: true });
      } else {
        //res.json({ autenticado: false });  
        res.status(401).json({ msg: 'Email ou senha invalido'});
      }
    }) 
  });
} catch (error) {
  console.error('Erro:', error);
  res.status(500).json({ error: 'Erro interno do servidor ao verificar credenciais.'});
}
}
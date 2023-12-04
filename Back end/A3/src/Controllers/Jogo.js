import {openDb}  from "../../src/db/banco.js";

export async function Tablejogo(){
    openDb().then(db=>{
      db.exec('CREATE TABLE IF NOT EXISTS Jogo (id INTEGER PRIMARY KEY, plataforma TEXT, nota DECIMAL, preco DECIMAL, nome TEXT, categorias TEXT, lancamento DATE)')
    })
  }
  
  export async function InsertJogo(req, res){
    let jogo = req.body;
    openDb().then(db=>{
      db.run('INSERT INTO Jogo (nome, plataforma, nota, categorias, preco, lancamento) VALUES (?, ?, ?, ?, ?, ?)',[jogo.nome, jogo.plataforma, jogo.nota, jogo.categorias, jogo.preco, jogo.lancamento]);
    })
    res.json({
      "statuscode": 200
    })
  }
  
  export async function updateJogo(req, res){
    let jogo = req.body;
    openDb().then(db=>{
      db.run('UPDATE Jogo SET nome=?, plataforma=?, nota=?, categorias=?, preco=? WHERE id=?',[jogo.nome, jogo.plataforma, jogo.nota, jogo.id, jogo.categorias, jogo.preco]);
    })
    res.json({
      "statuscode": 200
    })
  }
  
  export async function selectJogo(req, res){
    let nome = req.body.nome;
    openDb().then(db=>{
      db.get('SELECT * FROM Jogo WHERE nome=?', [nome])
      .then(jogo=>res.json(jogo))
    });
  }
  
  export async function deleteJogo(req, res){
    let nome = req.body.nome;
    openDb().then(db=>{
      db.get('DELETE FROM Jogo WHERE nome=?', [nome])
      .then(jogo=>res.json(jogo))
    });
    res.json({
      "statuscode": 200
    })
  }
  
  export async function verificaJogo(req, res) {
    try {
      let nome = req.body.nome;
      if (!nome) {
        return res.status(400).json({ error: 'Por favor, insira o nome do jogo.' });
      }
    openDb().then(db=>{
      db.get('SELECT * FROM Jogo WHERE nome=?', [nome])
      .then(jogo=>{
        if (jogo) {
          res.json({ existe: true });
        } else {
          console.log('Jogo ja existe')
          res.json({ existe: false });
        }
      }) 
    });
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro interno do servidor ao verificar o jogo.' });
  }
  } 
import {openDb}  from "../../src/db/banco.js";

export async function Tablejogo(){
    openDb().then(db=>{
      db.exec('CREATE TABLE IF NOT EXISTS Jogo (id INTEGER PRIMARY KEY, plataforma TEXT, nota DECIMAL, imagem TEXT, preco DECIMAL, nome TEXT, categorias TEXT, lancamento DATE)')
    })
  }
  
  export async function InsertJogo(req, res){
    let jogo = req.body;
    openDb().then(db=>{
      db.run('INSERT INTO Jogo (plataforma, nota, imagem, preco, nome, categorias, lancamento) VALUES (?, ?, ?, ?, ?, ?, ?)',[jogo.plataforma, jogo.nota, jogo.imagem, jogo.preco, jogo.nome, jogo.categorias, jogo.lancamento]);
    })
    res.json({
      "statuscode": 200
    })
  }
  
  export async function updateJogo(req, res){
    let jogo = req.body;
    openDb().then(db=>{
      db.run('UPDATE Jogo SET plataforma=?, nota=?, imagem=?, preco=?, nome=?, categorias=? lancamento=? WHERE id=?',[jogo.plataforma, jogo.nota, jogo.imagem, jogo.preco, jogo.nome, jogo.categorias, jogo.lancamento, jogo.id]);
    })
    res.json({
      "statuscode": 200
    })
  }
  
  export async function selectJogo(req, res){
    const nome = req.body.nome; 
    try {
      const db = await openDb();
      const jogo = await db.get('SELECT * FROM Jogo WHERE nome=?', [nome]);
  
      if (jogo) {
        res.json(jogo);
      } else {
        res.status(404).json({ error: 'Jogo não encontrado' });
      }
    } catch (error) {
      console.error('Erro:', error);
      res.status(500).json({ error: 'Erro interno do servidor ao selecionar o jogo.' });
    }
  }

  export async function selectImgJogo(req, res){
    openDb().then(db=>{
      db.all('SELECT * FROM Jogo')
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
  

  export async function verificarJogo(req, res) {
    let nome = req.body.nome;
    try {
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


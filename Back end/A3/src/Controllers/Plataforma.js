import {openDb}  from "../../src/db/banco.js";

export async function TablePlat(){
    openDb().then(db=>{
      db.exec('CREATE TABLE IF NOT EXISTS Plataforma (id INTEGER PRIMARY KEY, nota DECIMAL, nome TEXT)')
    })
  }
  
  export async function InsertPlat(req, res) {
    const plat = req.body;
    try {
      const db = await openDb();
      await db.run('INSERT INTO Plataforma (nota, nome) VALUES (?, ?)', [plat.nota, plat.nome]);
      res.json({ "statuscode": 200 });
    } catch (error) {
      console.error('Erro durante o cadastro da plataforma:', error);
      res.status(500).json({ error: 'Erro interno do servidor ao cadastrar a plataforma.' });
    }
  }
  
  export async function updatePlat(req, res){
    let plat = req.body;
    openDb().then(db=>{
      db.run('UPDATE Plataforma SET nome=?, nota=? WHERE id=?',[plat.nota, plat.nome, plat.id]);
    })
    res.json({
      "statuscode": 200
    })
  }
  
  export async function selectPlat(req, res){
    let nome = req.body.nome;
    openDb().then(db=>{
      db.get('SELECT * FROM Plataforma WHERE nome=?', [nome])
      .then(plat=>res.json(plat))
    });
  }
  
  export async function deletePlat(req, res) {
    try {
      const nome = req.body.nome;
      console.log("Nome da plataforma a ser excluída:", nome);
      const db = await openDb();
      await db.run('DELETE FROM Plataforma WHERE nome=?', [nome]);
      res.json({
        statusCode: 200,
        message: 'Plataforma excluída com sucesso!',
      });
    } catch (error) {
      console.error('Erro durante a exclusão da plataforma:', error);
      res.status(500).json({
        statusCode: 500,
        message: 'Erro ao excluir a plataforma',
      });
    }
  }
  

  export async function verificaPlat(req, res) {
    const nome = req.body.nome;
    try {
      const db = await openDb();
      const plat = await db.get('SELECT * FROM Plataforma WHERE nome=?', [nome]);
  
      if (plat) {
        res.status(401).json({ msg: 'Plataforma já existente' });
      } else {
        res.json({ existe: false });
      }
    } catch (error) {
      console.error('Erro:', error);
      res.status(500).json({ error: 'Erro interno do servidor ao verificar a plataforma.' });
    }
  }
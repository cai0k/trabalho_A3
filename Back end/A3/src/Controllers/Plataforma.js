import {openDb}  from "../../src/db/banco.js";

export async function TablePlat(){
    openDb().then(db=>{
      db.exec('CREATE TABLE IF NOT EXISTS Plataforma (id INTEGER PRIMARY KEY, nota DECIMAL, nome TEXT)')
    })
  }
  
  export async function InsertPlat(req, res){
    let plat = req.body;
    openDb().then(db=>{
      db.run('INSERT INTO Plataforma (nota, nome) VALUES (?, ?)',[plat.nota, plat.nome]);
    })
    res.json({
      "statuscode": 200
    })
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
  
  export async function deletePlat(req, res){
    let nome = req.body.nome;
    openDb().then(db=>{
      db.get('DELETE FROM Plataforma WHERE nome=?', [nome])
      .then(plat=>res.json(plat))
    });
    res.json({
      "statuscode": 200
    })
  }

  export async function verificaPlat(req, res) {
    let nome = req.body.nome;
    try {
    openDb().then(db=>{
      db.get('SELECT * FROM Plataforma WHERE nome=?', [nome])
      .then(plat=>{
        if (plat) {
          res.status(401).json({ msg: 'Plataforma ja existente'});
        } else {
          res.json({ existe: false });
        }
      }) 
    });
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro interno do servidor ao verificar a plataforma.' });
  }
  } 
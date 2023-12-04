import { Router } from 'express';
import { InsertUsuario, Tableuser, selectUsuario, updateUsuario, deleteUsuario, verificarEmail, verificaUsuario } from '../Controllers/Usuario.js';

const router = Router();

router.get("/", (req, res)=>{
    res.json({
    "statuscode": 200,
    "msg": "Api rodando"
  })
})

Tableuser();
router.post("/cadastrarUser", InsertUsuario);
router.delete("/deletaruser", deleteUsuario);
router.put("/editarUser", updateUsuario);
router.get("/selecionarUser", selectUsuario);
router.post("/verificarEmail", verificarEmail);
router.post("/verificaUser", verificaUsuario);

export default router;

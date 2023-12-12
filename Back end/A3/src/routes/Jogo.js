import { Router } from 'express';
import { InsertJogo, Tablejogo, selectJogo, updateJogo, deleteJogo, verificarJogo, selectImgJogo } from '../Controllers/Jogo.js';

const router = Router();

router.get("/", (req, res)=>{
    res.json({
    "statuscode": 200,
    "msg": "Api rodando"
  })
})

Tablejogo();
router.post("/cadastrarJogo", InsertJogo);
router.delete("/deletarJogo", deleteJogo);
router.put("/editarJogo", updateJogo);
router.get("/selecionarJogo/:nome", selectJogo);
router.get("/selecionarImgJogo", selectImgJogo);
router.post("/verificarjogo", verificarJogo);

export default router;
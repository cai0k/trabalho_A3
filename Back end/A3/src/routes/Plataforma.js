import { Router } from 'express';
import { InsertPlat, TablePlat, selectPlat, updatePlat, deletePlat, verificaPlat } from '../Controllers/Plataforma.js';

const router = Router();

router.get("/", (req, res)=>{
    res.json({
    "statuscode": 200,
    "msg": "Api rodando"
  })
})

TablePlat();
router.post("/cadastrarPlat", InsertPlat);
router.delete("/deletarPlat", deletePlat);
router.put("/editarPlat", updatePlat);
router.get("/selecionarPlat", selectPlat);
router.post("/verificaPlat", verificaPlat);

export default router;
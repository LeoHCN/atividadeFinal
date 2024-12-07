import { Router } from "express";
import ObjetoCtrl from "../Controle/objetoCtrl.js";

const rotaObjeto = Router();
const ctrlObjeto = new ObjetoCtrl();
rotaObjeto.post("/", ctrlObjeto.incluir);
rotaObjeto.put("/:id", ctrlObjeto.alterar);
rotaObjeto.patch("/:id", ctrlObjeto.alterar);
rotaObjeto.delete("/:id", ctrlObjeto.excluir);
rotaObjeto.get("/:id", ctrlObjeto.consultar);
rotaObjeto.get("/", ctrlObjeto.consultar);

export default rotaObjeto;
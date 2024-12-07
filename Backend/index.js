import express from "express";
import cors from "cors";
import rotaObjeto from "./Rotas/rotaObjeto.js";

const host = "0.0.0.0";
const porta = 4000;

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/objetos", rotaObjeto);

app.listen(porta, host, () =>{
  console.log(`Servidor rodando na porta ${porta}`)
});

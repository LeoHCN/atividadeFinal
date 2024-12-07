import Objeto from "../Modelo/objeto.js";
import conectar from "./conexao.js";

export default class ObjetoDAO {
  constructor() {
    this.init();
  }
  async init() {
    const conexao = await conectar();
    const sql = `CREATE TABLE IF NOT EXISTS Objeto (
      id INT NOT NULL,
      nome VARCHAR(80) NOT NULL,
      local VARCHAR(120) NOT NULL,
      data DATE NOT NULL,
      colaborador VARCHAR(80) NOT NULL,
      foto VARCHAR(120) NOT NULL,
      observacao VARCHAR(255),
      CONSTRAINT pk_objeto PRIMARY KEY (id));
      `;
      await conexao.execute(sql);
      await conexao.release();
  }
  async incluir(objeto){
    if(objeto instanceof Objeto){
      const sql = `
      INSERT INTO Objeto (id,nome, local, data, colaborador, foto, observacao)
      VALUES (?,?, ?, ?, ?, ?, ?)
      `;
      const parametros = [
        objeto.id,
        objeto.nome,
        objeto.local,
        objeto.data,
        objeto.colaborador,
        objeto.foto,
        objeto.observacao
      ];
      const conexao = await conectar();
      await conexao.execute(sql, parametros);
      await conexao.release();
    }
  }
  async alterar(objeto){
    if(objeto instanceof Objeto){
      const sql = `
      UPDATE Objeto SET nome = ?, local = ?, data = ?, colaborador = ?, foto = ?, observacao = ?
      WHERE id = ?`;
      const parametros = [
        objeto.nome,
        objeto.local,
        objeto.data,
        objeto.colaborador,
        objeto.foto,
        objeto.observacao,
        objeto.id        
      ];
      const conexao = await conectar();
      await conexao.execute(sql, parametros);
      await conexao.release();
    }
  }
  async excluir(objeto){
    if(objeto instanceof Objeto){
      const sql = `DELETE FROM Objeto WHERE id = ?`;
      const parametros = [objeto.id];
      const conexao = await conectar();
      await conexao.execute(sql, parametros);
      await conexao.release();
    }
  }
  async consultar(termo){
    let listaObjetos = [];
    let sql = '';
    let parametros = [];
    if(termo){
      sql = `
      SELECT * FROM Objeto WHERE id = ?
      `;
      parametros.push(termo);
    }else{
      sql = `
      SELECT * FROM Objeto`;
    }
    const conexao = await conectar();
    const [registros] = await conexao.execute(sql, parametros);
    for (const registro of registros) {
      const objeto = new Objeto(
        registro.id,
        registro.nome,
        registro.local,
        registro.data,
        registro.colaborador,
        registro.foto,
        registro.observacao
      );
      listaObjetos.push(objeto);
    }
    return listaObjetos;
  }

}
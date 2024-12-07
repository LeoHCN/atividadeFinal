import Objeto from "../Modelo/objeto.js";

export default class ObjetoCtrl {
  incluir(requisicao, resposta) {
    if (requisicao.method == "POST" && requisicao.is("application/json")) {
      const id = requisicao.body.id;
      const nome = requisicao.body.nome;
      const local = requisicao.body.local;
      const data = requisicao.body.data;
      const colaborador = requisicao.body.colaborador;
      const foto = requisicao.body.foto;
      const observacao = requisicao.body.observacao;

      if (id && nome && local && data && colaborador && foto && observacao) {
        const objeto = new Objeto(id, nome, local, data, colaborador, foto, observacao);
        objeto.incluir().then(() => {
          resposta.status(200).json({
            "status": true,
            "mensagem": "Objeto incluido com sucesso"
          });
        }).catch((erro) => {
          resposta.status(500).json({
            "status": false,
            "mensagem": "Erro ao incluir um objeto: " + erro
          });
        });
      } else {
        resposta.status(400).json({
          "status": false,
          "mensagem": "Por favor informe todos os dados do objeto conforme a API"
        });
      }
    } else {
      resposta.status(400).json({
        "status": false,
        "mensagem": "Requisição inválida!!"
      });
    }
  }
  alterar(requisicao, resposta) {
    if ((requisicao.method == "PUT" || requisicao.method == "PATCH") && requisicao.is("application/json")) {
      const id = requisicao.params.id;
      const nome = requisicao.body.nome;
      const local = requisicao.body.local;
      const data = requisicao.body.data;
      const colaborador = requisicao.body.colaborador;
      const foto = requisicao.body.foto;
      const observacao = requisicao.body.observacao;

      if (id && nome && local && data && colaborador && foto && observacao) {
        const objeto = new Objeto(id, nome, local, data, colaborador, foto, observacao);
        objeto.alterar().then(() => {
          resposta.status(200).json({
            "status": true,
            "mensagem": "Objeto alterado com sucesso"
          });
        }).catch((erro) => {
          resposta.status(500).json({
            "status": false,
            "mensagem": "Erro ao alterar um objeto: " + erro
          });
        });
      } else {
        resposta.status(400).json({
          "status": false,
          "mensagem": "Por favor informe todos os dados do objeto conforme a API"
        });
      }
    } else {
      resposta.status(400).json({
        "status": false,
        "mensagem": "Requisição inválida!!"
      });
    }
  }
  excluir(requisicao, resposta) {
    if(requisicao.method == "DELETE") {
      const id = requisicao.params.id;
      const objeto = new Objeto(id);
      objeto.excluir().then(() => {
        resposta.status(200).json({
          "status": true,
          "mensagem": "Objeto excluido com sucesso"
        });
      }).catch((erro) => {
        resposta.status(500).json({
          "status": false,
          "mensagem": "Erro ao excluir um objeto: " + erro
        });
      });
    }else{
      resposta.status(400).json({
        "status": false,
        "mensagem": "Requisição inválida!!"
      });
    }
  }
  consultar(requisicao, resposta) {
    if(requisicao.method == "GET") {
      const id = requisicao.params.id;
      const objeto = new Objeto();
      objeto.consultar(id).then((listaObjetos) =>{
        resposta.status(200).json(listaObjetos);
      }).catch((erro) => {
        resposta.status(500).json({
          "status": false,
          "mensagem": "Erro ao consultar um objeto: " + erro
        });
      });
      }else{
        resposta.status(400).json({
          "status": false,
          "mensagem": "Requisição inválida!!"
        });
      }
  }
}
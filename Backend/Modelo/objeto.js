import ObjetoDAO from "../Persistencia/objetoDAO.js";

export default class Objeto{
  #id
  #nome
  #local
  #data
  #colaborador
  #foto
  #observacao

  constructor(id,nome, local, data, colaborador, foto, observacao){
    this.#id = id
    this.#nome = nome
    this.#local = local
    this.#data = data
    this.#colaborador = colaborador
    this.#foto = foto
    this.#observacao = observacao
  }
  get id(){
    return this.#id
  }
  set id(novoId){
    this.#id = novoId
  }
  get nome(){
    return this.#nome
  }
  set nome(novoNome){
    this.#nome = novoNome
  }
  get local(){
    return this.#local
  }
  set local(novoLocal){
    this.#local = novoLocal
  }
  get data(){
    return this.#data
  }
  set data(novaData){
    this.#data = novaData
  }
  get colaborador(){
    return this.#colaborador
  }
  set colaborador(novoColaborador){
    this.#colaborador = novoColaborador
  }
  get foto(){
    return this.#foto
  }
  set foto(novaFoto){
    this.#foto = novaFoto
  }
  get observacao(){
    return this.#observacao
  }
  set observacao(novaObservacao){
    this.#observacao = novaObservacao
  }
  toString(){
    return "Objeto: " + this.#nome + "(" + "local: " + this.#local+ ")";
  }
  toJSON(){
    return {
      "id": this.#id,
      "nome": this.#nome,
      "local": this.#local,
      "data": this.#data,
      "colaborador": this.#colaborador,
      "foto": this.#foto,
      "observacao": this.#observacao
    }
  }
  async incluir(){
    const objDAO = new ObjetoDAO();
    await objDAO.incluir(this);
  }
  async alterar(){
    const objDAO = new ObjetoDAO();
    await objDAO.alterar(this);
  }
  async excluir(){
    const objDAO = new ObjetoDAO();
    await objDAO.excluir(this);
  }
  async consultar(termo){
    const objDAO = new ObjetoDAO();
    return await objDAO.consultar(termo);
  }
}
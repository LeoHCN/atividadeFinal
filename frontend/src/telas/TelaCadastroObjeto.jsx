import Pagina from "../templates/Pagina";
import FormularioCadObjeto from "./formularios/FormularioCadObjeto.jsx";
import { Container, Spinner, Alert } from "react-bootstrap";
import TabelaObjetos from "./tabelas/TabelaObjetos.jsx";
import { useState, useEffect } from "react";
import { consultarObjetos } from "../services/servicoObjetos.js";

export default function TelaCadastroObjeto(props) {

  const [exibirTabela, setExibirTabela] = useState(true);
  const [objetos, setObjetos] = useState([]);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [situacao, setSituacao] = useState("ok");
  const [objetoSelecionado, setObjetoSelecionado] = useState({
    id: "",
    nome: "",
    local: "",
    data: "",
    colaborador: "",
    foto: "",
    observacao: ""
  });

  useEffect(() => {
    setSituacao("processando");
    consultarObjetos()
      .then((listaObjetos) => {
        setSituacao("ok");
        setObjetos(listaObjetos);
      })
      .catch((erro) => {
        console.log(erro.message);
        setSituacao("erro");
      });
  }, []);

  if (situacao === "erro") {

    return (
      <Pagina>
        <Container>
          <h2 className="text-center">Tela de Cadastro de Objetos</h2>
          <div>
            <Alert variant="danger">Erro ao carregar os objetos</Alert>
          </div>
        </Container>
      </Pagina>

    )
  } else if (situacao === "processando") {
    return (
      <Pagina>
        <Container>
          <h2 className="text-center">Tela de Cadastro de Objetos</h2>
          <div className="d-flex">
            <Spinner animation="border" />
            <p>Processando...</p>
          </div>
        </Container>
      </Pagina>

    )
  } else {
    return (
      <Pagina>
        <Container>
          <h2 className="text-center">Tela de cadastro de objetos</h2>
          {
            exibirTabela ? <TabelaObjetos setExibirTabela={setExibirTabela} listaObjetos={objetos} setListaObjetos={setObjetos}
              setObjetoSelecionado={setObjetoSelecionado} setModoEdicao={setModoEdicao} />
              : <FormularioCadObjeto setExibirTabela={setExibirTabela} listaObjetos={objetos} modoEdicao={modoEdicao} objetoSelecionado={objetoSelecionado} setModoEdicao={setModoEdicao} setObjetoSelecionado={setObjetoSelecionado} />
          }
        </Container>

      </Pagina>
    )
  }
}
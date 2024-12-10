import Pagina from "../templates/Pagina";
import FormularioCadObjeto from "./formularios/FormularioCadObjeto.jsx";
import { Container } from "react-bootstrap";
import TabelaObjetos from "./tabelas/TabelaObjetos.jsx";
import { useState } from "react";
import { listaObjetos } from "../dadosMocados/listaObjetos.js";

export default function TelaCadastroObjeto(props) {

  const [exibirTabela, setExibirTabela] = useState(true);
  const [objetos, setObjetos] = useState(listaObjetos);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [objetoSelecionado, setObjetoSelecionado] = useState({
    id: "",
    nome: "",
    local: "",
    data: "",
    colaborador: "",
    foto: "",
    observacao: ""
  });

  return (
    <Pagina>
      <Container>
        <h2 className="text-center">Tela de cadastro de objetos</h2>
        {
          exibirTabela ? <TabelaObjetos setExibirTabela={setExibirTabela} listaObjetos={objetos} setListaObjetos={setObjetos}
          setObjetoSelecionado={setObjetoSelecionado} setModoEdicao={setModoEdicao} />
            : <FormularioCadObjeto setExibirTabela={setExibirTabela} listaObjetos={objetos} modoEdicao={modoEdicao} objetoSelecionado={objetoSelecionado} setModoEdicao={setModoEdicao} setObjetoSelecionado={setObjetoSelecionado}  />
        }
      </Container>

    </Pagina>
  )
}
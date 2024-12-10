import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useState } from "react";
import { cadastrarObjeto, alterarObjeto } from "../../services/servicoObjetos";

export default function FormularioCadObjeto(props) {

  const [objeto, setObjeto] = useState(props.objetoSelecionado);

  const [validado, setValidado] = useState(false);

  function atualizarObjeto(evento) {
    const nome = evento.target.name;
    const valor = evento.target.value;
    setObjeto({ ...objeto, [nome]: valor });
  }

  function cadastrar(evento) {
    const formulario = evento.currentTarget;
    if (formulario.checkValidity()) {
      setValidado(false);
      if (!props.modoEdicao) {
        cadastrarObjeto(objeto).then((resposta) => {
          if (resposta.status) {
            props.listaObjetos.push(objeto);
            props.setExibirTabela(true);
          } else {
            alert(resposta.mensagem);
          }
        }).catch((erro) => {
          alert("Não foi possivel se comunicar com o Backend: " + erro);
        });
      } else {

        alterarObjeto(objeto).then((resposta) => {
          if (resposta.status) {
            const indice = props.listaObjetos.findIndex((obj) => { return obj.id === objeto.id });
            props.listaObjetos[indice] = objeto;
            props.setModoEdicao(false);
            props.setObjetoSelecionado({
              id: "",
              nome: "",
              local: "",
              data: "",
              colaborador: "",
              foto: "",
              observacao: "",
            });
            props.setExibirTabela(true);
          }else{
            alert(resposta.mensagem);
          };
        }).catch((erro) =>{
          alert("Não foi possivel se comunicar com o Backend: " + erro);
        });
      };
    } else {
      setValidado(true);
    }
    evento.preventDefault();
    evento.stopPropagation();
  }

  return (
    <Form validated={validado} className="border p-3" noValidate onSubmit={cadastrar}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>ID:</Form.Label>
          <Form.Control
            required
            id="id"
            name="id"
            value={objeto.id}
            onChange={atualizarObjeto}
            type="number"
          />
          <Form.Control.Feedback type="invalid">Por favor informa o ID</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12">
          <Form.Label>Nome:</Form.Label>
          <Form.Control
            required
            type="text"
            name="nome"
            id="nome"
            value={objeto.nome}
            onChange={atualizarObjeto}
            placeholder="Informe o nome do objeto"
          />
          <Form.Control.Feedback type="invalid">Por favor informar o nome do objeto</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Local:</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Insira o local encontrado..."
              name="local"
              id="local"
              value={objeto.local}
              onChange={atualizarObjeto}
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">Por favor informar o local</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="6" >
          <Form.Label>Data encontrado:</Form.Label>
          <Form.Control
            type="date"
            value={objeto.data}
            onChange={atualizarObjeto}
            name="data"
            id="data"
            required />
          <Form.Control.Feedback type="invalid">Por favor informar a data</Form.Control.Feedback>
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Foto: </Form.Label>
          <Form.Control
            type="url"
            value={objeto.foto}
            name="foto"
            id="foto"
            onChange={atualizarObjeto}
            placeholder="Insira a url da foto do objeto"
            required />
          <Form.Control.Feedback type="invalid">Por favor informar a url da foto</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Nome do colaborador:</Form.Label>
          <Form.Control
            type="text"
            value={objeto.colaborador}
            name="colaborador"
            id="colaborador"
            onChange={atualizarObjeto}
            placeholder="Informe o nome do colaborador..."
            required />
          <Form.Control.Feedback type="invalid">Por favor informar o nome do colaborador</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12">
          <Form.Label>Observação: </Form.Label>
          <Form.Control
            type="text"
            value={objeto.observacao}
            name="observacao"
            id="observacao"
            onChange={atualizarObjeto}
            placeholder="Insira uma observacao"
            required />
          <Form.Control.Feedback type="invalid">Por favor informar uma observacao</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">{props.modoEdicao ? "Editar" : "Registrar"}</Button> <Button type="button" variant="secondary" onClick={() => {
        props.setExibirTabela(true);
      }}>Voltar</Button>
    </Form>
  );
}
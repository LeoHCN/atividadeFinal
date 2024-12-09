import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useState } from "react";

export default function FormularioCadObjeto(props) {

  const [validado, setValidado] = useState(false);

  function cadastrar(evento){
    const formulario = evento.currentTarget;
    if(formulario.checkValidity()){
      setValidado(false);
    }else{
      setValidado(true);
    }
    evento.preventDefault();
    evento.stopPropagation();
  }

  return (
    <Form validated={validado} className="border p-3" noValidate onSubmit={cadastrar}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="id">
          <Form.Label>ID:</Form.Label>
          <Form.Control
            required
            type="number"
          />
          <Form.Control.Feedback type="invalid">Por favor informa o ID</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Informe o nome do objeto"
          />
          <Form.Control.Feedback type="invalid">Por favor informar o nome do objeto</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="local">
          <Form.Label>Local:</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Insira o local encontrado..."
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">Por favor informar o local</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="data">
          <Form.Label>Data encontrado:</Form.Label>
          <Form.Control type="date" required />
          <Form.Control.Feedback type="invalid">Por favor informar a data</Form.Control.Feedback>
        </Form.Group>
        </Row>
        
      
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="foto">
          <Form.Label>Foto: </Form.Label>
          <Form.Control type="url" placeholder="Insira a url da foto do objeto" required />
          <Form.Control.Feedback type="invalid">Por favor informar a url da foto</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="colaborador">
          <Form.Label>Nome do colaborador:</Form.Label>
          <Form.Control type="text" placeholder="Informe o nome do colaborador..." required />
          <Form.Control.Feedback type="invalid">Por favor informar o nome do colaborador</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="12" controlId="observacao">
          <Form.Label>Observação: </Form.Label>
          <Form.Control type="url" placeholder="Insira uma observacao" required />
          <Form.Control.Feedback type="invalid">Por favor informar uma observacao</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Registrar</Button>
    </Form>
  );
}
import { Container, Form, Button, Col } from "react-bootstrap";
import { ContextoUsuario } from "../../App";
import { useContext, useRef } from "react";

export default function FormLogin(props) {
  const {usuario, setUsuario} = useContext(ContextoUsuario);
  const emailRef = useRef();
  const senhaRef =  useRef();

  function processarLogin(evento) {
    const email = emailRef.current.value;
    const senha = senhaRef.current.value;
    if(email=== "leo@admin.com" && senha === "123"){
      setUsuario({
        "email": email,
        "logado": true});
    }
    evento.preventDefault();
    evento.stopPropagation();
  }
  return (
    <Container className="border m-2 p-2">
      <Form onSubmit={processarLogin}>
        <Form.Group as={Col} className="mb-3 md-12" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Informe seu e-mail..."
            ref={emailRef}
            required
          />
          <Form.Text className="text-muted">
            Nunca compartilhe suas informações de login!!!
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="senha">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha..."
            ref={senhaRef}
            required
          />
        </Form.Group>
        <div className="d-flex justify-content-center aling-items-center">
          <Button className="m-2 p-2 w-100 text-center" variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </Container >
  );
}
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ContextoUsuario } from "../App";
import { useContext } from "react";

export default function Menu(props) {

  const { usuario, setUsuario } = useContext(ContextoUsuario);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#" as={Link} to={"/"}>Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Novo" id="basic-nav-dropdown">
              <NavDropdown.Item href="#" as={Link} to={'/cadastro'}>Registrar um objeto encontrado</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" onClick={() => {
              setUsuario({ email: '', logado: false });
            }}>Sair</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function Menu(props) {
  return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Novo" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Registrar um objeto encontrado</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
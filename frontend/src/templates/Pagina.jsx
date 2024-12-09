import { Container } from "react-bootstrap";
import Cabecalho from "./Cabecalho.jsx";
import Menu from "./Menu.jsx";


export default function Pagina(props) {
  return (
    <Container>
      <Cabecalho texto="Sistema Gerencial de achados e perdidos" />
      <Menu />
      {
        props.children
      }
    </Container>
  )

}
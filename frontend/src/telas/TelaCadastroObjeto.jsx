import Pagina from "../templates/Pagina";
import FormularioCadObjeto from "./formularios/FormularioCadObjeto";
import { Container } from "react-bootstrap";

export default function TelaCadastroObjeto(props) {
  return (
    <Pagina>
      <Container>
        <h2 className="text-center">Tela de cadastro de objetos</h2>
        <FormularioCadObjeto />
      </Container>

    </Pagina>
  )
}
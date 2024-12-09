import { Alert } from "react-bootstrap";

export default function Cabecalho(props){
  return(
    <div>
      <Alert className="text-center"><h1>{props.texto || "Texto não informado"}</h1></Alert>
    </div>
  )
}
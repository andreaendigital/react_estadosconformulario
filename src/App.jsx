import { useState } from "react";
import "./App.css";
import Registro from "./componentes/registro/Registro";

function App() {
  const [mensajeError, setMensajeError] = useState(""); // Estado para mensaje de error o éxito
  //mensajeError es el estado que almacena el mensaje de erro o éxito y 
  //setMensajeError es la función para actualizar ese estado


  return (
    <>
            <Registro mensajeError={mensajeError} setMensajeError={setMensajeError} />
            {/* llamando al mensaje por props  */}
    </>
  );
}

export default App;

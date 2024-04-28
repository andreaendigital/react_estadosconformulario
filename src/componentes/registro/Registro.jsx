import { useState } from "react";
import Alert from "../alert/Alert";
import Formulario from "../formulario/Formulario";
import SocialButton from "../socialbutton/SocialButton";

function Registro({ mensajeError, setMensajeError }) {
  // const [emailError, setEmailError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);
  // const [datosError, setDatosError] = useState(false);

  return (
    <>
      <h1>Crea una cuenta</h1>
      <div className="d-flex justify-content-center m-2 ">
        <SocialButton social="facebook" />
        <SocialButton social="github" />
        <SocialButton social="linkedin" />
      </div>
      <p>o usa un mail para registrarse</p>
      {/* <Formulario setMensajeError={setMensajeError} /> */}
      <Formulario mensajeError={mensajeError} setMensajeError={setMensajeError} />

      <Alert mensajeError={mensajeError} />

      {/* <Alert
        emailError={emailError}
        passwordError={passwordError}
        datosError={datosError}
      /> */}
    </>
  );
}

export default Registro;

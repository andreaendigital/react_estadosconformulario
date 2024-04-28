import { useState } from "react";
import Alert from "../alert/Alert";
import Formulario from "../formulario/Formulario";
import SocialButton from "../socialbutton/SocialButton";

function Registro({ mensajeError, setMensajeError }) {
  return (
    <>
      <h1>Crea una cuenta</h1>
      <div className="d-flex justify-content-center m-2 ">
        <SocialButton social="facebook" />
        <SocialButton social="github" />
        <SocialButton social="linkedin" />
      </div>
      <p>o usa un mail para registrarse</p>
      <Formulario setMensajeError={setMensajeError} />

      <Alert mensajeError={mensajeError} />
    </>
  );
}

export default Registro;

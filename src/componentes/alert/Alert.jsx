// import { useState } from "react";
// const Alert = ({ emailError, passwordError, datosError }) => {
//   return (
//     <>
//       {datosError && <p className="error">Todos los campos son obligatorios</p>}
//       {emailError && <p className="error">Formato de mail incorrecto</p>}
//       {passwordError && <p className="error">Contraseña incorrecta</p>}
//     </>
//   );
// };
// const Alert = ({ mensajeError }) => {
//   return (
//     <>
//       {mensajeError && <p className={mensajeError.includes("error") ? "error" : "exito"}>{mensajeError}</p>}
//     </>
//   );
// };
// export default Alert;

import React from "react";

const Alert = ({ mensajeError }) => {
  // Determinar el tipo de mensaje según el contenido de mensajeError
  const renderizarMensaje = () => {
    if (!mensajeError) {
      return null; // No renderizar ningún mensaje si mensajeError está vacío
    }

    // Determinar el tipo de mensaje (error o éxito) basado en el contenido de mensajeError
    const esError = mensajeError.toLowerCase().includes("error");

    return (
      <p className={esError ? "error" : "exito"}>
        {mensajeError}
      </p>
    );
  };

  return (
    <>
      {renderizarMensaje()}
    </>
  );
};

export default Alert;
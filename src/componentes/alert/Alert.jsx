import React from "react";

const Alert = ({ mensajeError }) => {
  // Determinar el tipo de mensaje según el contenido de mensajeError
  const renderizarMensaje = () => {
    if (!mensajeError) {
      return null; // No renderizar ningún mensaje si mensajeError está vacío
    }

    // Determinar el tipo de mensaje (error o éxito) basado en el contenido de mensajeError
    const esError = mensajeError.toLowerCase().includes("error");
    const esExito = mensajeError.toLowerCase().includes("completo");

    if (esError) {
      return <p className="error">{mensajeError}</p>;
    }
    if (esExito) {
      return <p className="exito">{mensajeError}</p>;
    }
  };

  return (
    <>
      {renderizarMensaje()}{" "}
      {/* Llamada a la función renderizarMensaje para mostrar el mensaje */}
    </>
  );
};

export default Alert;

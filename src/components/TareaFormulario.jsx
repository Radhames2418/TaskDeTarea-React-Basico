import React, { Fragment, useState } from "react";
import "../CSS/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

const TareaFormulario = ({ onSubmit }) => {
  
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const TareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };

    onSubmit(TareaNueva);
  };

  return (
    <Fragment>
      <form onSubmit={manejarEnvio} className="tarea-formulario">
        <input
          onChange={manejarCambio}
          type="text"
          className="tarea-input"
          placeholder="Escribe una tarea"
          name="texto"
        />
        <button className="tarea-boton">Agregar Tarea</button>
      </form>
    </Fragment>
  );
};

export default TareaFormulario;

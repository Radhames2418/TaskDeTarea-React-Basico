import React, { Fragment } from "react";
import "../CSS/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => {
  return (
    <Fragment>
      <div
        className={
          completada ? "tarea-contenedor completada" : "tarea-contenedor"
        }
      >
        <div onClick={() => completarTarea(id)} className="tarea-texto">
          {texto}
        </div>
        <div
          onClick={() => eliminarTarea(id)}
          className="tarea-contenedor-iconos"
        >
          <AiOutlineCloseCircle className="tarea-icono" />
        </div>
      </div>
    </Fragment>
  );
};

export default Tarea;

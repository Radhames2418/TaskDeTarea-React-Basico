import React, { Fragment, useState } from "react";
import "../CSS/ListaDeTareas.css";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";

const ListaDeTareas = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizada = [tarea, ...tareas];
      setTareas(tareasActualizada);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizada = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizada);
  };

  const completarTarea = (id) => {
    const tareasActualizada = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });

    setTareas(tareasActualizada);
  };

  return (
    <Fragment>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default ListaDeTareas;

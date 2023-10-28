import React, { Fragment, useState, useEffect } from "react";
import { GetEstados } from "../../Functions/PrimaDeudaFN";
import { useEstado } from "../Context/CobranzaContext";

const Filtros = () => {
  const [estados, setEstados] = useState([]);
  const { estadoSeleccionado, cambiarEstadoSeleccionado } = useEstado();

  useEffect(() => {
    GetEstados(
      (estados) => {
        setEstados(estados);
      },
      (error) => {
        console.error("Error al obtener datos de los estados: " + error);
      }
    );
  }, []);

  const handleEstadoChange = (e) => {
    const nuevoEstado = e.target.value;
    cambiarEstadoSeleccionado(nuevoEstado);
  };

  return (
    <Fragment>
      <div className="flex flex-col">
        <div className="h-20 mt-5">
          {" "}
          <h1 className="text-4xl font-bold text-center text-Titles">
            Prima por Cobrar
          </h1>
        </div>
        <p className="text-SubTitles mt-1 text-lg">Selecciona las opciones:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-1">
          <select
            className="col-span-1 md:col-span-1 lg:col-span-1 block mt-2 bg-gray-100 border border-gray-300 rounded-lg p-2"
            value={estadoSeleccionado}
            onChange={handleEstadoChange}
          >
            {estados.map((estado) => (
              <option key={estado.id} value={estado.Estado}>
                {estado.Estado}
              </option>
            ))}
          </select>

          <select className="col-span-1 md:col-span-1 lg:col-span-1 block mt-2 bg-gray-100 border border-gray-300 rounded-lg p-2">
            <option value="Agente">Agente</option>
          </select>

          <select className="col-span-1 md:col-span-1 lg:col-span-1 block mt-2 bg-gray-100 border border-gray-300 rounded-lg p-2">
            <option value="Ejecutiva">Ejecutiva</option>
          </select>
        </div>
      </div>
    </Fragment>
  );
};

export default Filtros;

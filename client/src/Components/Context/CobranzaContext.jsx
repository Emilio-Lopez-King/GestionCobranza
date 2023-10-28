import React, { createContext, useContext, useState } from "react";

const EstadoContext = createContext();

export function useEstado() {
  return useContext(EstadoContext);
}

export function EstadoProvider({ children }) {
  const [estadoSeleccionado, setEstadoSeleccionado] = useState("TODOS");
  const [importeTotalPositivo, setImporteTotalPositivo] = useState(0);
  const [importeTotalNegativo, setImporteTotalNegativo] = useState(0);

  const cambiarEstadoSeleccionado = (nuevoEstado) => {
    setEstadoSeleccionado(nuevoEstado);
  };

  const cambiarImporteTotalPositivo = (nuevoImporteTotalPositivo) => {
    setImporteTotalPositivo(nuevoImporteTotalPositivo);
  };

  const cambiarImporteTotalNegativo = (nuevoImporteTotalNegativo) => {
    setImporteTotalNegativo(nuevoImporteTotalNegativo);
  };

  return (
    <EstadoContext.Provider
      value={{
        estadoSeleccionado,
        cambiarEstadoSeleccionado,
        importeTotalPositivo,
        cambiarImporteTotalPositivo,
        importeTotalNegativo,
        cambiarImporteTotalNegativo,
      }}
    >
      {children}
    </EstadoContext.Provider>
  );
}

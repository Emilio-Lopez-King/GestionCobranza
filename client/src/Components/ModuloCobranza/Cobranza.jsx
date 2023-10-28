import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Filtros, Generales, Detallado } from "./Index";

const Cobranza = () => {
  return (
    <>
      <main className="flex-1 p-4">
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-12 gap-4 p-1">
            <div className="col-span-12 rounded-lg bg-white shadow-md p-4 mt-9">
              <Filtros />
            </div>
            <div className="col-span-12 sm:col-span-12 bg-white rounded-lg border p-8 publications-container">
              <Generales />
            </div>
            <div className="col-span-12 sm:col-span-12 bg-white rounded-lg border p-8">
              <Detallado />
            </div>
          </div>
        </div>
      </main>

      <ToastContainer limit={1} />
    </>
  );
};

export default Cobranza;

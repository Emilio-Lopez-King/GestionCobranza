import React, { Fragment } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useEstado } from "../Context/CobranzaContext";

const Generales = () => {
  const { importeTotalPositivo, importeTotalNegativo } = useEstado();
  const valorDolar = 18.12;
  const valorEuro = 19.14;
  const valorImporteTotal = importeTotalPositivo + importeTotalNegativo;
  const porcentajePositivo = (importeTotalPositivo / valorImporteTotal) * 100;
  const porcentajeNegativo = (importeTotalNegativo / valorImporteTotal) * 100;

  return (
    <Fragment>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-gray-400 mb-4">General</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-1">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="bg-white p-4 border border-gray-300 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-2">Pesos</h3>
              <p className="text-center text-3xl font-bold mb-2">
                $
                {Number(valorImporteTotal).toLocaleString("es-ES", {
                  style: "currency",
                  currency: "MXN",
                })}
              </p>
              <hr />
              <div className="grid grid-cols-2 gap-4 p-1">
                <div className="col-span-1 flex justify-center items-center">
                  <FaCheckCircle className="text-green-500 mr-2 text-6xl" />
                  <span className="text-green-500 text-6xl">
                    {porcentajePositivo.toFixed(2)}%
                  </span>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  <FaTimesCircle className="text-red-500 mr-2 text-6xl" />
                  <span className="text-red-500 text-6xl">
                    {porcentajeNegativo.toFixed(2)}%
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 p-1">
                <div className="col-span-1 flex justify-center items-center">
                  <p className="text-center text-lg font-bold text-green-700">
                    {" "}
                    $
                    {Number(importeTotalPositivo).toLocaleString("es-ES", {
                      style: "currency",
                      currency: "MXN",
                    })}{" "}
                  </p>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  <p className="text-center text-lg font-bold text-red-700">
                    {" "}
                    $
                    {Number(importeTotalNegativo).toLocaleString("es-ES", {
                      style: "currency",
                      currency: "MXN",
                    })}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="bg-white p-4 border border-gray-300 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-2">Dolares</h3>
              <p className="text-center text-3xl font-bold mb-2">
                {Number(valorImporteTotal / valorDolar).toLocaleString(
                  "es-ES",
                  {
                    style: "currency",
                    currency: "USD",
                  }
                )}
              </p>
              <hr />
              <div className="grid grid-cols-2 gap-4 p-1">
                <div className="col-span-1 flex justify-center items-center">
                  <FaCheckCircle className="text-green-500 mr-2 text-6xl" />
                  <span className="text-green-500 text-6xl">
                    {porcentajePositivo.toFixed(2)}%
                  </span>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  <FaTimesCircle className="text-red-500 mr-2 text-6xl" />
                  <span className="text-red-500 text-6xl">
                    {porcentajeNegativo.toFixed(2)}%
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 p-1">
                <div className="col-span-1 flex justify-center items-center">
                  <p className="text-center text-lg font-bold text-green-700">
                    {" "}
                    $
                    {Number(importeTotalPositivo / valorDolar).toLocaleString(
                      "es-ES",
                      {
                        style: "currency",
                        currency: "USD",
                      }
                    )}{" "}
                  </p>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  <p className="text-center text-lg font-bold text-red-700">
                    {" "}
                    $
                    {Number(importeTotalNegativo / valorDolar).toLocaleString(
                      "es-ES",
                      {
                        style: "currency",
                        currency: "USD",
                      }
                    )}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="bg-white p-4 border border-gray-300 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-2">Euros</h3>
              <p className="text-center text-3xl font-bold mb-2">
                {Number(valorImporteTotal / valorEuro).toLocaleString("es-ES", {
                  style: "currency",
                  currency: "EUR",
                })}
              </p>
              <hr />
              <div className="grid grid-cols-2 gap-4 p-1">
                <div className="col-span-1 flex justify-center items-center">
                  <FaCheckCircle className="text-green-500 mr-2 text-6xl" />
                  <span className="text-green-500 text-6xl">
                    {porcentajePositivo.toFixed(2)}%
                  </span>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  <FaTimesCircle className="text-red-500 mr-2 text-6xl" />
                  <span className="text-red-500 text-6xl">
                    {porcentajeNegativo.toFixed(2)}%
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 p-1">
                <div className="col-span-1 flex justify-center items-center">
                  <p className="text-center text-lg font-bold text-green-700">
                    {" "}
                    $
                    {Number(importeTotalPositivo / valorEuro).toLocaleString(
                      "es-ES",
                      {
                        style: "currency",
                        currency: "EUR",
                      }
                    )}{" "}
                  </p>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  <p className="text-center text-lg font-bold text-red-700">
                    {" "}
                    $
                    {Number(importeTotalNegativo / valorEuro).toLocaleString(
                      "es-ES",
                      {
                        style: "currency",
                        currency: "EUR",
                      }
                    )}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Generales;

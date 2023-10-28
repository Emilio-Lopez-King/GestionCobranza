import React, { Fragment, useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { getData } from "../../Functions/PrimaDeudaFN";
import { useEstado } from "../Context/CobranzaContext";

const Detallado = () => {
  const [data, setData] = useState();
  const {
    estadoSeleccionado,
    cambiarImporteTotalPositivo,
    cambiarImporteTotalNegativo,
  } = useEstado();
  let sumaImportesPositivos = 0;
  let sumaImportesNegativos = 0;

  const columns = [
    {
      name: <strong className="font-bold">Fianza</strong>,
      selector: (row) => row.fianzaid,
      sortable: "true",
    },
    {
      name: <strong className="font-bold">Movimiento</strong>,
      selector: (row) => row.movimiento,
      sortable: "true",
    },
    {
      name: <strong className="font-bold">Fiado</strong>,
      selector: (row) => row.fiado,
      sortable: "true",
    },
    {
      name: <strong className="font-bold">Antigüedad</strong>,
      selector: (row) => row.antiguedad,
      sortable: "true",
      conditionalCellStyles: [
        {
          when: (row) => row.diasVencimiento > 0,
          style: {
            backgroundColor: "#f87171",
            color: "white",
            "&:hover": {
              cursor: "pointer",
            },
          },
        },
        {
          when: (row) => row.diasVencimiento <= 0,
          style: {
            backgroundColor: "#4ba4e5",
            color: "white",
            "&:hover": {
              cursor: "not-allowed",
            },
          },
        },
      ],
    },
    {
      name: <strong className="font-bold">Días de Vencimiento</strong>,
      selector: (row) => row.diasVencimiento,
      sortable: "true",
      conditionalCellStyles: [
        {
          when: (row) => row.diasVencimiento > 0,
          style: {
            backgroundColor: "#f87171",
            color: "white",
            "&:hover": {
              cursor: "pointer",
            },
          },
        },
        {
          when: (row) => row.diasVencimiento <= 0,
          style: {
            backgroundColor: "#4ba4e5",
            color: "white",
            "&:hover": {
              cursor: "not-allowed",
            },
          },
        },
      ],
    },
    {
      name: <strong className="font-bold">Importe</strong>,
      selector: (row) => row.importe,
      sortable: "true",
      cell: (row) => (
        <div style={{ textAlign: "center" }}>
          $
          {Number(row.importe).toLocaleString("es-ES", {
            style: "currency",
            currency: "MXN",
          })}
        </div>
      ),
    },
  ];

  useEffect(() => {
    getData(
      (data) => {
        if (estadoSeleccionado === "TODOS") {
          sumaImportesPositivos = 0;
          sumaImportesNegativos = 0;
          for (const row of data) {
            if (row.diasVencimiento === 0) {
              sumaImportesPositivos += parseFloat(row.importe);
            } else {
              sumaImportesNegativos += parseFloat(row.importe);
            }
          }
          setData(data);
          cambiarImporteTotalPositivo(sumaImportesPositivos);
          cambiarImporteTotalNegativo(sumaImportesNegativos);
        } else {
          const datosFiltrados = data.filter(
            (row) => row.Estado === estadoSeleccionado
          );
          setData(datosFiltrados);
          sumaImportesPositivos = 0;
          sumaImportesNegativos = 0;
          for (const row of datosFiltrados) {
            if (row.diasVencimiento === 0) {
              sumaImportesPositivos += parseFloat(row.importe);
            } else {
              sumaImportesNegativos += parseFloat(row.importe);
            }
          }

          cambiarImporteTotalPositivo(sumaImportesPositivos);
          cambiarImporteTotalNegativo(sumaImportesNegativos);
        }
      },
      (error) => {
        console.error("Error al obtener datos: " + error);
      }
    );
  }, [estadoSeleccionado]);

  return (
    <Fragment>
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-gray-400 mb-4">Detalle</h2>
        <div className="rounded-lg overflow-hidden border border-gray-300">
          <DataTable
            pagination
            highlightOnHover
            columns={columns}
            data={data}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Detallado;

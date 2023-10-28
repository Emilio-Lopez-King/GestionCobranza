const express = require("express");
const router = express.Router();
const { createDBConnection } = require("../Conections/database");

router.get("/GetData", async (req, res) => {
  try {
    const connection = await createDBConnection();

    const [rows] = await connection.execute("CALL GetPrimaDeudasData()");

    await connection.end();

    if (rows[0].message) {
      return res.status(200).json({ message: rows[0].message });
    }

    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los datos" });
  }
});

router.get("/GetEstados", async (req, res) => {
  try {
    const connection = await createDBConnection();

    const [rows] = await connection.execute("CALL GetEstados()");

    await connection.end();

    if (rows[0].message) {
      return res.status(200).json({ message: rows[0].message });
    }

    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los datos de los estados" });
  }
});

module.exports = router;
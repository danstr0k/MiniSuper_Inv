import express from "express";
import con from "../utils/db.js";

const router = express.Router();

// Ruta para registrar un nuevo producto
router.post("/", (req, res) => {
    const { nombre_Producto, Distribuidor, Descripcion } = req.body;

    if (!nombre_Producto || !Distribuidor || !Descripcion) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const sql = "INSERT INTO producto (nombre_Producto, Distribuidor, Descripcion) VALUES (?, ?, ?)";

    console.log("Ejecutando SQL:", sql, [nombre_Producto, Distribuidor, Descripcion]); // Imprimir la consulta

    con.query(sql, [nombre_Producto, Distribuidor, Descripcion], (err, result) => {
        if (err) {
            console.error("Error al ejecutar la consulta:", err);
            return res.status(500).json({ error: "Error al registrar el producto", err });
        }
        console.log("Producto registrado con éxito, ID:", result.insertId);
        res.json({ message: "Producto registrado con éxito", id: result.insertId });
    });
});

// Ruta para obtener todos los productos
router.get("/", (req, res) => {
    const sql = "SELECT * FROM producto";

    con.query(sql, (err, results) => {
        if (err) {
            console.error("Error al obtener los productos:", err);
            return res.status(500).json({ error: "Error al obtener los productos", err });
        }
        res.json(results);
    });
});

export default router;

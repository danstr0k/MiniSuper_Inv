import express from "express";
import con from "../utils/db.js";



const router = express.Router();

router.post("/", (req, res) => {
    const { nombre_Producto, Distribuidor } = req.body;

    if (!nombre_Producto || !Distribuidor) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const sql = "INSERT INTO producto (nombre_Producto, Distribuidor) VALUES (?, ?)";
    
    console.log("Ejecutando SQL:", sql, [nombre_Producto, Distribuidor]); // Imprimir la consulta

    con.query(sql, [nombre_Producto, Distribuidor], (err, result) => {
        if (err) {
            console.error("Error al ejecutar la consulta:", err);
            return res.status(500).json({ error: "Error al registrar el producto", err });
        }
        console.log("Producto registrado con éxito, ID:", result.insertId);  // Verificar el ID de inserción
        res.json({ message: "Producto registrado con éxito", id: result.insertId });
    });
    
    });



// Ruta para obtener todos los productos
router.get("/", (req, res) => {
    const sql = "SELECT * FROM producto";
    
    con.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Error al obtener los productos", err });
        }
        res.json(results);
    });
});


export default router;

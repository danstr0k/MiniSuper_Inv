import React, { useState } from "react";
import axios from "axios";

const Registro = () => {
  const [producto, setProducto] = useState({ nombre_Producto: "", Distribuidor: "" });

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/productos", producto);
      alert("Producto registrado exitosamente!");
      setProducto({ nombre_Producto: "", Distribuidor: "" }); // Limpiar el formulario
    } catch (error) {
      console.error("Error al registrar el producto", error);
    }
  };

  return (
    <div>
      <h2>Registro de Producto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre_Producto"
          placeholder="Nombre del producto"
          value={producto.nombre_Producto}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Distribuidor"
          placeholder="Distribuidor"
          value={producto.Distribuidor}
          onChange={handleChange}
          required
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Registro;


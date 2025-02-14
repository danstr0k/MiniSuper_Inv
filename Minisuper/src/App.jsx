import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Inicio from './assets/Componentes/Inicio'
import Registro from './assets/Componentes/Registro';
import Crear from './assets/Componentes/Crear';



function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Navigate to="/Inicio" />} />
              <Route path="/Inicio" element={<Inicio/>} />
              <Route path="/Registro" element={<Registro /> } />
              <Route path="/Crear" element={<Crear />} />
          </Routes>
      </Router>
  );
}

export default App

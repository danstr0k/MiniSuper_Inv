import React from 'react';

const Inicio = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Bienvenido a Jumanji</h1>
      <div className="space-x-4">
        <a href="/crear" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Inicio</a>
        <a href="/registro" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Registro</a>
      </div>
    </div>
  );
};

export default Inicio;

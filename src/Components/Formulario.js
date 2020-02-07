import React, { useState } from "react";

const Formulario = () => {
  const [nombre, guardaNombre] = useState("");
  const [gasto, guardaGasto] = useState(0);
  // cuando el usuario agrega un gasto
  const agregarGasto = e => {
    e.preventDefault();

    // validar

    // construir el gasto

    // pasar el gasto al componente principal

    // resetear el form
  };
  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>

      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={e => guardaNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={gasto}
          onChange={e => guardaGasto(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

export default Formulario;

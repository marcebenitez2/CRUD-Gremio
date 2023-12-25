import React from "react";
import { useState } from "react";

function BolsonContainer() {
  const [buscador, setBuscador] = useState("");

  return (
    <div className="w-full h-full flex flex-col py-10 gap-3 overflow-x-hidden px-10">
      <input
        className="border bg-transparent rounded-md px-2 py-1"
        onChange={(e) => setBuscador(e.target.value)}
        value={buscador}
        placeholder="Buscar..."
      />
      <div className="w-full overflow-y-auto rounded-md">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>DNI</th>
              <th>Empresa</th>
              <th>Retirado</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default BolsonContainer;

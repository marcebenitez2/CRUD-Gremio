import React from "react";

function AfiliadosContainer({afiliadosArray}) {
  return (
    <div className="w-full h-full flex flex-col py-4 gap-3">
      <input className="border bg-transparent rounded-md px-2 py-1" />
      <table className="w-full h-full rounded-md">
        <thead className="bg-zinc-600">
          <tr>
            <th className="w-1/6">Nombre</th>
            <th className="w-1/6">Apellido</th>
            <th className="w-1/6">DNI</th>
            <th className="w-1/6">Fec. nacimiento</th>
            <th className="w-1/6">Empresa</th>
            <th className="w-1/6">Estado</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  );
}

export default AfiliadosContainer;

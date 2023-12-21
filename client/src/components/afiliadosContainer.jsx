import React from "react";

function AfiliadosContainer({ afiliadosArray }) {
  console.log(afiliadosArray);
  return (
    <div className="w-full h-full flex flex-col py-10 gap-3 overflow-x-hidden">
      <input className="border bg-transparent rounded-md px-2 py-1" />
      <div className="w-full overflow-y-auto  rounded-md">
        <table className="w-full">
          <thead className="bg-zinc-500 border border-zinc-600 sticky top-0">
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
            {afiliadosArray.map((x) => (
              <tr key={x.id} className="text-center">
                <td className="border border-zinc-500">{x.name}</td>
                <td className="border border-zinc-500">{x.surname}</td>
                <td className="border border-zinc-500">{x.dni}</td>
                <td className="border border-zinc-500">{x.birth}</td>
                <td className="border border-zinc-500">{x.company_name}</td>
                <td className="border border-zinc-500">{x.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AfiliadosContainer;

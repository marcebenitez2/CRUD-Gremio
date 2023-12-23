import React from "react";

function EmpresasCard({ empresas }) {
  console.log(empresas);
  return (
    <div className="w-1/3 h-3/4 bg-zinc-700 rounded-lg px-4 py-4 flex flex-col xln:w-1/2 mdn:w-4/5 smn:w-11/12  mdn:h-5/6">
      <div className="bg-zinc-900 w-full h-2/5 rounded-lg px-1 py-1 overflow-y-auto">
        <table>
          <thead>
            <tr>
              <th className="text-left">Nombre</th>
              <th className="text-left">Direccion</th>
            </tr>
          </thead>
          <tbody>
            {empresas.map((empresa) => {
              return (
                <tr key={empresa.id}>
                  <td>{empresa.name}</td>
                  <td>{empresa.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmpresasCard;

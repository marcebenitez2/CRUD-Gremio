import React, { useEffect, useState } from "react";

function AfiliadosContainer({ afiliadosArray, setSeleccionado }) {
  const [buscador, setBuscador] = useState("");
  const [afiliadosFiltrados, setAfiliadosFiltrados] = useState(afiliadosArray);

  useEffect(() => {
    const filtroMinusculas = buscador.toLowerCase().trim();
    if (filtroMinusculas !== "") {
      const filtrado = afiliadosArray.filter((x) =>
        Object.values(x).some(
          (valor) =>
            (typeof valor === "string" &&
              valor.toLowerCase().includes(filtroMinusculas)) ||
            (typeof valor === "number" &&
              valor.toString().includes(filtroMinusculas))
        )
      );
      setAfiliadosFiltrados(filtrado);
    } else {
      setAfiliadosFiltrados(afiliadosArray);
    }
  }, [buscador, afiliadosArray]);

  return (
    <div className="w-full h-full flex flex-col py-10 gap-3 overflow-x-hidden">
      <input
        className="border bg-transparent rounded-md px-2 py-1"
        onChange={(e) => setBuscador(e.target.value)}
        value={buscador}
        placeholder="Buscar..."
      />
      <div className="w-full overflow-y-auto rounded-md">
        <table className="w-full min-w-full">
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
            {afiliadosFiltrados.map((x) => (
              <tr
                key={x.id}
                className="text-center hover:bg-red-800 transition-all duration-100 cursor-pointer"
                onClick={() => setSeleccionado(x)}
              >
                <td className="border border-zinc-500">{x.name}</td>
                <td className="border border-zinc-500">{x.surname}</td>
                <td className="border border-zinc-500">{x.dni}</td>
                <td className="border border-zinc-500">{x.birth}</td>
                <td className="border border-zinc-500">{x.company_name}</td>
                <td
                  className={`border border-zinc-500 ${
                    x.state === true ? "bg-green-700" : "bg-red-700"
                  }`}
                >
                  {x.state === true ? "Activo" : "Inactivo"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AfiliadosContainer;

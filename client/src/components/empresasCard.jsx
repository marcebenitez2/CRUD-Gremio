import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { enviarDB } from "../services/postdb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EmpresasCard({ empresas }) {
  const [seleccionado, setSeleccionado] = useState(null);

  const [id, setId] = useState(null);
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [num_idem, setNum_idem] = useState("");

  const sendDB = () => {
    if (!nombre || !direccion || !telefono || !email || !num_idem) {
      return toast.error("Por favor, rellene todos los campos");
    }

    if (seleccionado) {
      const datos = {
        id: id,
        name: nombre,
        address: direccion,
        tel: telefono,
        email: email,
        num_idem: num_idem,
      };
      console.log(datos);
      enviarDB(datos, `https://crud-gremio-production.up.railway.app/empresas/${datos.id}`, "PUT");
      // window.location.reload();
    } else {
      const datos = {
        name: nombre,
        address: direccion,
        tel: telefono,
        email: email,
        num_idem: num_idem,
      };
      enviarDB(datos, "https://crud-gremio-production.up.railway.app/empresas");
      // window.location.reload();
    }
  };

  useEffect(() => {
    if (seleccionado) {
      setId(seleccionado.id);
      setNombre(seleccionado.name);
      setDireccion(seleccionado.address);
      setTelefono(Number(seleccionado.tel));
      setEmail(seleccionado.email);
      setNum_idem(seleccionado.num_idem);
    } else {
      setId(null);
      setNombre("");
      setDireccion("");
      setTelefono("");
      setEmail("");
      setNum_idem("");
    }
  }, [seleccionado]);

  return (
    <div className="w-1/2 h-3/4 bg-zinc-700 rounded-lg px-4 py-4 flex flex-col xln:w-9/12 mdn:w-4/5 smn:w-11/12 mdn:h-5/6 gap-4">
      <div className="bg-zinc-900 w-full h-2/5 rounded-lg px-1 py-1 overflow-y-auto">
        <table className="w-full">
          <thead className="sticky top-0 bg-zinc-950">
            <tr>
              <th className="w-1/5 text-left">Nombre</th>
              <th className="w-1/5 text-left">Direccion</th>
              <th className="w-1/5 text-left">Telefono</th>
              <th className="w-1/5 text-left">Email</th>
              <th className="w-1/5 text-left">Iden.Emp</th>
            </tr>
          </thead>
          <tbody>
            {empresas.map((empresa) => (
              <tr
                key={empresa.id}
                className={`${
                  seleccionado?.id === empresa.id ? "bg-red-800" : ""
                } hover:bg-red-800 transition-all duration-100 cursor-pointer `}
                onClick={() => {
                  setSeleccionado((prevSeleccionado) =>
                    prevSeleccionado === empresa ? null : empresa
                  );
                }}
              >
                <td className="border border-zinc-600 px-1">{empresa.name}</td>
                <td className="border border-zinc-600 px-1">{empresa.address}</td>
                <td className="border border-zinc-600 px-1">{empresa.tel}</td>
                <td className="border border-zinc-600 px-1">{empresa.email}</td>
                <td className="border border-zinc-600 px-1">{empresa.num_idem}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col">
        <label className="flex flex-col">
          Nombre
          <input
            type="text"
            className="rounded-lg text-black px-2 py-1"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label className="flex flex-col">
          Direccion
          <input
            type="text"
            className="rounded-lg text-black px-2 py-1"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </label>
        <label className="flex flex-col">
          Telefono
          <input
            type="number"
            className="rounded-lg text-black px-2 py-1"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </label>
        <label className="flex flex-col">
          Email
          <input
            type="text"
            className="rounded-lg text-black px-2 py-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="flex flex-col">
          Codigo de identificacion
          <input
            type="text"
            className="rounded-lg text-black px-2 py-1"
            value={num_idem}
            onChange={(e) => setNum_idem(e.target.value)}
          />
        </label>
      </div>
      <button
        className={`m-auto ${
          seleccionado
            ? "bg-orange-600 hover:bg-orange-800 transition-all duration-100"
            : "bg-red-800 hover:bg-red-900 transition-all duration-100"
        } px-10 py-3 rounded-lg`}
        onClick={sendDB}
      >
        {seleccionado ? "Editar" : "Agregar"}
      </button>
      <ToastContainer />
    </div>
  );
}

export default EmpresasCard;

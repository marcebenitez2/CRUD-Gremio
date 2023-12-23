import React, { useState } from "react";
import { enviarDB } from "../services/postdb";

function ModalAfiliados({
  openModal,
  closeModal,
  seleccionado,
  empresas,
  setSeleccionado,
}) {
  if (!openModal) return null;

  const [id, setId] = useState(seleccionado ? seleccionado.id : null);
  const [nombre, setNombre] = useState(seleccionado ? seleccionado.name : "");
  const [apellido, setApellido] = useState(
    seleccionado ? seleccionado.surname : ""
  );
  const [dni, setDni] = useState(seleccionado ? seleccionado.dni : "");
  const [nacimiento, setNacimiento] = useState(
    seleccionado ? seleccionado.birth : ""
  );
  const [idEmpresa, setIdEmpresa] = useState(
    seleccionado ? seleccionado.id_company : 1
  );
  const [activo, setActivo] = useState(
    seleccionado ? seleccionado.state : false
  );

  const guardarCambios = (e) => {
    e.preventDefault();
    const datos = {
      id: id,
      name: nombre,
      surname: apellido,
      dni: dni,
      birth: nacimiento,
      id_company: Number(idEmpresa),
      state: activo,
    };
    
    console.log(datos);

    if (!datos.id) {
      enviarDB(datos, "http://localhost:3000/afiliados");
    } else {
      enviarDB(datos, `http://localhost:3000/afiliados/${datos.id}`, "PUT");
    }
  };


  const cerrarModal = () => {
    setNombre("");
    setApellido("");
    setDni("");
    setNacimiento("");
    setIdEmpresa("");
    setActivo("");
    setSeleccionado(null);
    closeModal(!openModal);
  };



  return (
    <div className="absolute w-screen h-screen flex items-center justify-center top-0 text-white">
      <form
        className="w-1/2 bg-zinc-600 rounded-lg flex flex-col items-center px-10 py-5 justify-between lgn:px-3 gap-4 lgn:w-4/5"
        onSubmit={guardarCambios}
      >
        <h1 className="text-3xl font-semibold">
          {seleccionado ? "Editar" : "Agregar"}
        </h1>
        <div className="flex flex-col w-full gap-2">
          <label className="flex flex-col">
            Nombre
            <input
              type="text"
              className="rounded-md px-2 py-1 text-black"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
          <label className="flex flex-col">
            Apellido
            <input
              type="text"
              className="rounded-md px-2 py-1 text-black"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </label>
          <label className="flex flex-col">
            Dni
            <input
              type="number"
              className="rounded-md px-2 py-1 text-black"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
            />
          </label>
          <label className="flex flex-col">
            Nacimiento
            <input
              type="date"
              className="rounded-md px-2 py-1 text-black"
              value={nacimiento}
              onChange={(e) => setNacimiento(e.target.value)}
            />
          </label>
          <div className="flex w-full">
            <label className="flex flex-col w-4/5">
              Empresa
              <select
                className="text-black rounded-md py-1"
                value={empresas.find((empresa) => empresa.id === idEmpresa)}
                onChange={(e) => setIdEmpresa(e.target.value)}
              >
                {empresas.map((empresa) => (
                  <option key={empresa.id} value={empresa.id}>
                    {empresa.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col w-fit">
              Activo
              <input
                type="checkbox"
                className="h-6"
                checked={activo}
                onChange={() => setActivo(!activo)}
              />
            </label>
          </div>
        </div>
        <div className="flex h-10 w-full justify-center items-center gap-10">
          <button
            className="h-full w-32 smn:w-full font-semibold"
            onClick={() => cerrarModal()}
          >
            Cerrar
          </button>
          <button
            className="h-full w-32 smn:w-full rounded-lg bg-red-600 hover:bg-red-900 transition-all duration-300 font-semibold"
            type="submit"
          >
            Guadar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalAfiliados;

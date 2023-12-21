import React from "react";
import { useState } from "react";

function ModalAfiliados({ openModal, closeModal, seleccionado, empresas }) {
  if (!openModal) return null;

  console.log(seleccionado);

  const [nombre, setNombre] = useState(seleccionado ? seleccionado.name : "");
  const [apellido, setApellido] = useState(
    seleccionado ? seleccionado.surname : ""
  );
  const [dni, setDni] = useState(seleccionado ? seleccionado.dni : "");
  const [nacimiento, setNacimiento] = useState(
    seleccionado ? seleccionado.birth : ""
  );
  const [empresa, setEmpresa] = useState(
    seleccionado ? seleccionado.company_name : ""
  );
  const [activo, setActivo] = useState(seleccionado ? seleccionado.state : "");

  return (
    <div className="absolute w-screen h-screen flex items-center justify-center top-0 text-white">
      <form className="w-1/2 bg-zinc-600 rounded-lg flex flex-col items-center px-10 py-5 justify-between lgn:px-3 gap-4 lgn:w-4/5">
        <h1 className="text-3xl font-semibold">
          {seleccionado ? "Editar" : "Agregar"}
        </h1>
        <div className="flex flex-col w-full gap-2">
          <label className="flex flex-col">
            Nombre
            <input
              type="text"
              className="rounded-md px-2 py-1 text-black"
              defaultValue={nombre}
            />
          </label>
          <label className="flex flex-col">
            Apellido
            <input
              type="text"
              className="rounded-md px-2 py-1 text-black"
              defaultValue={apellido}
            />
          </label>
          <label className="flex flex-col">
            Dni
            <input
              type="number"
              className="rounded-md px-2 py-1 text-black"
              defaultValue={dni}
            />
          </label>
          <label className="flex flex-col">
            Nacimiento
            <input
              type="date"
              className="rounded-md px-2 py-1 text-black"
              defaultValue={nacimiento}
            />
          </label>
          <div className="flex w-full">
            <label className="flex flex-col w-4/5">
              Empresa
              <input className="rounded-md px-2 py-1 text-black" />
            </label>
            <label className="flex flex-col w-fit">
              Activo
              <input type="checkbox" className="h-6" />
            </label>
          </div>
        </div>
        <div className="flex h-10 w-full justify-center items-center gap-10">
          <button
            className="h-full w-32 smn:w-full font-semibold"
            onClick={() => closeModal(!openModal)}
          >
            Cerrar
          </button>
          <button className="h-full w-32 smn:w-full rounded-lg bg-red-600 hover:bg-red-900 transition-all duration-300 font-semibold">
            Guadar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalAfiliados;

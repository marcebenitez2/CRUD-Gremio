import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import AfiliadosContainer from "../components/afiliadosContainer";
import { useState } from "react";
import { useEffect } from "react";
import { fetchdb } from "../services/fetchdb";
import { IoMdAdd } from "react-icons/io";
import ModalAfiliados from "../components/modalAfiliados";

function Afiliados() {
  const [afiliados, setAfiliados] = useState(null);
  const [empresas, setEmpresas] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [seleccionado, setSeleccionado] = useState(null);

  const modal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    fetchdb("http://localhost:3000/afiliados")
      .then((data) => {
        setAfiliados(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setCargando(false);
      });
      

    fetchdb("http://localhost:3000/empresas")
      .then((data) => {
        setEmpresas(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);


  useEffect(() => {
    if (seleccionado !== null) {
      setOpenModal(true);
    }
  }, [seleccionado]);
  

  return (
    <main className="bg-zinc-900 w-screen h-screen">
      <div
        className={`w-full h-full py-6 px-10 text-white flex flex-col items-center ${
          openModal ? "blur" : null
        }`}
      >
        <Link to={"/menu"}>
          <IoMdArrowRoundBack className="text-5xl absolute left-10 top-6 text-red-600 hover:text-[#B31312] transition-all duration-300" />
        </Link>
        <IoMdAdd
          className="absolute top-6 right-10 text-5xl text-red-600 hover:text-[#B31312] transition-all duration-300"
          onClick={() => modal()}
        />
        <h1 className="font-semibold text-4xl">Afiliados</h1>
        {cargando ? (
          <p>Cargando...</p>
        ) : (
          <AfiliadosContainer
            afiliadosArray={afiliados}
            setSeleccionado={setSeleccionado}
          />
        )}
      </div>
      <ModalAfiliados
        openModal={openModal}
        closeModal={setOpenModal}
        seleccionado={seleccionado}
        empresas={empresas}
        setSeleccionado={setSeleccionado}
      />
    </main>
  );
}

export default Afiliados;

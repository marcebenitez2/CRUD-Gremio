import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import EmpresasCard from "../components/empresasCard";
import { useState } from "react";
import { useEffect } from "react";
import { fetchdb } from "../services/fetchdb";

function Empresas() {
  const [empresas, setEmpresas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
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

  return (
    <main className="bg-zinc-900 w-screen h-screen flex py-6 items-center flex-col text-white">
      <Link to={"/menu"}>
        <IoMdArrowRoundBack className="text-5xl absolute left-10 top-6 text-red-600 hover:text-[#B31312] transition-all duration-300" />
      </Link>
      <h1 className="font-semibold text-4xl">Empresas</h1>
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <EmpresasCard empresas={empresas} />
        </div>
      )}
    </main>
  );
}

export default Empresas;

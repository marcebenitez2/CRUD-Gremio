import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import AfiliadosContainer from "../components/afiliadosContainer";
import { useState } from "react";
import { useEffect } from "react";
import { fetchdb } from "../services/fetchdb";

function Afiliados() {
  const [afiliados, setAfiliados] = useState([]);

  useEffect(() => {
    fetchdb("http://localhost:3000/afiliados", setAfiliados);
  }, []);

  return (
    <main className="bg-zinc-900 w-screen h-screen py-6 px-10 text-white flex flex-col items-center">
      <Link to={"/menu"}>
        <IoMdArrowRoundBack className="text-5xl absolute left-10 top-6 text-red-600 hover:text-[#B31312] transition-all duration-300" />
      </Link>
      <h1 className="font-semibold text-4xl">Afiliados</h1>
      <AfiliadosContainer afiliadosArray={afiliados}/>
    </main>
  );
}

export default Afiliados;

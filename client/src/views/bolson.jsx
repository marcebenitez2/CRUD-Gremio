import React from "react";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

function Bolson() {
    const [state, setstate] = useState(initialState)


  return (
    <main className="bg-zinc-900 w-screen h-screen flex flex-col text-white items-center py-6">
      <Link to={"/menu"}>
        <IoMdArrowRoundBack className="text-5xl absolute left-10 top-6 text-red-600 hover:text-[#B31312] transition-all duration-300" />
      </Link>
      <h1 className="font-semibold text-4xl">Bolson</h1>
  
    </main>
  );
}

export default Bolson;

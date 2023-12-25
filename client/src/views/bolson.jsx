import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { fetchdb } from "../services/fetchdb";
import BolsonContainer from "../components/bolsonContainer";

function Bolson() {
  const [bolson, setBolson] = useState([]);

  useEffect(() => {
    fetchdb("http://localhost:3000/bolson")
      .then((data) => setBolson(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="bg-zinc-900 w-screen h-screen flex flex-col text-white items-center py-6">
      <Link to={"/menu"}>
        <IoMdArrowRoundBack className="text-5xl absolute left-10 top-6 text-red-600 hover:text-[#B31312] transition-all duration-300" />
      </Link>
      <h1 className="font-semibold text-4xl">Bolson</h1>
      <BolsonContainer/>
    </main>
  );
}

export default Bolson;

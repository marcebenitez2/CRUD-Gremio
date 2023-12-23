import React from "react";
import { SlLogout } from "react-icons/sl";
import MenuGrid from "../components/menuGrid";

function Menu() {
  const loggout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    window.location.href = "/";
  };
  

  return (
    <main className="w-screen h-screen bg-zinc-900 py-6 px-10 text-white flex flex-col items-center mdn:py-6">
      <SlLogout
        className="absolute left-10 top-6 text-5xl mdn:text-3xl mdn:top-6 text-red-600 hover:text-[#B31312] transition-all duration-300 cursor-pointer"
        onClick={loggout}
      />
      <h1 className="text-4xl mdn:text-2xl font-semibold">Bienvenido</h1>
      <div className="h-full w-full flex items-center justify-center">
        <MenuGrid />
      </div>
    </main>
  );
}

export default Menu;

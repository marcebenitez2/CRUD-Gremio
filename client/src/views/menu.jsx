import React from "react";
import { SlLogout } from "react-icons/sl";
import MenuGrid from "../components/menuGrid";

function Menu() {
  return (
    <main className="w-screen h-screen bg-zinc-900 py-16 px-10 text-white flex flex-col items-center mdn:py-6">
      <SlLogout
        fill="#B31312"
        className="absolute left-10 top-10 text-5xl mdn:text-3xl mdn:top-6"
      />
      <h1 className="text-4xl mdn:text-2xl">Bienvenido</h1>
      <div className="h-full w-full flex items-center justify-center">
        <MenuGrid />
      </div>
    </main>
  );
}

export default Menu;

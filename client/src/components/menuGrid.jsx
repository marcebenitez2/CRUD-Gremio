import React from "react";
import { Link } from "react-router-dom";

function MenuGrid() {
  return (
    <div className="h-2/3 w-1/2 grid grid-cols-2 gap-x-2 gap-y-2 xln:w-full mdn:grid-cols-1 mdn:py-10 mdn:h-full">
      <Link
        to="/menu/empresas"
        className="flex items-center justify-center bg-blue-700 rounded-lg text-2xl transition-all duration-300 hover:bg-blue-800"
      >
        Empresas
      </Link>
      <Link
        to="/menu/afiliados"
        className="flex items-center justify-center bg-yellow-700 rounded-lg text-2xl transition-all duration-300 hover:bg-yellow-800"
      >
        Afiliados
      </Link>
    </div>
  );
}

export default MenuGrid;

import React from "react";

function MenuGrid() {
  return (
    <div className="h-2/3 w-1/2 grid grid-cols-2 gap-x-2 gap-y-2 xln:w-full mdn:grid-cols-1 mdn:py-10 mdn:h-full">
      <div className="flex items-center justify-center bg-red-700 rounded-lg text-2xl transition-all duration-300 hover:bg-red-800 cursor-pointer">
        Caja navideña
      </div>
      <div className="flex items-center justify-center bg-green-700 rounded-lg text-2xl transition-all duration-300 hover:bg-green-800 cursor-pointer">
        Bolson
      </div>
      <div className="flex items-center justify-center bg-blue-700 rounded-lg text-2xl transition-all duration-300 hover:bg-blue-800 cursor-pointer">
        Empresas
      </div>
      <div className="flex items-center justify-center bg-yellow-700 rounded-lg text-2xl transition-all duration-300 hover:bg-yellow-800 cursor-pointer">
        Afiliados
      </div>
    </div>
  );
}

export default MenuGrid;

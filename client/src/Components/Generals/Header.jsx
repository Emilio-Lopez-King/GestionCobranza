import React from "react";

const Header = () => {
  return (
    <header className="bg-header-color fixed top-0 w-full p-3 shadow-md z-10">
      <div className="flex items-center">
        <h1 className="mx-auto text-blue-200 font-semibold w-1/3">
          Gestión de Cobranza Liberty
        </h1>
        <nav className="mx-auto space-x-4">
          <a href="/" className="aTransform ml-3 hover-effect text-white">
            Inicio
          </a>
          <a
            href="https://www.linkedin.com/in/emilio-lopez-favela"
            className="text ml-3 hover-effect text-white"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

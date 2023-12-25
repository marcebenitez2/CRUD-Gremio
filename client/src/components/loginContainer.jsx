import React from "react";
import { useState } from "react";
import { saveLocalStorage } from "../services/localStorage";

function LoginContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Por favor ingrese todos los campos");
    }

    console.log(email, password);

    try {
      const response = await fetch("https://crud-gremio-production.up.railway.app/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();

      if (!data.length) {
        return alert("Usuario o contraseña incorrectos");
      }

      const emailResponse = data[0].email;
      const usernameResponse = data[0].username;

      saveLocalStorage(emailResponse, usernameResponse);

      window.location.href = "/menu";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="w-1/3 bg-orange-500 rounded-xl py-4 px-10 flex flex-col justify-between gap-12 items-center"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center text-4xl font-semibold">Iniciar sesion</h1>
      <div>
        <label>
          Correo electronico
          <input
            value={email}
            type="text"
            className="w-full py-2 bg-transparent border rounded-xl px-2  border-black"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Contraseña
          <input
            type="password"
            className="w-full py-2 bg-transparent border rounded-xl px-2 border-black"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button
        className="bg-black w-fit text-white px-6 py-4 rounded-xl"
        type="submit"
      >
        Inciar sesion
      </button>
    </form>
  );
}

export default LoginContainer;

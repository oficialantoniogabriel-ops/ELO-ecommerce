import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const { registerEmail } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    await registerEmail(email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4">Criar conta ELO Commerce</h2>
      <form onSubmit={handleRegister} className="flex flex-col w-72 gap-3">
        <input type="email" placeholder="Email" className="p-2 border rounded" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" className="p-2 border rounded" onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { loginEmail, loginGoogle, loginFacebook } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginEmail(email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4">Entrar na ELO Commerce</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-72 gap-3">
        <input type="email" placeholder="Email" className="p-2 border rounded" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" className="p-2 border rounded" onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Entrar</button>
      </form>
      <div className="mt-4 flex flex-col gap-2">
        <button onClick={loginGoogle} className="bg-red-500 text-white p-2 rounded">Entrar com Google</button>
        <button onClick={loginFacebook} className="bg-blue-800 text-white p-2 rounded">Entrar com Facebook</button>
      </div>
    </div>
  );
};

export default Login;

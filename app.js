import React, { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // dados simulados em JSON local
    setProducts([
      { id: 1, name: "Ebook de Marketing Digital", price: 7500, currency: "AOA", img: "https://via.placeholder.com/250" },
      { id: 2, name: "Curso de Design Gráfico", price: 15000, currency: "AOA", img: "https://via.placeholder.com/250" },
      { id: 3, name: "Fone Bluetooth ELO", price: 22000, currency: "AOA", img: "https://via.placeholder.com/250" },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-6">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">🛍️ ELO Commerce</h1>
        <p className="text-gray-500">Produtos físicos e digitais em Kwanza (AOA)</p>
      </header>

      <main className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
            <img src={p.img} alt={p.name} className="rounded-t-xl w-full" />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{p.name}</h2>
              <p className="text-gray-600 dark:text-gray-300">{p.price} {p.currency}</p>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Comprar
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="text-center mt-10 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} ELO Commerce — Todos os direitos reservados
      </footer>
    </div>
  );
      }

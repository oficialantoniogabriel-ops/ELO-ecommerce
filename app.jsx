import React, { useState, useEffect } from "react";
import "./index.css";

export default function App() {
  const [currency, setCurrency] = useState("AOA");
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Produtos locais (sem Firebase)
    setProducts([
      { id: 1, name: "Ebook de Marketing Digital", price: 7500, img: "https://via.placeholder.com/250" },
      { id: 2, name: "Curso de Design Gráfico", price: 15000, img: "https://via.placeholder.com/250" },
      { id: 3, name: "Fone Bluetooth ELO", price: 22000, img: "https://via.placeholder.com/250" },
    ]);
  }, []);

  // Taxas de câmbio simples (fixas para exemplo)
  const rates = { AOA: 1, USD: 0.0011, EUR: 0.0010 };

  const convert = (amount) => (amount * rates[currency]).toFixed(2);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setMessage(`${product.name} adicionado ao carrinho!`);
    setTimeout(() => setMessage(""), 2000);
  };

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  const checkout = () => {
    if (cart.length === 0) {
      setMessage("Seu carrinho está vazio!");
      return;
    }
    setMessage("✅ Pagamento confirmado! Obrigado por comprar na ELO Commerce!");
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-6">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">🛍️ ELO Commerce</h1>
        <p className="text-gray-500">Produtos físicos e digitais com conversão de moeda</p>

        <div className="mt-4">
          <label className="mr-2 font-semibold">Moeda:</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="border p-2 rounded bg-white dark:bg-gray-800"
          >
            <option value="AOA">Kwanza (AOA)</option>
            <option value="USD">Dólar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
          </select>
        </div>
      </header>

      {message && <p className="text-center text-green-600 font-semibold mb-4">{message}</p>}

      <main className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
            <img src={p.img} alt={p.name} className="rounded-t-xl w-full" />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{p.name}</h2>
              <p className="text-gray-600 dark:text-gray-300">
                {convert(p.price)} {currency}
              </p>
              <button
                onClick={() => addToCart(p)}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Adicionar
              </button>
            </div>
          </div>
        ))}
      </main>

      <section className="mt-10 p-4 border-t">
        <h2 className="text-xl font-semibold mb-2 text-center">🛒 Carrinho</h2>
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Nenhum item no carrinho.</p>
        ) : (
          <>
            <ul className="mb-4">
              {cart.map((item, i) => (
                <li key={i} className="flex justify-between border-b py-1">
                  <span>{item.name}</span>
                  <span>
                    {convert(item.price)} {currency}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-center font-bold mb-4">
              Total: {convert(total)} {currency}
            </p>
            <div className="text-center">
              <button
                onClick={checkout}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Finalizar Pagamento
              </button>
            </div>
          </>
        )}
      </section>

      <footer className="text-center mt-10 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} ELO Commerce — Todos os direitos reservados
      </footer>
    </div>
  );
        }

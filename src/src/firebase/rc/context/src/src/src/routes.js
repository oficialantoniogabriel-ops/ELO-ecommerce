import React from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const featured = [
    { id: 1, name: "Ebook Marketing Digital", price: 5000, currency: "AOA" },
    { id: 2, name: "Curso Design Gráfico", price: 15000, currency: "AOA" },
    { id: 3, name: "Fone Bluetooth", price: 20000, currency: "AOA" }
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Destaques ELO Commerce</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;

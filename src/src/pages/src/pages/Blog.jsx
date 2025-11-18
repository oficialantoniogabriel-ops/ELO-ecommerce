import React from "react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Como vender mais produtos digitais",
      content: "Dicas para aumentar suas vendas no ELO Commerce...",
    },
    {
      id: 2,
      title: "Como funciona o sistema de afiliados",
      content: "Com o programa de afiliados ELO, qualquer usuário pode gerar links únicos e ganhar comissão.",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Blog ELO Commerce</h2>
      {posts.map((p) => (
        <div key={p.id} className="border-b py-4">
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <p className="text-gray-700 mt-2">{p.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;

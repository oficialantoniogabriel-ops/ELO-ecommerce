import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="mt-2 text-gray-600">{product.price} {product.currency}</p>
      <Link to={`/product/${product.id}`}>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Ver produto
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;

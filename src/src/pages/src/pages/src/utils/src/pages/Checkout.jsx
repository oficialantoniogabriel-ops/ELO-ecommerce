import React, { useState } from "react";
import { processStripePayment, simulateMulticaixaPayment } from "../utils/paymentIntegration";

const Checkout = () => {
  const [amount, setAmount] = useState(0);
  const [method, setMethod] = useState("stripe");
  const [message, setMessage] = useState("");

  const handlePayment = async () => {
    if (method === "stripe") {
      await processStripePayment(amount);
      setMessage("Pagamento Stripe concluído!");
    } else {
      await simulateMulticaixaPayment(amount);
      setMessage("Pagamento Multicaixa concluído!");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Finalizar Compra</h2>
      <input
        type="number"
        placeholder="Valor em AOA"
        className="border p-2 rounded mb-4"
        onChange={(e) => setAmount(e.target.value)}
      />
      <select className="border p-2 rounded mb-4" onChange={(e) => setMethod(e.target.value)}>
        <option value="stripe">Stripe</option>
        <option value="multicaixa">Multicaixa Express</option>
      </select>
      <button onClick={handlePayment} className="bg-green-600 text-white px-4 py-2 rounded">
        Pagar
      </button>
      {message && <p className="mt-4 text-blue-600">{message}</p>}
    </div>
  );
};

export default Checkout;

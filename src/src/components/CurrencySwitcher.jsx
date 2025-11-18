import React from "react";
import { useCurrency } from "../context/CurrencyContext";

const CurrencySwitcher = () => {
  const { currency, setCurrency } = useCurrency();
  const currencies = ["AOA", "USD", "EUR", "BRL", "XAF", "XOF"];

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      className="border p-2 rounded text-sm bg-white dark:bg-gray-800"
    >
      {currencies.map((c) => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  );
};

export default CurrencySwitcher;

import axios from "axios";

const API_URL = "https://api.exchangerate.host/latest"; // API gratuita e confiável

export const convertCurrency = async (amount, from = "AOA", to = "USD") => {
  try {
    const response = await axios.get(`${API_URL}?base=${from}&symbols=${to}`);
    const rate = response.data.rates[to];
    return (amount * rate).toFixed(2);
  } catch (error) {
    console.error("Erro na conversão de moeda:", error);
    return amount;
  }
};

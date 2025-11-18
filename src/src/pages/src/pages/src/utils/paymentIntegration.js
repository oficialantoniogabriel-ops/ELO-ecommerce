import axios from "axios";

export const processStripePayment = async (amount, currency = "AOA") => {
  try {
    const res = await axios.post("/api/payment/stripe", { amount, currency });
    return res.data;
  } catch (error) {
    console.error("Erro no pagamento Stripe:", error);
  }
};

export const simulateMulticaixaPayment = async (amount) => {
  console.log(`Pagamento Multicaixa simulado: ${amount} AOA`);
  return { status: "success", message: "Pagamento Multicaixa concluído" };
};

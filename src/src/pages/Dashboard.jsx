import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const Dashboard = () => {
  const { user } = useAuth();
  const [sales, setSales] = useState([]);
  const [affiliateEarnings, setAffiliateEarnings] = useState(0);

  useEffect(() => {
    if (!user) return;
    const fetchSales = async () => {
      const q = query(collection(db, "sales"), where("sellerId", "==", user.uid));
      const querySnapshot = await getDocs(q);
      setSales(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchSales();
  }, [user]);

  useEffect(() => {
    // Simula comissões de afiliados
    const commission = sales.reduce((acc, sale) => acc + sale.amount * 0.1, 0);
    setAffiliateEarnings(commission);
  }, [sales]);

  if (!user) {
    return <div className="text-center mt-8">Faça login para ver seu painel.</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Painel de Controle</h2>
      <p className="mb-4">Bem-vindo, {user.email}</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Suas Vendas</h3>
          <p>Total: {sales.length}</p>
        </div>
        <div className="border p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Ganhos de Afiliado</h3>
          <p>{affiliateEarnings.toFixed(2)} AOA</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

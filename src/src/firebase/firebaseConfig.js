// Importação Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// 🔥 CONFIGURAÇÃO DO SEU PROJETO FIREBASE
// (substitua pelos dados do console do Firebase depois de criar o projeto)
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "elo-commerce.firebaseapp.com",
  projectId: "elo-commerce",
  storageBucket: "elo-commerce.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:abc123def456ghi789"
};

// Inicialização Firebase
const app = initializeApp(firebaseConfig);

// Serviços Firebase
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Providers de login social
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

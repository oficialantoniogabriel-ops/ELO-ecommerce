import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      welcome: "Bem-vindo à ELO Commerce",
      highlights: "Destaques ELO Commerce",
      viewProduct: "Ver produto",
      checkout: "Finalizar compra"
    }
  },
  en: {
    translation: {
      welcome: "Welcome to ELO Commerce",
      highlights: "ELO Commerce Highlights",
      viewProduct: "View product",
      checkout: "Checkout"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  interpolation: { escapeValue: false }
});

export default i18n;

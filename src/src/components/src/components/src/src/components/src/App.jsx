import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CurrencyProvider } from "./context/CurrencyContext";
import RoutesApp from "./routes";
import "./i18n";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CurrencyProvider>
          <RoutesApp />
        </CurrencyProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./Components/Translation/en/translation.json"
import es from "./Components/Translation/es/translation.json"

const idiomaPredeterminado = localStorage.getItem("lng") || "es";

i18next.use(initReactI18next).init({
  lng: idiomaPredeterminado,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: {
      translation: es,
    },
    en: {
      translation: en,
    },
  },
});

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <App />
  // </StrictMode>
);

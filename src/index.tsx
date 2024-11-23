import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_en from "./constants/en/global.json";
import global_fr from "./constants/fr/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en", // default language
  resources: {
    en: {
      global: global_en,
    },
    fr: {
      global: global_fr,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <I18nextProvider i18n={i18next}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nextProvider>
);

import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import languagedetector from "i18next-browser-languagedetector";

i18n.use(initReactI18next).use(languagedetector).use(i18nBackend).init({
  debug: true,
  fallbackLng: "en",
  lng: "en",
  saveMissing: true,
});

export default i18n;

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const lang = localStorage.getItem("i18nextLng");

i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: lang ? lang : "en",
        lng: lang ? lang : "en",
        debug: false,
        returnObjects: true,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: "/locales/{{lng}}/translation.json", // tarjima fayllar yo‘li
        },
    });

export default i18next;

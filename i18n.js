"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from "./public/Localization/ru/global.json";
import uz from "./public/Localization/uz/global.json";

const resources = {
  ru: { translation: ru },
  uz: { translation: uz },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "uz",
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

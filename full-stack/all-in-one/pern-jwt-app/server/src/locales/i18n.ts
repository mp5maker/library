import i18next from "i18next";
import * as English from "./en.json";
import * as Bengali from "./bn.json";

i18next.init({
  resources: {
    en: {
      translation: English,
    },
    bn: {
      translation: Bengali,
    },
  },
  lng: "en",
  fallbackLng: "en",
});

export default i18next;

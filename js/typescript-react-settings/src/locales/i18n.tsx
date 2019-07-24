import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import * as English from "./en.json"
import * as Bengali from "./bn.json"

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: English
            },
            bn: {
                translation: Bengali
            }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
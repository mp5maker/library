import { I18n } from "i18n";
import path from "path";

const i18n = new I18n({
  locales: ["en", "bn"],
  directory: path.join(__dirname, "."),
});

export default i18n;

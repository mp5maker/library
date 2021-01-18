import * as yup from "yup";
import i18n from "../locales/i18n";

export default ({ currentLanguage = "en" }) => {
  const t = i18n.getDataByLanguage(currentLanguage).translation;
  return yup.object().shape({
    username: yup.string().required(t["USERNAME_IS_REQUIRED"]),
    email: yup.string().email().required(t["EMAIL_IS_REQUIRED"]),
    password: yup.string().required(t["PASSWORD_IS_REQUIRED"]),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], t["PASSWORD_MUST_MATCH"]),
  });
};

import * as yup from "yup";
import i18n from "../locales/i18n";

export default ({ currentLanguage = "en" }) => {
  const data = i18n.getDataByLanguage(currentLanguage);
  return yup.object().shape({
    username: yup.string().required(data.translation["USERNAME_IS_REQUIRED"]),
    email: yup.string().email().required(data.translation["EMAIL_IS_REQUIRED"]),
    password: yup.string().required(data.translation["PASSWORD_IS_REQUIRED"]),
    repeatPassword: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        data.translation["PASSWORD_MUST_MATCH"]
      ),
  });
};

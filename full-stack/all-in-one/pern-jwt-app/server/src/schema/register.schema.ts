import * as yup from "yup";
import i18n from "../locales/i18n";

export default yup.object().shape({
  username: yup.string().required(i18n.__("USERNAME_IS_REQUIRED")),
  email: yup.string().email().required(i18n.__("EMAIL_IS_REQUIRED")),
  password: yup.string().required(i18n.__("PASSWORD_IS_REQUIRED")),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], i18n.__("PASSWORD_MUST_MATCH")),
});

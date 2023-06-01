import { createI18n } from "vue-i18n";
import enLocale from "./lang/en/index";
import zhLocale from "./lang/zh/index";
const obj:{[key:string]:object|boolean|string}={
  legacy: false,

  locale: "zhLocale",
  messages: {
    zhLocale,
    enLocale,
  },
}
const i18n = createI18n(obj);

export default i18n;

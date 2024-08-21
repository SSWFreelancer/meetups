import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    welcome: "Meetsup",
  },
  ru: {
    welcome: "Встреча",
  },
};

const i18n = new VueI18n({
  locale: "ru",
  messages,
});

export default i18n;

import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      logo: "Meetups",
      login: "Login",
      signup: "Sign up",
      logout: "Logout",
      backTolist: "Back to list",
      password: "Password",
      rePassword: "Repeat password",
      name: "Name",
      agreement: "I agree with terms and conditions",
      haveAccount: "Already have an account?",
      noAccount: "Don't have an account?",
      all: "All",
      past: "Past",
      expected: "Expected",
      search: "Search",
      noMatches: "No matches...",
    },
  },
  ru: {
    message: {
      logo: "Встречи",
      login: "Вход",
      signup: "Регистрация",
      logout: "Выход",
      backTolist: "Вернуться к списку",
      password: "Пароль",
      rePassword: "Повторите пароль",
      name: "Имя",
      agreement: "Я согласен с условиями",
      haveAccount: "Уже есть аккаунт?",
      noAccount: "Ещё нет аккаунта?",
      all: "Все",
      past: "Прошедшие",
      expected: "Ожидаемые",
      search: "Поиск",
      noMatches: "Нет совпадений...",
    },
  },
};

const i18n = new VueI18n({
  locale: "ru",
  fallbackLocale: "ru",
  messages,
});

export default i18n;

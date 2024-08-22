import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const stateValueString = localStorage.getItem("isAuth");
const stateValue: boolean = stateValueString === "true";
export default new Vuex.Store({
  state: {
    isAuth: stateValue,
    justLoggedIn: false,
  },
  mutations: {
    login(state) {
      state.isAuth = true;
      state.justLoggedIn = true;
      localStorage.setItem("isAuth", JSON.stringify(true));
    },
    logout(state) {
      state.isAuth = false;
      state.justLoggedIn = false;
      localStorage.setItem("isAuth", JSON.stringify(false));
    },
  },
});

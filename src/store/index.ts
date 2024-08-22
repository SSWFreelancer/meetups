import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const stateValueString = localStorage.getItem("isAuth");
const stateValue: boolean = stateValueString === "true";
export default new Vuex.Store({
  state: {
    isAuth: stateValue,
  },
  mutations: {
    login(state) {
      state.isAuth = true;
      localStorage.setItem("isAuth", JSON.stringify(true));
    },
    logout(state) {
      state.isAuth = false;
      localStorage.setItem("isAuth", JSON.stringify(false));
    },
  },
});

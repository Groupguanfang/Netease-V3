import { createStore } from "vuex";
export default createStore({
  state: {
    darkMode: true,
    menuOpen: false
  },
  mutations: {
    updateMenu(state) {
      state.menuOpen = !state.menuOpen
    }
  },
  actions: {},
  modules: {}
});

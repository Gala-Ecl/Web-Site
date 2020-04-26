import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: null,
    isAuthenticated: false,
    firstName: null,
    lastName: null,
    email: null,
    privilege: null,
    tableId: null,
    busId: null,
    volunteerId: null,
  },
  mutations: {
    login(state, data) {
      const {
        id,
        firstName,
        lastName,
        email,
        privilege,
        tableId,
        busId,
        volunteerId,
      } = data;
      state.id = id;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.privilege = privilege;
      state.tableId = tableId;
      state.busId = busId;
      state.volunteerId = volunteerId;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.id = null
      state.isAuthenticated = null
      state.firstName = null
      state.lastName = null
      state.email = null
      state.privilege = null
      state.tableId = null
      state.volunteerId = null
      state.busId = null
    },
  },
});

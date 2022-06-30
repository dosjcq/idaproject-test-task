import { v4 as uuidv4 } from "uuid";

import { apiCall } from "../api/apiCall";

const BASE_URL = "http://localhost:3001/items";

export const state = () => ({
  items: [],
  filtredItems: [],
  filter: "idle",
});

export const getters = {
  getItems(state) {
    const returnedItems =
      state.filter === "idle" ? state.items : state.filtredItems;
    return returnedItems;
  },
};

export const mutations = {
  setItems(state, items) {
    state.items = items;
  },
  addItem(state, item) {
    state.items.push(item);
  },
  setFiltredItems(state, payload) {
    state.filtredItems = payload.items;
    state.filter = payload.filter;
  },
};

export const actions = {
  async fetchItems({ commit }) {
    const items = await apiCall(BASE_URL);
    commit("setItems", items);
  },
  async addItem({ commit, state, dispatch }, payload) {
    const newProduct = {
      id: uuidv4(),
      ...payload,
    };

    const newItem = await apiCall(BASE_URL, "POST", JSON.stringify(newProduct));

    commit("addItem", newItem);
    dispatch("filterItems", { filter: state.filter });
  },
  async deleteItem({ dispatch, state }, payload) {
    await apiCall(`${BASE_URL}/${payload.id}`, "DELETE");

    await dispatch("fetchItems", "http://localhost:3001/items");

    dispatch("filterItems", { filter: state.filter });
  },
  filterItems({ commit, state }, payload) {
    const copy = [...state.items];
    if (payload.filter === "fromMin") {
      copy.sort((a, b) => {
        return (
          Number(a.price.replace(/\s/g, "")) -
          Number(b.price.replace(/\s/g, ""))
        );
      });
      commit("setFiltredItems", { items: copy, filter: payload.filter });
    } else if (payload.filter === "fromMax") {
      copy.sort((a, b) => {
        return (
          Number(b.price.replace(/\s/g, "")) -
          Number(a.price.replace(/\s/g, ""))
        );
      });
      commit("setFiltredItems", { items: copy, filter: payload.filter });
    } else if (payload.filter === "alphabet") {
      copy.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      );
      commit("setFiltredItems", { items: copy, filter: payload.filter });
    } else {
      commit("setFiltredItems", { items: copy, filter: payload.filter });
    }
  },
};

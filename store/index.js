import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  items: [],
});

export const getters = {
  getItems(state) {
    return state.items;
  },
};

export const mutations = {
  setItems(state, items) {
    state.items = items;
  },
  addItem(state, item) {
    state.items.push(item);
  },
};

export const actions = {
  async fetchItems(
    { commit },
    url,
    method = "GET",
    body = null,
    headers = { "Content-Type": "application/json" }
  ) {
    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const items = await response.json();

      commit("setItems", items);
    } catch (e) {
      throw e;
    }
  },
  async addItem({ commit }, payload) {
    const newProduct = {
      id: uuidv4(),
      ...payload,
    };

    try {
      const response = await fetch("http://localhost:3001/items", {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const newItem = await response.json();
      commit("addItem", newItem);
    } catch (e) {
      throw e;
    }
  },
};

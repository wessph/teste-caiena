import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const api = {
  async init() {
    Vue.prototype.$Api = api;
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = process.env.VUE_APP_API_URL;
  },

  async call(method, resource, data) {
    return Vue.axios[method](resource, data);
  }
};

export default api;

import Vue from "vue";
import SvgIcon from "@/components/SvgIcon"; // svg组件

// 1. 全局注册SvgIcon组件
Vue.component("svg-icon", SvgIcon);
// 2. 载入所有svg icon
const requireContext = require.context("./assets/icons", false, /\.svg$/);
requireContext.keys().forEach(requireContext);

import App from "./App.vue";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import formCreate from "form-create/element"
import province from "./assets/province_city_area"
import router from './router'

window.province = province

Vue.use(formCreate)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

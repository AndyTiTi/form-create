import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import formCreate from "form-create/element"


Vue.use(formCreate)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

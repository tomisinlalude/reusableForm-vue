import Vue from 'vue'
import App from './App.vue'
import VueFormGenerator from 'vue-form-generator'

Vue.use(VueFormGenerator);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

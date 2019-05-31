import Vue from 'vue'
import App from './App.vue'
import DynamicInput from '../packages/dynamic-input'

Vue.config.productionTip = false
Vue.use(DynamicInput)

new Vue({
  render: h => h(App)
}).$mount('#app')

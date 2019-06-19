import Vue from 'vue'
import App from './App.vue'
import DynamicForm from '../packages/index'

Vue.config.productionTip = false
Vue.use(DynamicForm)

new Vue({
  render: h => h(App)
}).$mount('#app')

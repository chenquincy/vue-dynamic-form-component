import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import DynamicForm from '../packages/index'

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
Vue.use(DynamicForm)

new Vue({
  render: h => h(App)
}).$mount('#app')

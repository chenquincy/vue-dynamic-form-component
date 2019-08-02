import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

import App from './App.vue'
import DynamicForm from '../packages/index'

Vue.config.productionTip = false
Vue.use(DynamicForm)
Vue.use(ElementUI, { locale })

new Vue({
  render: h => h(App)
}).$mount('#app')

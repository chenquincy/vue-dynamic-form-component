import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import DynamicForm from '../../packages/index'
import './public/css/index.css'

export default ({
  Vue
}) => {
  Vue.use(ElementUI)
  Vue.use(DynamicForm)
}

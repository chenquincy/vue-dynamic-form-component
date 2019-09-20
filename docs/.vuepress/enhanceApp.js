import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import DynamicForm from '../../packages/index'
import './public/css/index.css'

export default ({
  Vue
}) => {
  Vue.use(ElementUI, { locale })
  Vue.use(DynamicForm)
}

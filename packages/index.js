import DynamicForm from './dynamic-form/index'

const components = [
  DynamicForm
]

const install = function (Vue) {
  if (install.installed) {
    return false
  }
  install.installed = true
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  DynamicForm
}

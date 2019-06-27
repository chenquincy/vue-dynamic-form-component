import DynamicForm from './dynamic-form/index'

const install = function (Vue) {
  if (install.installed) {
    return false
  }
  install.installed = true
  DynamicForm.install(Vue)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default DynamicForm

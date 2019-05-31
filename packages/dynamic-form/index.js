import component from './form.vue'

component.install = function (Vue) {
  Vue.component(component.name, component)
}

export default component

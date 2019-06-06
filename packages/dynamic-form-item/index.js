import component from './form-item.vue'

component.install = function (Vue) {
  Vue.component(component.name, component)
}

export default component

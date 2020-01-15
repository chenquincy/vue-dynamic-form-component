import DynamicComponent from './component.vue'

DynamicComponent.install = function (Vue) {
  Vue.component(DynamicComponent.name, DynamicComponent)
}

export default DynamicComponent

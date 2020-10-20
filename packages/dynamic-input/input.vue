<template>
  <component
    class="dynamic-input"
    v-model="_value"
    v-if="!isSpecialType || (descriptor.component && descriptor.component.name)"
    v-bind="_bind"
    v-on="_on"
    :is="_name"
    :size="size">
    <dynamic-component v-for="(component, index) in _children" :key="index" :component="component"></dynamic-component>
  </component>
  <!-- enum type use el-select -->
  <el-select
    v-else-if="descriptor.type === 'enum'"
    class="dynamic-input"
    v-model="_value"
    v-bind="_bind"
    v-on="_on"
    :class="{'multi-select': descriptor.multiple}"
    :size="size"
    :multiple="descriptor.multiple">
    <el-option v-for="option in _options" :key="option.label" :value="option.value" :label="option.label" :disabled="option.disabled"></el-option>
  </el-select>
  <!-- date type use el-date-picker -->
  <el-date-picker
    v-else-if="descriptor.type === 'date'"
    class="dynamic-input"
    type="datetime"
    v-model="_value"
    v-bind="_bind"
    v-on="_on"
    :size="size">
  </el-date-picker>
</template>

<script>
import DynamicComponent from '../dynamic-component'

const TYPE_COMPONENT_MAP = {
  string: 'el-input',
  number: 'el-input-number',
  boolean: 'el-switch',
  regexp: 'el-input',
  integer: 'el-input-number',
  float: 'el-input-number',
  enum: 'el-select',
  url: 'el-input'
}

export default {
  name: 'dynamic-input',
  componentName: 'dynamic-input',
  props: {
    value: {
      required: true
    },
    size: {
      type: String,
      default: 'small'
    },
    descriptor: {
      type: Object,
      required: true
    }
  },
  components: {
    DynamicComponent
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
    _name () {
      if (!this.descriptor.component || !this.descriptor.component.name) {
        return TYPE_COMPONENT_MAP[this.descriptor.type] || 'el-input'
      } else {
        return this.descriptor.component.name
      }
    },
    _options () {
      if (this.descriptor.enum || this.descriptor.options) {
        const data = this.descriptor.options instanceof Array ? this.descriptor.options : this.descriptor.enum
        return data.map(item => {
          if (typeof item === 'object') {
            return item
          } else {
            return { label: item, value: item }
          }
        })
      } else {
        return []
      }
    },
    _bind () {
      let data = {};
      /**
       * Compatible with the version <= 2.2.0
       * These props is the first level props of descriptor in old version
       */
      ['disabled', 'placeholder', 'autocomplete'].forEach(key => {
        if (typeof this.descriptor[key] !== 'undefined') {
          data[key] = this.descriptor[key]
        }
      })
      const props = this.descriptor.component && this.descriptor.component.props
        ? this.descriptor.component.props
        : this.descriptor.props
      return Object.assign(data, props)
    },
    _on () {
      return this.descriptor.component && this.descriptor.component.events
        ? this.descriptor.component.events
        : (this.descriptor.events || {})
    },
    _children () {
      if (!this.descriptor.component) {
        return []
      }
      if (Array.isArray(this.descriptor.component.children)) {
        return this.descriptor.component.children
      }
      if (typeof this.descriptor.component.children === 'string') {
        return [this.descriptor.component.children]
      }
      return []
    },
    isSpecialType () {
      return ['enum', 'date'].includes(this.descriptor.type)
    }
  },
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.dynamic-input {
  width: calc(100% - 60px);
}
.multi-select {
  width: calc(100% - 60px);
}
</style>

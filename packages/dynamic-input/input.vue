<template>
  <component
    class="dynamic-input"
    v-model="_value"
    v-if="!isSpecialType"
    v-bind="_bind"
    :is="name"
    :size="size">
  </component>
  <!-- integer, number, float type use el-input with v-model.number -->
  <el-input
    v-else-if="['integer', 'number', 'float'].includes(descriptor.type)"
    class="dynamic-input"
    v-model.number="_value"
    v-bind="_bind"
    :size="size">
  </el-input>
  <!-- enum type use el-select -->
  <el-select
    v-else-if="descriptor.type === 'enum'"
    class="dynamic-input"
    v-model="_value"
    v-bind="_bind"
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
    :size="size">
  </el-date-picker>
</template>

<script>
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
  components: {},
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
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
       * These props is the first level prop of descriptor in old version
       */
      ['disabled', 'placeholder', 'autocomplete'].forEach(key => {
        if (typeof this.descriptor[key] !== 'undefined') {
          data[key] = this.descriptor[key]
        }
      })
      return Object.assign(data, this.descriptor.props)
    },
    isSpecialType () {
      return ['integer', 'float', 'number', 'enum', 'date'].includes(this.descriptor.type)
    }
  },
  data () {
    return {
      name: ''
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.name = TYPE_COMPONENT_MAP[this.descriptor.type] || 'el-input'
    }
  }
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

<template>
  <component
    class="dynamic-input"
    v-model="_value"
    v-if="!isSpecialType"
    :is="name"
    :size="size"
    :disabled="descriptor.disabled"
    :autocomplete="descriptor.autocomplete"
    :placeholder="descriptor.placeholder">
  </component>
  <!-- integer, number, float type use el-input with v-model.number -->
  <el-input
    v-else-if="['integer', 'number', 'float'].includes(descriptor.type)"
    v-model.number="_value"
    :size="size"
    :disabled="descriptor.disabled"
    :placeholder="descriptor.placeholder"
    :autocomplete="descriptor.autocomplete">
  </el-input>
  <!-- enum type use el-select -->
  <el-select
    v-else-if="descriptor.type === 'enum'"
    class="dynamic-input"
    v-model="_value"
    :size="size"
    :disabled="descriptor.disabled"
    :placeholder="descriptor.placeholder"
    :multiple="descriptor && descriptor.multiple">
    <el-option v-for="option in _options" :key="option.label" :value="option.value" :label="option.label" :disabled="option.disabled"></el-option>
  </el-select>
  <!-- date type use el-date-picker -->
  <el-date-picker
    v-else-if="descriptor.type === 'date'"
    class="dynamic-input"
    type="datetime"
    v-model="_value"
    :size="size"
    :disabled="descriptor.disabled"
    :placeholder="descriptor.placeholder">
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
      if (this.descriptor && this.descriptor.options instanceof Array) {
        return this.descriptor.options.map(item => {
          if (typeof item === 'string') {
            return { label: item, value: item }
          } else {
            return item
          }
        })
      } else {
        return []
      }
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
      this.name = TYPE_COMPONENT_MAP[this.type] || 'el-input'
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input {
  width: calc(100% - 60px);
}
</style>

<template>
  <component
    class="dynamic-input"
    v-model="_value"
    v-if="!isSpecialType(type)"
    :is="name"
    :size="size"
    :disabled="disabled"
    :placeholder="placeholder">
  </component>
  <!-- integer, number, float type use el-input with v-model.number -->
  <el-input v-else-if="['integer', 'number', 'float'].includes(type)" v-model.number="_value" :size="size" :disabled="disabled" :placeholder="placeholder"></el-input>
  <!-- enum type use el-select -->
  <el-select v-else-if="type === 'enum'" class="dynamic-input" v-model="_value" :size="size" :disabled="disabled" :placeholder="placeholder" :multiple="extend && extend.multiple">
    <el-option v-for="option in _options" :key="option.label" :value="option.value" :label="option.label" :disabled="option.disabled"></el-option>
  </el-select>
  <!-- date type use el-date-picker -->
  <el-date-picker v-else-if="type === 'date'" class="dynamic-input" v-model="_value" :size="size" :disabled="disabled" type="datetime" :placeholder="placeholder"></el-date-picker>
</template>

<script>
import {
  Button,
  DatePicker,
  Input,
  InputNumber,
  Option,
  Switch,
  Select
} from 'element-ui'

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
    disabled: Boolean,
    placeholder: String,
    size: {
      type: String,
      default: 'small'
    },
    /**
     * value type
     * options: ['string', 'number', 'boolean', 'regexp', 'integer', 'float', 'enum', 'date', 'url', 'hex', 'email']
     */
    type: {
      type: String,
      required: true
    },
    /**
     * extend options of component
     * extends.options: [{ label: String, value: Any }] || [String] // select component's options
     */
    extend: Object
  },
  components: {
    ElInput: Input,
    ElInputNumber: InputNumber,
    ElSwitch: Switch,
    ElSelect: Select,
    ElOption: Option,
    ElDatePicker: DatePicker,
    ElButton: Button
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
    _options () {
      if (this.extend && this.extend.options instanceof Array) {
        return this.extend.options.map(item => {
          if (typeof item === 'string') {
            return { label: item, value: item }
          } else {
            return item
          }
        })
      } else {
        return []
      }
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
    },
    isSpecialType (type) {
      return ['integer', 'float', 'number', 'enum', 'date'].includes(type)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input {
  width: calc(100% - 30px);
}
</style>

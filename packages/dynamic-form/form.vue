<template>
  <div class="dynamic-form">
  </div>
</template>

<script>
import { getStringLength, getLongestKeyLength, darkenColor } from '../utils'

export default {
  name: 'dynamic-form',
  props: {
    value: {
      required: true
    },
    /**
     * descriptor of value, extend from https://github.com/yiminghe/async-validator
     */
    descriptor: {
      type: Object,
      required: true
    },
    /**
     * size of the input component
     */
    size: {
      type: String,
      default: 'small'
    },
    /**
     * Whether the key(item of array, key-value of object) can be deleted.
     */
    keyDeletabled: {
      type: Boolean,
      default: false
    },
    /**
     * background-color of form
     */
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    /**
     * font-size of form
     */
    fontSize: {
      type: Number,
      default: 14
    },
    /**
     * darken sub-form's background-color with offset while get positive integer
     */
    bgColorOffset: {
      type: Number,
      default: 0
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
    labelWidth () {
      let len
      if (this._value instanceof Array) {
        len = getStringLength(this._value.length)
      } else {
        len = getLongestKeyLength(this._value)
      }
      return `${len * this.fontSize + 30}px` // add 30px for required char '*'
    },
    style () {
      const style = {
        fontSize: `${this.fontSize}px`
      }
      if (this.bgColorOffset) {
        style.backgroundColor = this.backgroundColor
      }
      return style
    },
    subFormBackgroundColor () {
      return this.bgColorOffset ? darkenColor(this.backgroundColor, this.bgColorOffset) : 'none'
    }
  },
  data () {
    return {}
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      if (!this.value) {
        this.$set(this, '_value', this.parseDescriptor(this.descriptor))
      }
    },
    isComplexType (type) {
      return ['object', 'array'].includes(type)
    },
    parseDescriptor (descriptor) {
      if (this.isComplexType(descriptor.type)) {
        if (descriptor.type === 'object') {
          // object
          if (descriptor.fields) {
            const data = {}
            for (const key in descriptor.fields) {
              data[key] = this.parseDescriptor(descriptor.fields[key])
            }
            return data
          } else if (descriptor.defaultField) {
            // object is a hashmap
            return {}
          } else {
            this._emitError(new Error('Invalid descriptor'))
            return false
          }
        } else {
          // array
          return []
        }
      } else {
        return null
      }
    },
    _emitError (error) {
      this.$emit('error', error)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

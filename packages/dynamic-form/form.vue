<template>
  <div class="dynamic-form" :style="style">
    <el-form
      v-if="_value"
      ref="dynamic-form"
      :model="_value"
      :rules="descriptors">
      <dynamic-form-item
        v-for="(descriptor, key) in descriptors"
        v-model="_value[key]"
        :key="key"
        :lang="lang"
        :label="findTypeDescriptor(descriptor).label || key"
        :prop="key"
        :label-width="labelWidth"
        :descriptor="descriptor"
        :language="language"
        :size="size"
        :background-color="backgroundColor"
        :bg-color-offset="bgColorOffset"
        :show-outer-error="showOuterError">
      </dynamic-form-item>
      <el-form-item v-if="$slots.operations" class="operations" :label-width="labelWidth">
        <slot name="operations"></slot>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import DynamicFormItem from '../dynamic-form-item/form-item'
import { isComplexType, getLabelWidth, findTypeDescriptor } from '../utils'
import i18n from '../i18n'

export default {
  name: 'dynamic-form',
  props: {
    value: {
      type: Object,
      required: true
    },
    lang: {
      type: String,
      default: 'zh_CN'
    },
    /**
     * custom languages, format refer to packages/i18n.js
     */
    languages: Object,
    /**
     * descriptor of value, extend from https://github.com/yiminghe/async-validator
     */
    descriptors: {
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
     * whether show parent component's error, default true
     */
    showOuterError: {
      type: Boolean,
      default: true
    },
    /**
     * darken sub-form's background-color with offset while get positive integer
     */
    bgColorOffset: {
      type: Number,
      default: 8
    }
  },
  components: {
    DynamicFormItem
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
    labelWidth () {
      return getLabelWidth(this.descriptors, this.fontSize)
    },
    style () {
      const style = {
        fontSize: `${this.fontSize}px`,
        backgroundColor: this.backgroundColor
      }
      return style
    },
    language () {
      return (this.languages || i18n)[this.lang]
    }
  },
  data () {
    return {
      i18n
    }
  },
  created () {
    this.init()
  },
  methods: {
    findTypeDescriptor,
    init () {
      this.initValue()
    },
    initValue () {
      for (const key in this.descriptors) {
        this.setValueKey(this, this._value, key, this.descriptors[key])
      }
    },
    setValueKey (target, value, key, descriptor) {
      if (isComplexType(descriptor.type)) {
        if (descriptor.type === 'object') {
          // object
          if (descriptor.fields) {
            // normal object
            if (value[key] === undefined) {
              target.$set(value, key, {})
            }
            for (const _key in descriptor.fields) {
              target.setValueKey(target, value[key], _key, descriptor.fields[_key])
            }
          } else {
            // hashmap
            if (value[key] === undefined) {
              target.$set(value, key, {})
            }
          }
        } else {
          // array
          if (value[key] === undefined) {
            target.$set(value, key, [])
          }
        }
      } else {
        if (value[key] === undefined) {
          target.$set(value, key, null)
        }
      }
    },
    validate (func) {
      if (typeof func === 'function') {
        this.$refs['dynamic-form'].validate(valid => {
          func(valid)
        })
      } else {
        return new Promise((resolve, reject) => {
          this.$refs['dynamic-form'].validate(valid => {
            resolve(valid)
          })
        })
      }
    },
    resetFields () {
      this.$refs['dynamic-form'].resetFields()
    },
    clearValidate () {
      this.$refs['dynamic-form'].clearValidate()
    }
  }
}
</script>

<style lang="scss">
// cover element's css avoid the nested error style
.dynamic-form {
  .el-form-item.is-success, .add-key-input-group {
    .el-input__inner,
    .el-input__inner:focus,
    .el-textarea__inner,
    .el-textarea__inner:focus {
      border-color: #DCDFE6;
    }
  }
}
</style>

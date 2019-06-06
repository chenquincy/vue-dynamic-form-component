<template>
  <el-form-item
    ref="root-form-item"
    class="dynamic-form-item"
    :label="label || prop"
    :prop="prop"
    :size="size"
    :rules="descriptor"
    :label-width="labelWidth">
    <dynamic-input
      v-if="!isComplexType(descriptor.type)"
      v-model="_value"
      :size="size"
      :disabled="descriptor.disabled"
      :type="descriptor.type"
      :extend="{ options: descriptor.enum }">
    </dynamic-input>
    <!-- complex type, object or array -->
    <template v-else>
      <!-- normal object or hashmap object -->
      <template v-if="descriptor.type === 'object'">
        <!-- normal object with known keys -->
        <div
          v-if="!descriptor.defaultField"
          class="sub-dynamic-form"
          :style="{backgroundColor: subFormBackgroundColor}">
          <dynamic-form-item
            v-for="(_descriptor, key) in descriptor.fields"
            v-model="_value[key]"
            :key="key"
            :label="_descriptor.label || key"
            :prop="prop ? prop + '.' + key : key"
            :descriptor="_descriptor"
            :label-width="getLabelWidth(descriptor.fields, fontSize)"
            :background-color="subFormBackgroundColor">
          </dynamic-form-item>
        </div>
        <!-- hashmap object -->
        <div
          v-else
          class="sub-dynamic-form hashmap"
          :style="{backgroundColor: subFormBackgroundColor}">
          <dynamic-form-item
            v-for="(temp, key) in _value"
            v-model="_value[key]"
            :key="key"
            :label="key"
            :prop="prop ? prop + '.' + key : key"
            :deletable="true"
            :descriptor="descriptor.defaultField"
            :label-width="getLabelWidth(_value, fontSize)"
            :background-color="subFormBackgroundColor"
            @delete="deleteKey(key)">
          </dynamic-form-item>
          <div class="add-key-input-group">
            <el-input v-model="hashMapKey" :placeholder="languages[lang].addKeyPlaceholder" :size="size"></el-input>
            <el-button type="primary" icon="el-icon-plus" :size="size" :disabled="!hashMapKey" @click="addHashMapKey" plain></el-button>
          </div>
        </div>
      </template>
      <!-- array -->
      <template v-else>
        <div class="sub-dynamic-form array" :style="{backgroundColor: subFormBackgroundColor}">
          <dynamic-form-item
            v-for="(temp, key) in _value"
            v-model="_value[key]"
            :key="key"
            :label="`Item ${key + 1}`"
            :prop="prop ? prop + '.' + key : key"
            :deletable="true"
            :descriptor="descriptor.defaultField"
            :label-width="getLabelWidth(_value, fontSize)"
            :background-color="subFormBackgroundColor"
            @delete="deleteItem(key)">
          </dynamic-form-item>
          <div class="add-key-input-group">
            <el-button type="primary" icon="el-icon-plus" :size="size" @click="addArrayItem" plain></el-button>
          </div>
        </div>
      </template>
    </template>
    <el-button class="delete-button" v-if="deletable" type="text" icon="el-icon-close" @click="emitDelete"></el-button>
  </el-form-item>
</template>

<script>
import { FormItem, Input, Button } from 'element-ui'
import { getLabelWidth, darkenColor, parseDescriptor } from '../utils'
import DynamicInput from '../dynamic-input/input'
import languages from '../i18n'

export default {
  name: 'dynamic-form-item',
  props: {
    value: {
      required: true
    },
    prop: {
      type: String,
      default: ''
    },
    label: String,
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
     * font-size of form
     */
    fontSize: {
      type: Number,
      default: 14
    },
    /**
     * background-color of form
     */
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    /**
     * darken sub-form's background-color with offset while get positive integer
     */
    bgColorOffset: {
      type: Number,
      default: 8
    },
    deletable: {
      type: Boolean,
      default: false
    },
    labelWidth: String,
    lang: {
      type: String,
      default: 'en_US'
    }
  },
  components: {
    ElFormItem: FormItem,
    ElInput: Input,
    ElButton: Button,
    DynamicInput
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
    subFormBackgroundColor () {
      return this.bgColorOffset ? darkenColor(this.backgroundColor, this.bgColorOffset) : 'none'
    }
  },
  data () {
    return {
      languages,
      hashMapKey: ''
    }
  },
  created () {
  },
  methods: {
    getLabelWidth,
    clearValidate () {
      this.$refs['root-form-item'].clearValidate()
    },
    addHashMapKey () {
      this.$set(this._value, this.hashMapKey, parseDescriptor(this.descriptor.defaultField))
    },
    addArrayItem () {
      this._value.push(parseDescriptor(this.descriptor.defaultField))
    },
    isComplexType (type) {
      return ['object', 'array'].includes(type)
    },
    emitDelete () {
      this.$emit('delete')
    },
    deleteKey (key) {
      this.$delete(this._value, key)
    },
    deleteItem (index) {
      this._value.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-dynamic-form {
  border-radius: 5px;
  padding: 10px;
  .el-form-item:last-child {
    margin-bottom: 10px;
  }
}
.add-key-input-group {
  display: flex;
  margin-top: 10px;

  .el-input {
    width: 250px;
    margin-right: 10px;
  }
}
.add-key-input-group:first-child {
  margin-top: 0;
}
.delete-button {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 20px;
  color: #F56C6C;
}
.delete-button:hover {
  color: red;
}
</style>

<template>
  <div id="app">
    <dynamic-form
      v-model="data"
      ref="dynamic-form"
      lang="zh_CN"
      :descriptors="descriptors">
    </dynamic-form>
    <el-button @click="validForm">检验</el-button>
  </div>
</template>

<script>
import { Button } from 'element-ui'
import DynamicForm from '../packages/dynamic-form/index'
import descriptors from './descriptor'

export default {
  name: 'app',
  components: {
    ElButton: Button,
    DynamicForm
  },
  data () {
    return {
      data: {
        normalObject: {
          prop1: {
            boolean: false,
            number: 1,
            date: null,
            string: 'test',
            enum: 'value-1'
          }
        }
      },
      descriptors
    }
  },
  methods: {
    async validForm () {
      const valid = await this.$refs['dynamic-form'].validate()
      console.log(valid)
    }
  },
  created () {}
}
</script>

<style lang="scss">
.input-wrap {
  width: 400px;
}
</style>

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
      data: {},
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
html, body {
  margin: 0;
  padding: 0;
}
</style>

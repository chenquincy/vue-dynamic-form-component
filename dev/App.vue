<template>
  <div id="app">
    <dynamic-form
      v-model="data"
      ref="dynamic-form"
      lang="zh_CN"
      :descriptors="descriptors">
      <template slot="operations">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="validate" plain>校验</el-button>
      </template>
    </dynamic-form>
  </div>
</template>

<script>
import { Button } from 'element-ui'
import DynamicForm from '../packages/dynamic-form/index'
import descriptors from './descriptor'

export default {
  name: 'app',
  components: {
    DynamicForm,
    ElButton: Button
  },
  data () {
    return {
      data: {},
      descriptors
    }
  },
  methods: {
    reset () {
      this.$refs['dynamic-form'].resetFields()
    },
    validate () {
      this.$refs['dynamic-form'].validate()
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

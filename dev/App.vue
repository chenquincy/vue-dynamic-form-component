<template>
  <div id="app">
    <dynamic-form
      v-model="data"
      ref="dynamic-form"
      lang="en_US"
      :descriptors="descriptors">
      <template slot="operations">
        <el-button @click="reset">Reset</el-button>
        <el-button type="primary" @click="validate" plain>Validate</el-button>
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
  watch: {
    'data.string' (value) {
      if (value) {
        this.descriptors.object.fields.string.hidden = true
      } else {
        this.descriptors.object.fields.string.hidden = false
      }
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
#app {
  padding: 20px;
}
</style>

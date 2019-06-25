<template>
  <dynamic-form
    ref="dynamic-form"
    v-model="data"
    :descriptors="descriptors">
    <template slot="operations">
      <el-button @click="clearValidate">clearValidate</el-button>
      <el-button type="primary" @click="resetFields" plain>resetFields</el-button>
      <el-button type="primary" @click="validate">validate</el-button>
    </template>
  </dynamic-form>
</template>

<script>
export default {
  data () {
    return {
      descriptors: {
        prop1: {
          type: 'object',
          required: true,
          fields: {
            prop1: { type: 'string', required: true }
          }
        },
        prop2: {
          type: 'object',
          required: true,
          defaultField: { type: 'string', required: true }
        }
      },
      data: {}
    }
  },
  methods: {
    clearValidate () {
      this.$refs['dynamic-form'].clearValidate()
    },
    resetFields () {
      this.$refs['dynamic-form'].resetFields()
    },
    async validate () {
      const valid = await this.$refs['dynamic-form'].validate()
      window.alert(`valid result ====> ${valid}`)
    }
  }
}
</script>
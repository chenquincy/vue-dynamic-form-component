<template>
  <dynamic-form
    ref="dynamic-form"
    v-model="data"
    :lang="lang"
    :descriptors="descriptors"
    size="mini"
    background-color="#FEFEFE"
    :font-size="12"
    :bg-color-offset="5">
    <template slot="operations">
      <el-button @click="clearValidate">clearValidate</el-button>
      <el-button @click="resetFields">resetFields</el-button>
      <el-button type="primary" @click="validate" plain>validate</el-button>
    </template>
  </dynamic-form>
</template>

<script>
export default {
  props: ['lang'],
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
    validate () {
      this.$refs['dynamic-form'].validate()
    }
  }
}
</script>
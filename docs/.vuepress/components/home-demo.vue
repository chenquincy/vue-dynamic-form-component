<template>
  <dynamic-form
    ref="dynamic-form"
    v-model="data"
    :descriptors="descriptors">
    <template slot="operations">
      <el-button @click="reset">Reset</el-button>
      <el-button type="primary" @click="validate" plain>Validate</el-button>
    </template>
  </dynamic-form>
</template>

<script>
export default {
  name: 'home-demo',
  data () {
    return {
      descriptors: {
        prop1: { type: 'number', required: true },
        prop2: {
          type: 'object',
          label: 'object label',
          fields: {
            prop1: { type: 'email', required: true },
            prop2: { type: 'number', required: true },
            prop3: [
              { type: 'string', required: true, message: 'object label.prop3 is required' },
              { pattern: /test/, message: 'object label.prop3 should include test' }
            ],
            prop4: {
              type: 'enum',
              enum: [0, 1],
              options: [
                { label: 'option 1', value: 0, disabled: true },
                { label: 'option 2', value: 1 }
              ]
            },
            prop5: { type: 'boolean', required: true },
          }
        }
      },
      data: {}
    }
  },
  methods: {
    reset () {
      this.$refs['dynamic-form'].resetFields()
    },
    validate () {
      this.$refs['dynamic-form'].validate()
    }
  }
}
</script>
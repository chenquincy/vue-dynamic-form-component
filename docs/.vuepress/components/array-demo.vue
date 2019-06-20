<template>
  <dynamic-form
    v-model="data"
    :descriptors="descriptors">
  </dynamic-form>
</template>

<script>
export default {
  name: 'array-demo',
  data () {
    return {
      descriptors: {
        array: {
          type: 'array',
          label: 'array',
          defaultField: {
            type: 'object',
            fields: {
              boolean: { type: 'boolean', required: true },
              number: { type: 'number', required: true },
              string: { type: 'string', required: true, pattern: /^test$/g }
            }
          }
        },
        multiSelect: {
          type: 'array',
          label: 'multi-select',
          required: true,
          defaultField: {
            type: 'enum',
            multiple: true,
            enum: [0, 1, 2, 3],
            options: [
              { label: 'option-0', value: 0, disabled: true },
              { label: 'option-1', value: 1 },
              { label: 'option-2', value: 2 },
              { label: 'option-3', value: 3 }
            ]
          }
        }
      },
      data: {}
    }
  }
}
</script>
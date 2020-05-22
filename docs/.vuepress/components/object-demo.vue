<template>
  <dynamic-form
    v-model="data"
    :descriptors="descriptors"
    :lang="lang">
  </dynamic-form>
</template>

<script>
export default {
  props: ['lang'],
  data () {
    return {
      descriptors: {
        object: {
          type: 'object',
          label: 'Normal Object',
          fields: {
            object: {
              type: 'object',
              label: 'Child Object',
              fields: {
                boolean: { type: 'boolean', required: true },
                number: { type: 'number', required: true },
                string: { type: 'string', required: true, pattern: /^test$/g }
              }
            },
            boolean: { type: 'boolean', required: true },
            number: { type: 'number', required: true },
            string: { type: 'string', required: true, pattern: /^test$/g }
          }
        }
      },
      data: {}
    }
  }
}
</script>
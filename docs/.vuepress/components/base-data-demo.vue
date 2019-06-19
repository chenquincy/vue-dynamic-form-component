<template>
  <dynamic-form
    v-model="data"
    :descriptors="descriptors">
  </dynamic-form>
</template>

<script>
export default {
  name: 'base-data-demo',
  data () {
    return {
      descriptors: {
        date: { type: 'date', label: 'date \'s label', required: false },
        number: { type: 'number', label: 'number \'s label', required: true, placeholder: 'please input the number' },
        string: { type: 'string', label: 'string \'s label', required: true, pattern: /^test$/g },
        url: { type: 'url', label: 'url \'s label', required: true, placeholder: 'please input the url' },
        email: { type: 'email', label: 'email \'s label', required: false },
        enum: { type: 'enum', label: 'enum\'s label', enum: ['value-1', 'value-2'] }
      },
      data: {}
    }
  }
}
</script>
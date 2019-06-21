<template>
  <dynamic-form
    v-model="data"
    :descriptors="descriptors">
  </dynamic-form>
</template>

<script>
export default {
  data () {
    return {
      descriptors: {
        string: { type: 'string', label: 'username', required: true, message: 'Input the username please' },
        url: [
          { type: 'url', label: 'homepage', message: 'Homepage must be a url' },
          { required: true, message: 'Homepage is required' }
        ],
        test: { type: 'string', whitespace: true }
      },
      data: {}
    }
  }
}
</script>
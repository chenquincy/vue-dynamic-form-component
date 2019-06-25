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
        author: [
          { type: 'string', label: 'Author Name', required: true },
          {
            validator: (rule, value, callback) => {
              if (value.length <= 5) {
                callback(new Error('The author name\'s length must more than 5'))
              } else {
                callback()
              }
            }
          }
        ]
      },
      data: {}
    }
  }
}
</script>
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
        image: {
          type: 'url',
          required: true,
          message: 'please upload an image',
          component: {
            name: 'el-upload',
            children: [
              { name: 'el-button', children: 'click to upload', props: { type: 'primary', plain: true, size: 'small' } }
            ],
            props: {
              action: 'https://jsonplaceholder.typicode.com/posts/',
              onError: function (error, file, fileList) {
                console.log('upload error ==> ', error)
              }
            }
          }
        }
      },
      data: {}
    }
  }
}
</script>
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
        fruits: {
          type: 'string',
          message: 'choose your favorate fruit',
          component: {
            name: 'el-radio-group',
            props: {
              fill: 'red'
            },
            events: {
              change: (data) => {
                window.alert(`you choose the ${data}`);
              }
            },
            children: [
              {
                name: 'el-radio-button',
                props: {
                  label: 'apple'
                }
              },
              {
                name: 'el-radio-button',
                props: {
                  label: 'banana',
                  disabled: true
                }
              }
            ]
          }
        }
      },
      data: {}
    }
  }
}
</script>
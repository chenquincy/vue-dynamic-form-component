<template>
  <div id="app">
    <div
      class="form-demo"
      v-for="(descriptor, key) in descriptors"
      :key="key">
      <dynamic-form
        v-model="data[key]"
        :descriptor="descriptor"
        :bg-color-offset="255">
      </dynamic-form>
    </div>
  </div>
</template>

<script>
import DynamicForm from '../packages/dynamic-form/index'
import descriptors from './descriptor'

export default {
  name: 'app',
  components: {
    DynamicForm
  },
  data () {
    return {
      data: {
        normalArray: [1, 2, 3]
      },
      descriptors
    }
  },
  methods: {
  },
  created () {}
}
</script>

<style lang="scss">
.input-wrap {
  width: 400px;
}
</style>

# Getting Started

::: tip Warm Prompt
VueDynamicFormComponent should use with [Vue](https://vuejs.org/), please install Vue first.
:::

## Installation

### NPM

``` bash
# 安装
yarn add vue-dynamic-form-component
# or NPM
npm install vue-dynamic-form-component
```

### Script Tag

Please download the source code by yourself, then import `lib/vue-dynamic-form-component.umd.js`

## Registration

### Global Registration

``` js
import Vue from 'Vue'
import DynamicForm from 'vue-dynamic-form-component'

Vue.use(DynamicForm)
```

### Register in Component

``` vue
<script>
import DynamicForm from 'vue-dynamic-form-component'
export default {
  components: {
    DynamicForm
  }
}
</script>
```

## Example

### Simple Data Type

<code-demo name="base-data-demo"></code-demo>

<<<@/docs/.vuepress/components/base-data-demo.vue

### Nested Object

<code-demo name="object-demo"></code-demo>

<<<@/docs/.vuepress/components/object-demo.vue

### HashMap

<code-demo name="hashmap-demo"></code-demo>

<<<@/docs/.vuepress/components/hashmap-demo.vue

### Array

<code-demo name="array-demo"></code-demo>

<<<@/docs/.vuepress/components/array-demo.vue


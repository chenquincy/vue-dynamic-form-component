# 快速上手

::: tip 温馨提示
VueDynamicForm只能在[Vue](https://vuejs.org/)框架中使用，请提前安装好Vue依赖
:::

## 安装

### NPM

``` bash
# 安装
yarn add vue-dynamic-form
# or NPM
npm install vue-dynamic-form
```

### Script标签引入

请自行下载对应版本的源代码，并引入 `lib/vue-dynamic-form.umd.js`

## 注册

### 全局注册

``` js
import Vue from 'Vue'
import DynamicForm from 'vue-dynamic-form'

Vue.use(DynamicForm)
```

### 组件内注册

``` vue
<script>
import DynamicForm from 'vue-dynamic-form'
export default {
  components: {
    DynamicForm
  }
}
</script>
```

## 示例

### 简单类型

<code-demo name="base-data-demo" lang="zh_CN"></code-demo>

<<<@/docs/.vuepress/components/base-data-demo.vue

### 嵌套对象

<code-demo name="object-demo" lang="zh_CN"></code-demo>

<<<@/docs/.vuepress/components/object-demo.vue

### HashMap

<code-demo name="hashmap-demo" lang="zh_CN"></code-demo>

<<<@/docs/.vuepress/components/hashmap-demo.vue

### 数组

<code-demo name="array-demo" lang="zh_CN"></code-demo>

<<<@/docs/.vuepress/components/array-demo.vue


# 快速上手

::: tip 温馨提示
vue-dynamic-form-component只能在[Vue](https://vuejs.org/)框架中使用，请提前安装好Vue依赖
:::

## 安装

``` bash
# yarn
yarn add vue-dynamic-form-component
# or npm
npm install vue-dynamic-form-component
```



## 注册

### 全局注册

``` js
import Vue from 'Vue'
import DynamicForm from 'vue-dynamic-form-component'

Vue.use(DynamicForm)
```

### 组件内注册

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

## 使用

### 简单类型

组件支持常见的输入类型：`string`, `number`, `boolean`, `integer`, `float`, `enum`, `date`, `url`,  `email` 等等，更多类型请查阅 [descriptor.type](/zh/api/descriptors/#type)

<code-demo name="base-data-demo" lang="zh_CN"></code-demo>

<<<@/docs/.vuepress/components/base-data-demo.vue

### 对象

 `type: 'object'` 与 `fields` 配合使用即可生成嵌套对象

<code-demo name="object-demo" lang="zh_CN"></code-demo>

<<<@/docs/.vuepress/components/object-demo.vue

### HashMap

`type: 'object'` 与 `defaultField` 配合使用即可生成 **Hashmap**

<code-demo name="hashmap-demo" lang="zh_CN"></code-demo>

<<<@/docs/.vuepress/components/hashmap-demo.vue

### 数组

`type: 'array'` 与 `defaultField` 配合使用可以生成对应数组，当数组元素是可枚举类型时，推荐在 `defaultField` 中使用 `enum` 类型并设置 `multiple: true`，组件将会为这个数组生成一个多选下拉框。

<code-demo name="array-demo" lang="zh_CN"></code-demo>

<<<@/docs/.vuepress/components/array-demo.vue

### 自定义校验

一般情况下，在你声明了 `type` 后，你不需要对字段编写额外的校验代码，**vue-dynamic-form-component** 自带了默认的校验规则及校验信息。

如果你需要自定义校验规则或校验信息，可以采用以下方式

#### 自定义校验信息

给对应规则添加 `message` 字段即可覆盖原校验信息，可以使用数组形式给一个属性添加多条规则

::: warning 注意
特殊属性 `label`, `fields`, `defaultField` 等只能和 `type` 属性在同一规则中，具体查阅 [descriptor.type](/zh/api/descriptors/#type)
:::

<code-demo name="custom-message" lang="zh_CN"></code-demo>

<<<@/docs/.vuepress/components/custom-message.vue

#### 自定义规则

**vue-dynamic-form-component** 提供了很多配置属性来满足大部分验证规则，以下为一些常用配置，更多配置请查阅 [descriptor](/zh/api/descriptors/#descriptor)

| 属性      | 类型                            | 说明                                                         |
| --------- | ------------------------------- | ------------------------------------------------------------ |
| required  | Boolean                         | 字段是否为必填                                               |
| pattern   | RegExp                          | 用于匹配字段值的正则表达式                                   |
| len       | Number                          | 验证字符串或数组的长度                                       |
| validator | Function(rule, value, callback) | 自定义校验函数, callback(Error)表示校验失败, callback()校验通过 |

<code-demo name="custom-validator" lang="zh_CN"></code-demo>

<<<@/docs/.vuepress/components/custom-validator.vue

### 表单操作

**vue-dynamic-form-component** 提供了几个常用的方法来操作表单，可以配合 `operations` 插槽使用。

::: tip 温馨提示
为方便演示，文档中引入了 `el-button` 组件，如实际使用中需要，请自行引入。表单方法的具体参数请查阅 [组件方法](/zh/api/dynamic-form/#方法)。
:::

<code-demo name="form-operation" lang="zh_CN"></code-demo>

<<<@/docs/.vuepress/components/form-operation.vue{6,7,8,9,10}


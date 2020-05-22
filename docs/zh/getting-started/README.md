# 快速上手

::: tip 温馨提示
vue-dynamic-form-component 依赖于 [Vue](https://vuejs.org/) 和 [element-ui]([https://element.faas.ele.me)，请提前安装
:::

## 安装

### CDN

目前可以通过 [unpkg.com/vue-dynamic-form-component](https://unpkg.com/vue-dynamic-form-component/) 获取最新版本的资源，使用示例：

<<<@/docs/.vuepress/demos/cdn.html



### NPM

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

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
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import DynamicForm from 'vue-dynamic-form-component'
Vue.use(DynamicForm)
```

### 组件内注册

::: tip 温馨提示
不要忘记提前注册  [element-ui]([https://element.faas.ele.me)
:::

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

### 自定义组件

::: tip 温馨提示
使用自定义组件功能，需保证 `组件版本 >= 2.5.0`
:::

**vue-dynamic-form-component** 内置了常见数据类型的组件，一般情况下你不需要自定义组件。但有些情况下我们确实需要自定义组件，为了满足特殊场景，提供了自定义组件的方式，例如，当我们想要使用单选框来代替下拉选择时，使用方式如下：

<code-demo name="custom-component" lang="zh_CN"></code-demo>

<<<@/docs/.vuepress/components/custom-component.vue

组件内部使用 v-model 进行数据绑定，因此，当自定义组件可以使用 v-model ，则不需要进行特殊处理，直接更改组件名即可，descriptors 中的自定义组件格式：

``` json
component: {
  name: 'el-radio-group', // 要使用的自定义组件名称
  props: {}, // 组件属性
  events: {}, // 绑定事件
  children: [], // 和组件相同的格式或者字符串表示纯文本节点
}
```

#### 非 v-model 组件

如果想要使用 el-image 这类非 v-model 组件，则需要自行封装一个组件来实现。新建一个自定义组件：

``` vue
<template>
  <div class="my-image">
    <el-image :src="_value"></el-image>
  </div>
</template>

<script>
export default {
  name: 'my-image',
  props: {
    value: {
      required: true
    }
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
```

全局注册该组件

``` js
import MyImage from './MyImage'
Vue.component(MyImage.name, MyImage)
```

之后就可以像上一步中一样使用该组件。

当然你也可以在自定义组件中添加更多的逻辑，例如图片加载失败时替换为默认值：

``` vue
<template>
  <div class="my-image">
    <el-image :src="_value" @error="error"></el-image>
  </div>
</template>

<script>
export default {
  name: 'my-image',
  props: {
    value: {
      required: true
    }
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  method: {
    error () {
      this._value = '<default-image-url>'
    }
  }
}
</script>
```

### 表单操作

**vue-dynamic-form-component** 提供了几个常用的方法来操作表单，可以配合 `operations` 插槽使用。

::: tip 温馨提示
为方便演示，文档中引入了 `el-button` 组件，如实际使用中需要，请自行引入。表单方法的具体参数请查阅 [组件方法](/zh/api/dynamic-form/#方法)。
:::

<code-demo name="form-operation" lang="zh_CN"></code-demo>

<<<@/docs/.vuepress/components/form-operation.vue{6,7,8,9,10}


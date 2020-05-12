# Getting Started

::: tip Warm Prompt
vue-dynamic-form-component should use with [Vue](https://vuejs.org/) and  [element-ui]([https://element.faas.ele.me), please install them first.
:::

## Installation

### CDN

Get the latest version from [unpkg.com/vue-dynamic-form-component](https://unpkg.com/vue-dynamic-form-component/), and import the javascript file in your page.

<<<@/docs/.vuepress/demos/cdn.html



### NPM

Installing with npm is recommended and it works seamlessly with [webpack](https://webpack.js.org/).

``` bash
# yarn
yarn add vue-dynamic-form-component
# or npm
npm install vue-dynamic-form-component
```



## Registration

### Global Registered

``` js
import Vue from 'Vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import DynamicForm from 'vue-dynamic-form-component'
Vue.use(DynamicForm)
```

### Registered in Component

::: tip Warm Prompt
Don't forget to register the [element-ui]([https://element.faas.ele.me) first.
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

## Usage

### Simple Data Type

The component support common data type：`string`, `number`, `boolean`,  `integer`, `float`, `enum`, `date`, `url`, `hex`, `email` and so on, more type reference to [descriptor.type](/api/descriptors/#type)

<code-demo name="base-data-demo"></code-demo>

<<<@/docs/.vuepress/components/base-data-demo.vue

### Object

To generate **Object**, use `type: 'object'` with `fields` 

<code-demo name="object-demo"></code-demo>

<<<@/docs/.vuepress/components/object-demo.vue

### Hashmap

To generate **Hashmap**, use `type: 'object'` with `defaultField`

<code-demo name="hashmap-demo"></code-demo>

<<<@/docs/.vuepress/components/hashmap-demo.vue

### Array

To generate **Array**, use `type: 'array'` with `defaultField`. If the array items are enumable, you can use `type: 'enum'` in `defaultField` with `multiple: true` that will generate a multi-select component.

<code-demo name="array-demo"></code-demo>

<<<@/docs/.vuepress/components/array-demo.vue

### Custom Validation

Generally, you don't need to write extra code for field's validation. **vue-dynamic-form-component** provides default validate rule and message base on `type`。

If you need to custom the validate rule or message, you can use the following methods

#### Custom Validate Message

You can cover the default validate message by adding the `message` prop. You can add multi rule for one field by using `Array`.

::: warning Warning
Special prop `label`, `fields`, `defaultField` , ...etc should be used with `type` in one rule. Reference to [descriptor.type](/api/descriptors/#descriptor)
:::

<code-demo name="custom-message"></code-demo>

<<<@/docs/.vuepress/components/custom-message.vue

#### Custom Validator

**vue-dynamic-form-component** provides many configurations to meet most of validate rules. Here are some common configurations, more configurations reference to [descriptor](/api/descriptors/#descriptor).

| Prop      | Type                            | Description                                                  |
| --------- | ------------------------------- | ------------------------------------------------------------ |
| required  | Boolean                         | whether the prop value is required                           |
| pattern   | RegExp                          | regexp to match prop value                                   |
| len       | Number                          | validate `length` of `string` or `array`                     |
| validator | Function(rule, value, callback) | Custom validate function, `callback(Error)` mean validate error, `callback()` mean validate success |

<code-demo name="custom-validator"></code-demo>

<<<@/docs/.vuepress/components/custom-validator.vue

### Custom Component

::: tip Warm Prompt

To custom component, you should ensure `version >= 2.5.0`
:::

**vue-dynamic-form-component** has components for common data type inside, so you don't need to custom the component generally. But sometimes, we need to custom the component, such as upload a file. To meet these scenes, I provide a way to custom the component. Usage like this:

<code-demo name="custom-component" lang="en_US"></code-demo>

<<<@/docs/.vuepress/components/custom-component.vue

The component was writed by used `v-model` , so you can use the custom component directly after changing the `component.name`. The component structure in descriptors is:

``` js
component: {
  name: 'el-radio-group', // component's name
  props: {}, // component's props
  events: {}, // component's events
  children: [], // component or string(plain text dom)
}
```

#### Component without v-model

If you want to use component like `el-image` that without v-model, you need to write a component yourself.

First, write the custom component:

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

Then, register it global:

``` js
import MyImage from './MyImage'
Vue.component(MyImage.name, MyImage)
```

Finally, you can use the component like previous step.

Also, you can add more feature to you custom component, such as set to default value when the image loaded error:

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



### Form Operations

**vue-dynamic-form-component** provides some common methods to operate form, you can use them with `operations` slot.

::: tip Warm Prompt
The document import the `el-button` component for convenience, you should import by yourself, if you need it in actual use. You can refer the specific parameters of form methods to [Component Methods](/api/dynamic-form/#methods).
:::

<code-demo name="form-operation"></code-demo>

<<<@/docs/.vuepress/components/form-operation.vue{6,7,8,9,10}


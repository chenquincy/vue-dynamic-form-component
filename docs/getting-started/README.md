# Getting Started

::: tip Warm Prompt
vue-dynamic-form-component should use with [Vue](https://vuejs.org/), please install Vue first.
:::

## Installation

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
import DynamicForm from 'vue-dynamic-form-component'

Vue.use(DynamicForm)
```

### Registered in Component

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

### Form Operations

**vue-dynamic-form-component** provides some common methods to operate form, you can use them with `operations` slot.

::: tip Warm Prompt
The document import the `el-button` component for convenience, you should import by yourself, if you need it in actual use. You can refer the specific parameters of form methods to [Component Methods](/api/dynamic-form/#methods).
:::

<code-demo name="form-operation"></code-demo>

<<<@/docs/.vuepress/components/form-operation.vue{6,7,8,9,10}


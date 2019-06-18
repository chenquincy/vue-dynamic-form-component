# descriptors

**descriptors** 基于 [async-validator](https://github.com/yiminghe/async-validator) 扩展。只需要按照规则编写 **descriptors**，**VueDynamicForm** 就会自动生成对应的表单元素（表单组件基于 [element-ui](https://element.faas.ele.me)）。

**descriptors** 的格式为：`{ <key>: <descriptor> }`



## descriptor

::: tip 温馨提示
**descriptor** 可以是对象或者数组，需要注意的是，当 **descriptor** 为数组时，与数据类型定义有关的属性（ `fields`、`defaultFields`）和扩展属性（`label`、`placehodler`、`disabled`） 需和 `type` 属性在同一对象中，并且数组中有且仅有一个包含 `type` 属性的对象。
:::

### 常用属性

| 字段          | 说明                                                         | 类型    | 默认值  |
| ------------- | ------------------------------------------------------------ | ------- | ------- |
| type          | 字段数据类型，具体查阅 [async-validator.type](https://github.com/yiminghe/async-validator#type) | String  | string  |
| required      | 字段是否必须                                                 | Boolean | false   |
| pattern       | 正则表达式校验规则                                           | RegExp  |         |
| range         | 针对字符串及数组长度，格式：`{ min: Number, max: Number }`   | Object  |         |
| message       | descriptor校验不通过时显示的错误信息，具体查阅 [async-validator.message](https://github.com/yiminghe/async-validator#messages) | String  |         |
| enum, options | 当 `type === 'enum'` 时至少传入一个，`enum: [value]`，`options: [{label: String, value, disabled: Boolean}]` | Array   |         |
| len           | 字段长度的精准校验，具体查阅 [async-validator.length](https://github.com/yiminghe/async-validator#length) | Number  |         |
| label         | 字段在表单中的显示名称                                       | String  | `<key>` |
| placeholder   | 字段在输入组件中的placeholder                                | String  |         |
| disabled      | 字段是否不可编辑                                             | Boolean | false   |

### 多级对象

当你需要的数据对象是一个多级对象(`object` 或者 `array`)时，你需要用到 `fields` 或者 `defaultFields` 属性（请至少使用其中一个）

#### Fields

当对象不同属性的 `value` 对应规则不同时，使用 `fields` 来声明对象属性的 `descriptor`

``` js
/* 数据结构
{
  user: {
    name: String,
    gender: 'male' | 'female'
  }
}
*/
export default {
  user: {
    type: 'object',
    fields: {
      name: { type: 'string', required: true },
      gender: { type: 'enum', required: true, enum: ['male', 'female'] }
    }
  }
}
```

#### DefaultField

当对象或数组不同属性的 `value` 对应规则相同时，使用 `defaultField` 来声明对象或数组属性的 `descriptor`

``` js
/* 数据结构
{
  users: [
  	{ name: String, gender: 'male' | 'female' }
  ]
}
*/
export default {
  users: {
    type: 'array',
    defaultField: {
      type: 'object',
      fields: {
        name: { type: 'string', required: true },
        gender: { type: 'enum', required: true, enum: ['male', 'female'] }
      }
    }
  }
}
```

``` js
/* 数据结构
{
  dict: {
  	<key>: { name: String, gender: 'male' | 'female' }
  }
}
*/
export default {
  dict: {
    type: 'object',
    defaultField: {
      type: 'object',
      fields: {
        name: { type: 'string', required: true },
        gender: { type: 'enum', required: true, enum: ['male', 'female'] }
      }
    }
  }
}
```
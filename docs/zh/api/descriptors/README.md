# descriptors

**descriptors** 基于 [async-validator](https://github.com/yiminghe/async-validator) 扩展。只需要按照规则编写 **descriptors**，**vue-dynamic-form-component** 就会自动生成对应的表单元素（表单组件基于 [element-ui](https://element.faas.ele.me)）。

**descriptors** 的格式为：`{ <key>: <descriptor> }`，其中，**descriptor** 可以是对象或者数组。

## descriptor

::: warning 注意
**descriptor** 可以是对象或者数组，但是，当 **descriptor** 为数组时，与数据类型定义有关的属性（ `fields`、`defaultFields`）和扩展属性（`label`、`placeholder`、`hidden`、`disabled`、`options`、`autocomplete`） 需和 `type` 属性在同一对象中，并且数组中有且仅有一个包含 `type` 属性的对象。
:::

### type

`string` 类型，表示字段类型，包含常见的数据类型

| 值        | 说明                                                         | 对应组件            |
| --------- | ------------------------------------------------------------ | ------------------- |
| `string`  | 字符串类型                                                   | `el-input`          |
| `number`  | `number`类型，自动添加 `.number` 修饰符                      | `el-input`          |
| `boolean` | 布尔类型                                                     | `el-switch`         |
| `regexp`  | 正则表达式，必须是可以正确转化为 `RegExp` 实例的字符串       | `el-input`          |
| `integer` | `number` 类型的整数，自动添加 `.number` 修饰符               | `el-input`          |
| `float`   | `number` 类型的浮点数，自动添加 `.number` 修饰符             | `el-input`          |
| `enum`    | 枚举类型，需要和 [enum, options](/zh/api/descriptor#enum, options) 配合使用，值必须是 `enum` 数组中的一个 | `el-select`         |
| `date`    | 必须是合法的 `Date` 对象                                     | `el-date-picker`    |
| `url`     | 符合链接格式的字符串                                         | `el-input`          |
| `hex`     | 符合哈希格式的字符串                                         | `el-input`          |
| `email`   | 符合邮件格式的字符串                                         | `el-input`          |
| `object`  | `object` 类型，配合 `fields` 和  `defaultField` 使用         | `dynamic-form-item` |
| `array`   | `array` 类型，配合 `defaultField` 使用                       | `dynamic-form-item` |

### label

`string` 类型，表单中对应字段的label值，需和 `type` 在同一个对象中

### placeholder

`string` 类型，对应输入组件的placeholder值，需和 `type` 在同一个对象中，`type === 'object' | 'array'` 时无效

### hidden

`boolean` 类型，是否隐藏对应的输入组件，需和 `type` 在同一个对象中。需要注意的是，触发校验时，被隐藏的组件值依然会进行校验。

### disabled

`boolean` 类型，对应的输入组件是否不可编辑，需和 `type` 在同一个对象中。

### autocomplete

input 组件原生属性，自动补全，可选值: `on`, `off`，默认为 `off`

### required

`boolean` 类型，表示字段值是否为必须值，不填表示非必须

### pattern

`Regexp` 类型，字段值必须符合该正则表达式

### min | max

`number` 类型，适用于 `string`, `array`, `number` 类型

对于 `string` 或 `array` ，字段值的 `length` 必须介于 `min` 和 `max` 之间，对于 `number` 类型，值必须介于 `min` 和 `max` 之间

### len

精准匹配字段值的长度或大小，规则类似 `min | max`，`len` 优先级高于 `min | max`

### enum, options

`array`类型，仅当 `type` 为 `enum` 时有效，用于列举字段值的所有选项，格式：

``` js
{
  type: 'enum',
  enum: [0, 1, 2],
  options: [
    { label: 'female', value: 0 },
    { label: 'male', value: 1 },
    { label: 'secret', value: 2, disabled: true }
  ]
}
```

当没有 `options` 时，`label === value`

### whitespace

`boolean` 类型，仅适用于 `type === 'string'`，判断字段值是否为空（只包含空格的值也视为空）

### message

`string` 类型，用于覆盖默认的错误提示信息，一个验证规则对应一条错误提示。

``` js
const descriptors = {
  name: [
    { type: 'string', required: true, message: 'username is required' },
    { min: 3, max 20, message: 'username length must between 3 to 20' },
    { whitespace: true, message: 'username can not be whitespace' }
  ]
}
```

### fields

`object` 类型，只在 `type  === 'object'` 时有效，当子字段值是不同格式时使用。事实上它就是字段值的 `descriptors`，你可以使用它来获取 **嵌套对象**。

``` js
const descriptors = {
  company: {
    type: 'object',
    fields: {
      name: { type: 'string', required: true },
      address: {
        type: 'object',
        fields: {
          country: { type: 'string', required: true },
          province: { type: 'string', required: true }
        }
      }
    }
  }
}
```

以上 `descriptors` 获取的数据格式为

``` js
{
  company: {
    name: String,
    address: {
      country: String,
      province: String
    }
  }
}
```

### defaultField

`object | array` 类型，优先级高于 `fields`，只在 `type === 'object' | 'array'` 时有效，当子字段值是相同格式时使用。事实上它就是字段值的 `descriptor`，你可以使用它来获取 **Hashmap** 或 **多维数组** 等复杂类型。

``` js
const descriptors = {
  dict: {
    type: 'object',
    defaultField: { type: 'string', required: true }
  },
  array2d: {
    type: 'array',
    defaultField: {
      type: 'array',
      defaultField: { type: 'string', required: true }
    }
  }
}
```

以上 `descriptor` 获取的数据格式为

``` js
{
  dict: {
    <key>: String
  },
  array2d: [
    [String]
  ]
}
```

### validator

`Function` 类型，自定义校验函数，可以通过它来自定义校验规则，格式为：`validator(rule: Object, value, callback: Function)`

* `rule`

  当前校验的规则对象

* `value`

  对应字段的当前值

* `callback`

  校验回调函数，`callback(new Error(<message>))` 时表示校验不通过，`message`为显示的错误提示，`callback()` 表示校验通过

``` js
const descriptors = {
  name: [
    { type: 'string', required: true },
    {
      validator: function (rule, value, callback) {
      	if (value.length < 5) {
    			return callback(new Error('name should logger than 5'))
    		}
        if (value.indexOf('/%$') !== -1) {
          return callback(new Error('name can not include /%$'))
        }
				return callback()
    	}
    }
  ]
}
```


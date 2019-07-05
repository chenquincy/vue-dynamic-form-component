# descriptors

**descriptors**  is extended from [async-validator](https://github.com/yiminghe/async-validator). Just need to write **descriptors** follow the rules，**vue-dynamic-form-component** will generate the form component automatically(use [element-ui](https://element.faas.ele.me)).

**descriptors** 's format:  `{ <key>: <descriptor> }`, the `descriptor` can be object or array.



## descriptor

::: tip Warm Prompt
**descriptor** can be `object` or `array`, but the `fields`, `defaultFields`, `label`, `placeholder`, `disabled`, `options`  props should be brother props with `type`. In addition, there is only one object include `type` prop in array.
:::

### type

`string`, declare the type of data's field, include common data type.

| Value     | Description                                                  | Component           |
| --------- | ------------------------------------------------------------ | ------------------- |
| `string`  | Must be a string                                             | `el-input`          |
| `number`  | Must be a number                                             | `el-input`          |
| `boolean` | Must be a boolean                                            | `el-switch`         |
| `regexp`  | Must be an instance of `RegExp` or a string that does not generate an exception when creating a new `RegExp`. | `el-input`          |
| `integer` | Must be of type `number` and an integer.                     | `el-input`          |
| `float`   | Must be of type `number` and a floating point number.        | `el-input`          |
| `enum`    | Value must exist in the `enum`. Can be used with `enum` and `options` | `el-select`         |
| `date`    | Value must be valid as determined by `Date`                  | `el-date-picker`    |
| `url`     | Must be of type `url`                                        | `el-input`          |
| `hex`     | Must be of type `hex`                                        | `el-input`          |
| `email`   | Must be of type `email`                                      | `el-input`          |
| `object`  | Must be of type `object` and not `Array.isArray`. Use with `fields` or `defaultField` | `dynamic-form-item` |
| `array`   | Must be an array as determined by `Array.isArray`. Use with `defaultField` | `dynamic-form-item` |

### label

`string`, field's label in form, should be declared with `type` in the same object.

### placeholder

`string`, field component's placeholder prop, should be declared with `type` in the same object, invalid while `type === 'object' | 'array'`

### hidden

`boolean` , whether hidden the input component of value, should be declared with `type` in the same object. Note that the hidden value still will be validated while validating.

### required

`boolean`, is field required, without or `false` means the field is not required.

### pattern

`Regexp`, the field's value must match to pass validation.

### min | max

`number`, can be used for `string`, `array`, `number`

For `string` and `array`, field's length should in `[min, max]`. For `number`, field's value should in `[min, max]`.

### len

`number`, can be used for `string`, `array`, `number`

For `string` and `array`, field's length should equal to `len`. For `number`, field's value should equal to `len`. 

> If the `len` property is combined with the `min` and `max` range properties, `len` takes precedence.

### enum, options

`array`, only can be used while `type === 'enum'`, here is the format:

```js
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

`options` is optional, `label === value` without `options`

### whitespace

`boolean`, only can be used while `type === 'string'`. Validate error if value only contain whitespace.

### message

`string`, cover the default error message, one validate rule can have one message.

```js
const descriptors = {
  name: [
    { type: 'string', required: true, message: 'username is required' },
    { min: 3, max 20, message: 'username length must between 3 to 20' },
    { whitespace: true, message: 'username can not be whitespace' }
  ]
}
```

### fields

`object`, only can be used while `type === 'object'`. You can use it if the child fields have different value format. Actually, it is the `descriptors` of field's value, your use it to get **nested object**.

```js
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

The above `descriptors` get the data with this structure:

```js
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

`object | array`, priority to `fields`, only can be used while `type === 'object' | 'array'`. You can use it if the child fields have same value format. Actually, it is the `descriptor` of field, you can use it to get complex data structures like **Hashmap** or **multidimensional arrays**.

```js
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

The above `descriptors` get the data with this structure:

```js
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

`Function`, custom the validate function with format: `validator(rule: Object, value, callback: Function)`

- `rule`

  the validate rule of the field

- `value`

  the value of the field

- `callback`

  callback function of validation. `callback(new Error(<message>))` means validate error, `message` is the error message. `callback()` means validate success.

```js
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


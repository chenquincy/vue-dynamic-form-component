# descriptors

**descriptors**  is extended from [async-validator](https://github.com/yiminghe/async-validator). Just need to write **descriptors** follow the rules，**VueDynamicForm** will generate the right form component automatically(use [element-ui](https://element.faas.ele.me)).

**descriptors** 's format:  `{ <key>: <descriptor> }`



## descriptor

::: tip Warm Prompt
**descriptor** can be `object` or `array`, the `fields`, `defaultFields`, `label`, `placeholder`, `disabled`  props should be brother props with `type`. In addition, there is only one object include `type` prop in array.
:::

### Common Prop

| prop          | description                                                  | type    | default |
| ------------- | ------------------------------------------------------------ | ------- | ------- |
| type          | prop's data type，refer to [async-validator.type](https://github.com/yiminghe/async-validator#type) | String  | string  |
| required      | is prop required                                             | Boolean | false   |
| pattern       | regex to validate prop value                                 | RegExp  |         |
| range         | range of `string` or `array`, format: `{ min: Number, max: Number }` | Object  |         |
| message       | error message show while validate error, refer to [async-validator.message](https://github.com/yiminghe/async-validator#messages) | String  |         |
| enum, options | while `type === 'enum'` , enum is required, options is optional. Format:  `enum: [value]`，`options: [{label: String, value, disabled: Boolean}]` | Array   |         |
| len           | validate prop value's length, refer to [async-validator.length](https://github.com/yiminghe/async-validator#length) | Number  |         |
| label         | form label of prop                                           | String  | `<key>` |
| placeholder   | placeholder of prop's component in form                      | String  |         |
| disabled      | is prop value disabled                                       | Boolean | false   |

### Nested Object/Array

You need to use `fields` or `defaultFields` while the data you want is a nested object or array.

#### Fields

Use `fields` to describe the prop's value, while the prop's value has different rule.

``` js
/* data struct
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

Use `defaultField` to describe the data prop's value, while the prop's value has same rule.

``` js
/* data struct
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
/* data struct
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
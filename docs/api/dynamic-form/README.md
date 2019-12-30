# dynamic-form

## Props

| prop            | description                                                  | type    | option values       | default | required |
| --------------- | ------------------------------------------------------------ | ------- | ------------------- | ------- | -------- |
| value           | form data                                                    | object  |                     |         | yes      |
| lang            | language                                                     | string  | en_US,zh_CN         | zh_CN   |          |
| descriptors     | descriptors of form data, refer to [descriptor](/zh/api/descriptors/) | object  |                     |         | yes      |
| size            | size of form component                                       | string  | medium,small,mini   | small   |          |
| backgroundColor | root form background color                                   | string  | Hex color or 'none' | none    |          |
| fontSize        | font size of form                                            | number  |                     | 14      |          |
| bgColorOffset   | form background color offset                                 | number  |                     | 8       |          |
| showOuterError  | whether show parent component's error                        | boolean |                     | true    |          |

`languages` format：

```js
// <lang> is the lang prop
{
  <lang>: {
    addKeyPlaceholder: 'Input the key you want to add',
    addKeyButtonText: 'Add Key',
    addArrayItemButtonText: 'Add Item'
  }
}
```



## Slots

| slot name  | description                                                 |
| ---------- | ------------------------------------------------------------ |
| operations | operation slot for form, use to put submit/reset button generally |

## Methods

| method        | description                                                 | params                                                       |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| validate      | validate the form. Takes a optional callback function as a param. Callback function will be executed with one param(validate result) while having the callback param. Return a promise(resolve validate result) without callback param. | Function(callback: (valid) => {}):void \| Function():Promise(Boolean) |
| resetFields   | reset form and remove validation result                      | () => {}                                                     |
| clearValidate | clear validation message of form                             | () => {}                                                     |

## Example

<code-demo name="form-demo"></code-demo>

<<< @/docs/.vuepress/components/form-demo.vue


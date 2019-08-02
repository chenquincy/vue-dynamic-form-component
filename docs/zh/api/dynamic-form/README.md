# dynamic-form

## 属性

| 参数            | 说明                                                         | 类型   | 可选值            | 默认值 | 必传 |
| --------------- | ------------------------------------------------------------ | ------ | ----------------- | ------ | ---- |
| value           | 表单数据对象                                                 | object |                   |        | 是   |
| lang            | 显示语言                                                     | string | en_US,zh_CN       | zh_CN  |      |
| languages       | 自定义语言包                                                 | object |                   |        |      |
| descriptors     | 表单数据对象的描述器，详见 [descriptor](/zh/api/descriptors/) | object |                   |        | 是   |
| size            | 表单组件元素的大小                                           | string | medium,small,mini | small  |      |
| backgroundColor | 表单最外层背景                                               | string | 如：#FFFFFF       | none   |      |
| fontSize        | 表单字体大小                                                 | number |                   | 14     |      |
| bgColorOffset   | 不同层级表单的背景色偏移量                                   | number |                   | 8      |      |

languages格式：

``` js
// <lang> 与 lang 属性对应
{
  <lang>: {
    addKeyPlaceholder: 'Input the key you want to add',
    addKeyButtonText: 'Add Key',
    addArrayItemButtonText: 'Add Item'
  }
}
```



## 插槽

| 插槽名     | 说明                                       |
| ---------- | ------------------------------------------ |
| operations | 表单操作区插槽，一般用于放置提交、重置按钮 |

## 方法

| 方法          | 说明                                                         | 参数                                                         |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| validate      | 触发表单的校验函数，有一个可选的callback函数。当传入callback函数时，回调函数会在校验结束后被调用；若不传参，则返回一个Promise，结果为表示校验是否通过的布尔值 | Function(callback: (valid) => {}):void \| Function():Promise(Boolean) |
| resetFields   | 重置表单，将所有字段重置为初始值并移除校验结果               | () => {}                                                     |
| clearValidate | 移除校验结果                                                 | () => {}                                                     |

## 示例

<code-demo name="form-demo" lang="zh_CN"></code-demo>

<<< @/docs/.vuepress/components/form-demo.vue


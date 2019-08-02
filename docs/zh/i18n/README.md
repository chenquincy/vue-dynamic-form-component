# 多语言

组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置。

## element-ui配置

首先，由于组件的输入组件都来源于 `element-ui`，我们需要先设置 `element-ui` 的多语言配置，在 `main.js` 中：

``` js
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })
```

更多的 `element-ui` 多语言配置可以查看 [element-ui多语言配置](https://element.faas.ele.me/#/zh-CN/component/i18n)

## 配置组件

组件默认自带了中文和英文语言包，可以通过 `lang` 属性切换

``` vue
<template>
  <dynamic-form
    v-model="data"
    lang="en_US"
    :descriptors="descriptors">
  </dynamic-form>
</template>
```

属性取值对应表为

| 语言 | 值    |
| ---- | ----- |
| 中文 | zh_CN |
| 英文 | en_US |

### 自定义语言包

组件提供 `languages` 属性供用户自行扩展语言包，`languages` 格式如下：

``` js
{
  'zh_CN': {
    addKeyPlaceholder: '请输入您想要的键值',
    addKeyButtonText: '添加键值',
    addArrayItemButtonText: '添加元素'
  },
  'en_US': {
    ...
  }
}
```

``` html
<template>
  <dynamic-form
    v-model="data"
    lang="en_US"
    :languages="languages"
    :descriptors="descriptors">
  </dynamic-form>
</template>
```


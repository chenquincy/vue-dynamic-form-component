## Internationalization

The default language of component is Chinese. If you want to use the another language, you need to do some configurations.

## element-ui setting

Firstly, we should set the i18n configurations of `element-ui`, because vue-dynamic-form-component is based on `element-ui`. 

``` js
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })
```

You can see the more configuration way here: [element-ui multi-languages setting](https://element.faas.ele.me/#/zh-CN/component/i18n)

## component setting

The component is designed with chinese and english languages inside, you can toggle language by `lang` prop.

``` vue
<template>
  <dynamic-form
    v-model="data"
    lang="en_US"
    :descriptors="descriptors">
  </dynamic-form>
</template>
```

prop-value map is:

| Language | Value |
| -------- | ----- |
| Chinese  | zh_CN |
| English  | en_US |

### Custom language packages

You can use `languages` prop to custom the languages by yourself, this is the `languages` format:

``` js
{
  'en_US': {
    addKeyPlaceholder: 'Input the key you want to add',
    addKeyButtonText: 'Add Key',
    addArrayItemButtonText: 'Add Item'
  },
  'zh_CN': {
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


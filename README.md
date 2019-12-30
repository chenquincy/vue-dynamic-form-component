# Introduction

**vue-dynamic-form-component** is a dynamic form component base on [element-ui](https://element.faas.ele.me/#/zh-CN) and [async-validator](https://github.com/yiminghe/async-validator). You just need to write **descriptors**(reference to [async-validator](https://github.com/yiminghe/async-validator)) of the data you want, **vue-dynamic-form-component** will generate the form automatically.

## Usage

``` vue
<template>
  <dynamic-form
    ref="dynamic-form"
    v-model="data"
    :descriptors="descriptors">
    <template slot="operations">
      <el-button @click="reset">reset</el-button>
      <el-button type="primary" @click="validate">validate</el-button>
    </template>
  </dynamic-form>
</template>

<script>
// import and register element-ui first
import DynamicForm from 'vue-dynamic-form-component'

export default {
  components: {
    DynamicForm
  },
  data () {
    return {
      descriptors: {
        name: { type: 'string', min: 3, mex: 15, required: true },
        homepage: { type: 'url', message: 'The homepage must be an url' },
        company: {
          type: 'object',
          fields: {
            name: { type: 'string', required: true },
            address: {
              type: 'object',
              fields: {
                province: { type: 'string', required: true },
                city: { type: 'string' }
              }
            }
          }
        },
        children: {
          type: 'array',
          defaultField: {
            type: 'object',
            fields:{
              name: { type: 'string', min: 3, max: 15, required: true },
              age: { type: 'number', min: 1, max: 100, required: true }
            }
          }
        }
      },
      data: {}
    }
  },
  methods: {
    reset () {
      this.$refs['dynamic-form'].resetFields()
    },
    validate () {
			this.$refs['dynamic-form'].validate()
    }
  }
}
</script>
```

![vue-dynamic-form-component.gif](https://raw.githubusercontent.com/chenquincy/vue-dynamic-form-component/master/public/vue-dynamic-form-component.gif)

## Docs

- [English Docs](http://vue-dynamic-form.quincychen.cn)
- [中文文档](http://vue-dynamic-form.quincychen.cn/zh/)

## Features

- Generate form from **descriptors**
- Support almost all data type
- Support **multi-level form** for `Object `/ `Array` / `Hashmap` 
- Support data **validation**
- **Multi-Languages** support

## Todo

**vue-dynamic-form-component** can do more. There are a few things that it currently doesn't support but are planned:

- [x] Custom component props
- [ ] Custom component event
- [ ] Support more component
  - [x] textarea
  - [ ] file upload
- [ ] Custom theme
- [ ] Value change event

## Question

Please submit your question in [Github Issue](https://github.com/chenquincy/vue-dynamic-form-component/issues) .

## License

[MIT license](https://tldrlegal.com/license/mit-license)


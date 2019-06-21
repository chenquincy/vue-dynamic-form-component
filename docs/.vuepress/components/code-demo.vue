<template>
  <div class="code-demo">
    <details :open="!collapse">
      <summary>
        <span class="collapse">{{ lang === 'en_US' ? 'Click To Show/Hide Demo' : '点击显示/隐藏示例' }}</span>
      </summary>
      <component class="demo" :is="name"></component>
    </details>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    collapse: {
      type: Boolean,
      default: true
    },
    lang: {
      type: String,
      default: 'en_US'
    }
  },
  components: {},
  computed: {},
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
$gray: #efefef;
details:focus, details[open], summary:focus {
  outline: none;
}
details[open] {
  summary {
    background-color: $gray;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
summary {
  outline: none;
  color: #636363;
  padding: 10px;
  border-radius: 5px;
  background-color: #f3f3f3;
}
summary:hover {
  cursor: pointer;
  background-color: $gray;
}
.code-demo {
  margin-top: 10px;
  .collapse {
    display: inline-block;
    width: 95%;
  }
}
.demo {
  border: 1px solid $gray;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 10px;
}
</style>
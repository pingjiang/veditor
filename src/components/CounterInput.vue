<template>
<Input class="counter" :maxlength="maxlength" @on-change="handleChange">
  <span class="counter-count" slot="suffix" v-if="maxlength > 0">
    {{ count }} / {{ maxlength }}
  </span>
</Input>
</template>

<script>
export default {
  name: 'CounterInput',
  props: {
    maxlength: {
      type: Number,
      default: 30,
    },
  },
  data() {
    return {
      count: this.value ? this.value.length : 0,
    };
  },
  methods: {
    handleChange(e) {
      const { value } = e.target;
      this.count = value ? value.length : 0;
    },
  },
};
</script>

<style lang="less">
.counter .ivu-input-suffix {
  width: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.counter-count {
  padding: 0 5px;
}
</style>

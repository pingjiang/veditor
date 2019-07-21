<template>
  <div class="gridview">
    <div class="gridview-item" v-for="(item, i) in items" :key="i"></div>
  </div>
</template>

<script>
export default {
  name: 'GridView',
  props: {
    items: Array,
  },
};
</script>

<style lang="less">
.gridview {
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
}

.gridview-item {
  flex: 0 0 120px;
  height: 90px;
  background-color: green;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>

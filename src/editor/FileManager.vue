<template>
  <div class="file-manager">
    <Tabs value="upload">
        <TabPane label="上传" name="upload">
          <Uploader @uploaded="handleUploaded" />
        </TabPane>
        <TabPane label="全部" name="all">
          <GridView :loading="loadingItems" :items="items" />
        </TabPane>
        <TabPane label="图片" name="image">标签二的内容</TabPane>
        <TabPane label="视频" name="video">标签三的内容</TabPane>
    </Tabs>
  </div>
</template>

<script>
import GridView from '../gallery/GridView.vue';
import Uploader from './Uploader.vue';

export default {
  name: 'FileManager',
  components: {
    Uploader,
    GridView,
  },
  props: {
    filesUrl: String,
    uploadsUrl: String,
  },
  data() {
    return {
      loadingItems: false,
      items: new Array(10).fill(0),
    };
  },
  methods: {
    handleUploaded(file) {
      this.$emit('uploaded', file);
    },
  },
};
</script>

<style lang="less">
.file-manager {
  .gridview {
    height: 200px;
  }
}
</style>

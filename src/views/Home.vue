<template>
  <div class="home">
    <CounterInput class="mb-sm" :maxlength="30" />

    <Editor class="editor article-editor" :content="content" :options="editorOptions"
      @input="handleChange"/>

    <div class="article-content preview" v-html="content"></div>

    <Modal v-model="chooseFileModal" class="modal-noheader" width="685px"
      @on-ok="handleChoose">
      <FileManager @uploaded="handleUploaded" />
    </Modal>
  </div>
</template>

<script>
import CounterInput from '../components/CounterInput.vue';
import Editor from '../editor/Editor.vue';
import FileManager from '../editor/FileManager.vue';
import editorOptions from '../editor/config.default';

export default {
  name: 'home',
  components: {
    CounterInput,
    Editor,
    FileManager,
  },
  data() {
    return {
      chooseFileModal: false,
      choosedFiles: null,
      chooseFileType: null,
      _chooseFileToolbar: null,
      content: '',
      editorOptions: this.addHandlers(editorOptions),
    };
  },
  methods: {
    addHandlers(opts) {
      const self = this;

      opts.modules.toolbar.handlers = {
        image: function() {
          self.choose('image', this);
        },
        video: function() {
          self.choose('video', this);
        },
      };

      return opts;
    },
    choose(type, toolbar) {
      this.chooseFileModal = true;
      this.chooseFileType = type;
      this._chooseFileToolbar = toolbar;
      this.choosedFiles = null;
    },
    handleChoose() {
      if (this.choosedFiles && this._chooseFileToolbar) {
        let value = this.choosedFiles;
        const quill = this._chooseFileToolbar.quill;
        const addImgRange = quill.getSelection();
        value = value.indexOf('http') != -1 ? value : ('http:' + value);
        const index = addImgRange != null ? addImgRange.index : 0;
        quill.insertEmbed(index, this.chooseFileType, value, 'user');
        quill.setSelection(index + 1);

        this.choosedFiles = null;
      }

      this.chooseFileType = null;
      this._chooseFileToolbar = null;
      this.chooseFileModal = false;
    },
    handleUploaded(file) {
      this.choosedFiles = file ? file.url : null;
    },
    handleChange(content) {
      this.content = content;
    },
  },
};
</script>

<style lang="less">
.mb-sm {
  margin-bottom: 10px;
}

.modal-noheader {
  .ivu-modal-header {
    display: none;
  }
}

.editor {
  height: 400px;
}

</style>

<template>
<Upload
    multiple
    type="drag" name="file"
    action="/api/files/upload"
    :on-success="handleSuccess"
    :format="['jpg','jpeg','png']"
    :max-size="2048"
    :on-format-error="handleFormatError"
    :on-exceeded-size="handleMaxSize"
    :before-upload="handleBeforeUpload">
    <div style="padding: 20px 0">
        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
        <p>点击或者拖拽文件到此处上传文件</p>
    </div>
</Upload>
</template>

<script>
function trimHost(url) {
  const found = url.indexOf('//');

  if (found !== -1) {
    const got = url.indexOf('/', found + 2);

    if (got !== -1) {
      return got.substr(got + 1);
    }
  }

  return url;
}

export default {
  name: 'Uploader',
  props: {
    msg: String,
  },
  methods: {
    handleSuccess (res, file) {
      console.log('uploader', res, file);
      // fileDownloadUri: "http://localhost:8081/downloadFile/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-21%20%E4%B8%8A%E5%8D%888.13.46.png"
      // fileName: "屏幕快照 2019-07-21 上午8.13.46.png"
      // fileType: "image/png"
      // size: 597226
      // file.url = res ? trimHost(res.fileDownloadUri) : null;
      file.url = res ? ('/api/files/download/' + res.fileName) : null;
      file.name = res ? res.fileName : null;

      this.$emit('uploaded', file);
    },
    handleFormatError (file) {
      this.$Notice.warning({
          title: 'The file format is incorrect',
          desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
      });
    },
    handleMaxSize (file) {
      this.$Notice.warning({
          title: 'Exceeding file size limit',
          desc: 'File  ' + file.name + ' is too large, no more than 2M.'
      });
    },
    handleBeforeUpload () {
      // const check = this.uploadList.length < 5;
      // if (!check) {
      //     this.$Notice.warning({
      //         title: 'Up to five pictures can be uploaded.'
      //     });
      // }
      // return check;
      return true;
    },
  },
};
</script>

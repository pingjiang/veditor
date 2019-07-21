<template>
  <div class="gallery">
    <div ref="DashboardContainer"></div>
  </div>
</template>

<script>
import Uppy from '@uppy/core';
import Dashboard from '@uppy/dashboard';
// import FileInput from '@uppy/file-input';
// import XHRUpload from '@uppy/xhr-upload';
// import ProgressBar from '@uppy/progress-bar';
// import DragDrop from '@uppy/drag-drop';

import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

export default {
  name: 'Gallery',
  props: {
    uploadUrl: String,
  },
  mounted() {
    this.initUppy();
  },
  methods() {
    initUppy() {
      const uppy = Uppy({
        debug: true,
        autoProceed: true,
        restrictions: {
          maxFileSize: 1000000,
          maxNumberOfFiles: 3,
          minNumberOfFiles: 2,
          allowedFileTypes: ['image/*', 'video/*']
        }
      })
      // .use(FileInput, { target: '.UppyForm', replaceTargetContent: true })
      // .use(XHRUpload, {
      //   endpoint: this.uploadUrl,
      //   formData: true,
      //   fieldName: 'files[]'
      // })
      // .use(DragDrop, {target: '.UppyDragDrop-One'})
      // .use(ProgressBar, {
      //   target: 'body',
      //   fixed: true,
      //   hideAfterFinish: false
      // })
      .use(Dashboard, {
        // trigger: '.UppyModalOpenerBtn',
        inline: false,
        replaceTargetContent: true,
        showProgressDetails: true,
        note: 'Images and video only, 2–3 files, up to 1 MB',
        height: 470,
        metaFields: [
          // { id: 'name', name: 'Name', placeholder: 'file name' },
          { id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' }
        ],
        browserBackButtonClose: true
      });

      uppy.on('complete', result => {
        console.log('successful files:', result.successful)
        console.log('failed files:', result.failed)
      });

      this._uppy = uppy;
    },
    showUppyModal() {
      this._uppy.getPlugin('Dashboard').openModal();
    },
  },
};
</script>

import Quill from 'quill';
import BlotFormatter, { AlignAction, DeleteAction, ImageSpec } from 'quill-blot-formatter';
import MagicUrl from 'quill-magic-url';
import { ImageDrop } from 'quill-image-drop-module';
// import ImageResize from 'quill-image-resize-module';

import 'quill/dist/quill.snow.css';
// import 'quill/dist/quill.bubble.css';

Quill.register('modules/blotFormatter', BlotFormatter);
Quill.register('modules/imageDrop', ImageDrop);
Quill.register('modules/magicUrl', MagicUrl);
// Quill.register('modules/imageResize', ImageResize);

export const myToolbar = {
  container: [
    [{ header: '1' }],
    ['bold'],
    ['blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ['link', 'image', 'video'],
  ],
  handlers: {},
};

class CustomImageSpec extends ImageSpec {
  getActions() {
    return [AlignAction, DeleteAction];
  }
}

const blotFormatter = {
  specs: [
    CustomImageSpec,
  ],
  overlay: {
    style: {
      border: '2px solid red',
    },
  },
};

export default {
  theme: 'snow',
  boundary: document.body,
  modules: {
    toolbar: myToolbar,
    blotFormatter,
    imageDrop: true,
    magicUrl: true,
  },
  readOnly: false,
};

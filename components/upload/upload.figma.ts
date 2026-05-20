import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=706-85883', {
  props: {
    disabled: figma.enum('State', {
      disabled: true,
    }),
    multiple: figma.boolean('Multiple'),
  },
  example: (props) =>
    html`<a-upload action="/upload" disabled="${props.disabled}" multiple="${props.multiple}">
  <a-button>
    <upload-outlined />
    Click to Upload
  </a-button>
</a-upload>`,
})

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=708-86749', {
  props: {
    disabled: figma.enum('State', {
      disabled: true,
    }),
  },
  example: (props) =>
    html`<a-upload-dragger action="/upload" disabled="${props.disabled}">
  <p>Drop files here or click to upload</p>
</a-upload-dragger>`,
})

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=708-86668', {
  props: {
    disabled: figma.enum('State', {
      disabled: true,
    }),
  },
  example: (props) =>
    html`<a-upload action="/upload" list-type="picture-card" disabled="${props.disabled}">
  <div>+ Upload</div>
</a-upload>`,
})

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=708-86817', {
  props: {
    disabled: figma.enum('State', {
      disabled: true,
    }),
  },
  example: (props) =>
    html`<a-upload action="/upload" list-type="picture" disabled="${props.disabled}">
  <a-button>
    <upload-outlined />
    Click to Upload
  </a-button>
</a-upload>`,
})

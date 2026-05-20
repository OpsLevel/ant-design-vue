import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=608-2386', {
  props: {},
  example: (props) =>
    html`<a-modal :open="true" title="Modal Title">Modal content</a-modal>`,
})

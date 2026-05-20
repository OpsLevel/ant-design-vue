import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=385-1425', {
  example: (props) =>
    html`<a-result status="success" title="Success" />`,
})

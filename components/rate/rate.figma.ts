import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=493-34614', {
  example: (props) =>
    html`<a-rate :default-value="3" />`,
})

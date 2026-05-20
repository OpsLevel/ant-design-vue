import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=268-2252', {
  props: {
    description: figma.string('Descroption'),
  },
  example: (props) =>
    html`<a-empty description="${props.description}" />`,
})

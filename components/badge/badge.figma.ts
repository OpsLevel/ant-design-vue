import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=345-150472', {
  props: {
    dot: figma.enum('Type', {
      dot: true,
      count: undefined,
    }),
    count: figma.string('Value'),
  },
  example: (props) =>
    html`<a-badge count="${props.count}" dot="${props.dot}"><span /></a-badge>`,
})

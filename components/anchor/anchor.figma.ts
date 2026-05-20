import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=451-73819', {
  props: {
    direction: figma.enum('Direction', {
      vertical: undefined,
      horizontal: 'horizontal',
    }),
  },
  example: (props) =>
    html`<a-anchor direction="${props.direction}"><a-anchor-link href="#" title="Item" /></a-anchor>`,
})

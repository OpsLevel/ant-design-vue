import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=503-4770', {
  props: {
    vertical: figma.enum('Type', {
      horizontal: undefined,
      vertical: true,
    }),
    range: figma.enum('Range', {
      single: undefined,
      range: true,
    }),
    reverse: figma.enum('Reverse', {
      false: undefined,
      true: true,
    }),
  },
  example: (props) =>
    html`<a-slider vertical="${props.vertical}" range="${props.range}" reverse="${props.reverse}" />`,
})

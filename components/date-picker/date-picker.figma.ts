import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=293-19799', {
  props: {
    size: figma.enum('Size', {
      default: undefined,
      large: 'large',
      small: 'small',
    }),
    bordered: figma.enum('Type', {
      base: undefined,
      borderless: 'false',
    }),
  },
  example: (props) =>
    html`<a-date-picker size="${props.size}" :bordered="${props.bordered}" />`,
})

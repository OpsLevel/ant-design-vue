import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=300-34414', {
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
    html`<a-time-picker size="${props.size}" :bordered="${props.bordered}" />`,
})

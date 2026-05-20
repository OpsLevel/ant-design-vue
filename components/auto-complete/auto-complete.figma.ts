import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=766-16473', {
  props: {
    size: figma.enum('Size', {
      default: undefined,
      large: 'large',
      small: 'small',
    }),
    bordered: figma.enum('Bordered', {
      true: undefined,
      false: 'false',
    }),
  },
  example: (props) =>
    html`<a-auto-complete size="${props.size}" :bordered="${props.bordered}" placeholder="Input here" />`,
})

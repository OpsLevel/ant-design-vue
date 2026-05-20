import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=521-20892', {
  props: {
    size: figma.enum('Size', {
      default: undefined,
      large: 'large',
      small: 'small',
    }),
    tip: figma.string('Text'),
  },
  example: (props) =>
    html`<a-spin size="${props.size}" tip="${props.tip}" />`,
})

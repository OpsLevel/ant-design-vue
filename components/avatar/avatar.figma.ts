import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=345-150656', {
  props: {
    shape: figma.enum('Shape', {
      circle: undefined,
      square: 'square',
    }),
    size: figma.enum('Size', {
      default: undefined,
      large: 'large',
      small: 'small',
      customized: 64,
    }),
  },
  example: (props) =>
    html`<a-avatar shape="${props.shape}" size="${props.size}" />`,
})

import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=442-62822', {
  props: {
    size: figma.enum('Gap Size', {
      small: 'small',
      middle: undefined,
      large: 'large',
    }),
    direction: figma.enum('Align', {
      horizontal: undefined,
      vertical: 'vertical',
    }),
  },
  example: (props) =>
    html`<a-space size="${props.size}" direction="${props.direction}"><a-button>Button 1</a-button><a-button>Button 2</a-button></a-space>`,
})

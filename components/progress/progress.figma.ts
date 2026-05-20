import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=542-12827', {
  props: {
    status: figma.enum('State', {
      normal: undefined,
      exception: 'exception',
      success: 'success',
    }),
    size: figma.enum('Size', {
      default: undefined,
      small: 'small',
      custom: undefined,
    }),
    strokeLinecap: figma.enum('Shape', {
      round: undefined,
      square: 'square',
    }),
  },
  example: (props) =>
    html`<a-progress :percent="50" status="${props.status}" size="${props.size}" stroke-linecap="${props.strokeLinecap}" />`,
})

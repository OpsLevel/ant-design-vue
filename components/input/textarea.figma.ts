import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=163-3470', {
  props: {
    size: figma.enum('Size', {
      default: undefined,
      large: 'large',
      small: 'small',
    }),
    disabled: figma.enum('State', {
      disabled: true,
    }),
    status: figma.enum('Status', {
      default: undefined,
      error: 'error',
      warning: 'warning',
    }),
  },
  example: (props) =>
    html`<a-textarea size="${props.size}" disabled="${props.disabled}" status="${props.status}" placeholder="Enter text" />`,
})

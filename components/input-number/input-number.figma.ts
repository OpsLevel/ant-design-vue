import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=241-2464', {
  props: {
    size: figma.enum('Size', {
      default: undefined,
      large: 'large',
      small: 'small',
    }),
    status: figma.enum('Status', {
      default: undefined,
      error: 'error',
      warning: 'warning',
    }),
    disabled: figma.enum('State', {
      disabled: true,
    }),
  },
  example: (props) =>
    html`<a-input-number size="${props.size}" status="${props.status}" disabled="${props.disabled}" />`,
})

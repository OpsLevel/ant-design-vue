import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=156-1946', {
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
    placeholder: figma.string('Placeholder'),
  },
  example: (props) =>
    html`<a-input size="${props.size}" disabled="${props.disabled}" status="${props.status}" placeholder="${props.placeholder}" />`,
})

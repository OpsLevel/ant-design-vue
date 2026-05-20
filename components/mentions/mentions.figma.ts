import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=722-16122', {
  props: {
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
    html`<a-mentions status="${props.status}" disabled="${props.disabled}" placeholder="@mention" />`,
})

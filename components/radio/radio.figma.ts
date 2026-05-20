import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=254-7210', {
  props: {
    checked: figma.enum('Type', {
      checked: 'true',
      unchecked: undefined,
    }),
    disabled: figma.enum('State', {
      disabled: true,
    }),
  },
  example: (props) =>
    html`<a-radio :checked="${props.checked}" disabled="${props.disabled}">Radio</a-radio>`,
})
